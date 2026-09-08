# Calebe Simões — Portfólio

Portfólio profissional de dados, automação com IA e desenvolvimento web. Inclui projetos por área, estudos de caso interativos, trajetória profissional e download do currículo.

A versão aprovada está em **`docs/`**, pronta para GitHub Pages. O restante do repositório contém o código-fonte editável. A publicação não depende de backend, banco de dados, serviço de IA ou API paga.

## Publicar no GitHub Pages

Depois de fazer o merge do pull request:

1. Abra **Settings → Pages** neste repositório.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Selecione a branch **`main`** e a pasta **`/docs`**. Clique em **Save**.
4. Aguarde a execução de publicação e abra **Visit site**.

O endereço será **https://calebesimoes.github.io/** após a primeira publicação bem-sucedida. Não há necessidade de contratar domínio ou usar Vercel para essa versão.

**Selecione `/docs`, não `/(root)`:** o `index.html` da raiz é a entrada de desenvolvimento; `docs/index.html` é o site completo gerado para publicação.

Referência: [documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Editar o portfólio

Requisitos: Node.js 22.13+ e pnpm 11.19.0.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

| Arquivo | Conteúdo |
| --- | --- |
| `app/page.tsx` | Apresentação, trajetória, navegação e interações |
| `lib/projects.ts` | Projetos, tecnologias, estudos de caso e links |
| `app/globals.css` | Cores, tipografia, layout e responsividade |
| `public/cv-calebe-simoes.pdf` | Currículo público para download, sem telefone |
| `public/projects/` | Imagens dos projetos |
| `index.html` | Título e metadados |

Para preparar uma atualização:

```bash
pnpm typecheck
pnpm lint
pnpm pages:prepare
```

O último comando gera o build e atualiza `docs/`. Faça commit das alterações do código **e da pasta `docs/`**. Com Pages habilitado, as atualizações da branch `main` serão publicadas automaticamente.

`docs/` é uma pasta gerada e será substituída por `pages:prepare`. Edite o código-fonte e os arquivos de `public/` para manter as alterações nas próximas compilações.

## Implementação

React, TypeScript e Vite, com pré-renderização do HTML e componentes Tabs/Dialog do Shadcn/Base UI. O conteúdo inicial pode ser lido antes do carregamento do JavaScript. O mapa de competências, a filtragem dos projetos e seus detalhes tornam-se interativos após o carregamento.

O catálogo de componentes e as versões de dependências do projeto original foram preservados. O build padrão usa `vite.static.config.ts`; não depende do serviço Sites, de autenticação ou de recursos Cloudflare. O lint cobre a aplicação e os componentes utilizados; o catálogo não utilizado preserva alertas preexistentes.

Os contatos públicos são LinkedIn, GitHub e e-mail profissional. A versão do CV publicada não contém telefone.

## Evidências e créditos

O conteúdo foi preparado com o histórico fornecido pelo proprietário e a leitura de seus repositórios públicos em setembro de 2026. ESG, Vendas e TODA são projetos de estudo/demonstração com **dados sintéticos**. As métricas exibidas em suas imagens não são resultados de empresas ou clientes reais.

- [Cantinho-IA](https://github.com/CalebeSimoes/Cantinho-IA): automação pessoal com Python, FastAPI, Notion e Ollama. A auditoria executou 322 testes offline com sucesso, sem validar as integrações ao vivo.
- [Eco-Afinidade](https://github.com/CalebeSimoes/PROJETO-ESG): estudo de classificação com XGBoost.
- [TODA](https://github.com/CalebeSimoes/TODA-CORPORATION): aplicação demonstrativa de energia eólica.
- [Vendas](https://github.com/CalebeSimoes/PROJETO-ANALISE-DE-VENDAS): análise e visualização em Python.
- [Portfólio de moda](https://github.com/CalebeSimoes/Web-site-Portfolio-Moda): desenvolvimento de interface web.

Imagens: capturas originais dos repositórios de [TODA](https://github.com/CalebeSimoes/TODA-CORPORATION/blob/main/assets/Capturar.PNG) e [Vendas](https://github.com/CalebeSimoes/PROJETO-ANALISE-DE-VENDAS/blob/main/PROJETOS/DASHBOARD/dashboard_vendas_completo.png). Fonte Space Grotesk sob SIL Open Font License, incluída em `public/fonts/OFL.txt`. Ícones funcionais: Lucide.

Verificações realizadas: TypeScript, lint da aplicação, build, pré-renderização, referências locais, integridade do pacote e extração do PDF público. Não foram executados Lighthouse ou testes de interação em navegador.
