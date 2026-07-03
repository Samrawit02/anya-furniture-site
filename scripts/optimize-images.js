import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Config: prefer public/img, fall back to img/
const preferred = [
  path.resolve(process.cwd(), 'public', 'img'),
  path.resolve(process.cwd(), 'img')
];

let inputDir = null;
for(const p of preferred){ if(fs.existsSync(p)){ inputDir = p; break; } }
if(!inputDir) inputDir = preferred[0]; // default to public/img if none exist
const outDir = path.join(inputDir, 'generated');
const widths = [320, 640, 1024, 1600];
const formats = ['webp', 'avif', 'jpeg'];

async function ensureDir(dir){
  await fs.promises.mkdir(dir, { recursive: true });
}

function isImageFile(name){
  return /\.(jpe?g|png)$/i.test(name);
}

async function processFile(file){
  const inputPath = path.join(inputDir, file);
  const name = file.replace(/\.(jpe?g|png)$/i, '');

  for(const w of widths){
    for(const fmt of formats){
      const outName = `${name}-${w}.${fmt}`;
      const outPath = path.join(outDir, outName);

      try{
        const transformer = sharp(inputPath)
          .resize({ width: w, withoutEnlargement: true });

        if(fmt === 'webp') transformer.webp({ quality: 80 });
        else if(fmt === 'avif') transformer.avif({ quality: 50 });
        else if(fmt === 'jpeg') transformer.jpeg({ quality: 85 });

        await transformer.toFile(outPath);
        console.log('written', outPath);
      }catch(err){
        console.error('error processing', inputPath, err.message);
      }
    }
  }
}

async function run(){
  if(!fs.existsSync(inputDir)){
    console.error('Input images folder not found:', inputDir);
    process.exit(1);
  }

  await ensureDir(outDir);

  const files = await fs.promises.readdir(inputDir);
  const images = files.filter(isImageFile);
  if(images.length === 0){
    console.warn('No images found in', inputDir);
    return;
  }

  for(const f of images){
    await processFile(f);
  }

  console.log('Optimization complete. Generated images in', outDir);
}

run().catch(err => { console.error(err); process.exit(1); });
