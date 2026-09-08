import { access, cp, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// docs/ contém somente a saída gerada. Edite app/, lib/ e public/.
const build = new URL('../dist/', import.meta.url);
const output = new URL('../docs/', import.meta.url);
await access(new URL('index.html', build));
const html = await readFile(new URL('index.html', build), 'utf8');
if (html.includes('<!--prerender-->') || !html.includes('Midea Carrier')) {
  throw new Error('O build precisa conter o portfólio pré-renderizado antes de preparar Pages.');
}
await rm(output, { recursive: true, force: true });
await cp(build, output, { recursive: true });
await writeFile(new URL('.nojekyll', output), '');
console.log(`GitHub Pages preparado em ${fileURLToPath(output)}`);
