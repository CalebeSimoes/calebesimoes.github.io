import { createServer } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
const server = await createServer({
  configFile: 'vite.static.config.ts',
  server: { middlewareMode: true },
  appType: 'custom',
});
try {
  const { default: Home } = await server.ssrLoadModule('/app/page.tsx');
  const html = await readFile('dist/index.html', 'utf8');
  await writeFile(
    'dist/index.html',
    html.replace('<!--prerender-->', renderToString(createElement(Home))),
  );
  console.log('HTML pré-renderizado: conteúdo disponível antes do JavaScript.');
} finally {
  await server.close();
}
