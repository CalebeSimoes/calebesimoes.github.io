export type ProjectCategory =
  | 'Dados & ML'
  | 'IA & Automação'
  | 'Desenvolvimento';
export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  type: string;
  description: string;
  tags: string[];
  problem: string;
  solution: string;
  learning: string;
  evidence: string;
  repository: string;
  image?: string;
  imageAlt?: string;
  visual: 'flow' | 'esg' | 'energy' | 'sales';
};
export const projects: Project[] = [
  {
    id: 'cantinho',
    name: 'Cantinho-IA',
    category: 'IA & Automação',
    type: 'Projeto pessoal',
    visual: 'flow',
    description:
      'Um assistente que conecta linguagem natural, IA local e organização no Notion. Da consulta à ação, com confirmação e controle.',
    tags: ['Python', 'FastAPI', 'Ollama', 'Notion API'],
    problem:
      'Conectar pedidos em linguagem natural à consulta e organização de informações, preservando o controle sobre alterações.',
    solution:
      'API com FastAPI e Pydantic, roteamento híbrido e modelos locais via Ollama. Integra cinco áreas do Notion, com paginação, confirmação de ações, checkpoints e proteção contra operações duplicadas.',
    learning:
      'Integração de APIs, validação de entrada e desenho de fluxos de automação que lidam com confirmação, falhas e retomadas.',
    evidence:
      '322 testes automatizados passaram em execução offline. Esse resultado verifica a lógica testada; integrações ao vivo com Notion e Ollama não fizeram parte dessa execução.',
    repository: 'https://github.com/CalebeSimoes/Cantinho-IA',
  },
  {
    id: 'esg',
    name: 'Eco-Afinidade',
    category: 'Dados & ML',
    type: 'Estudo com dados sintéticos',
    visual: 'esg',
    description:
      'Classificação com XGBoost para explorar afinidade com produtos ESG. Um estudo de modelagem, avaliação e interpretação de variáveis.',
    tags: ['Python', 'Pandas', 'XGBoost', 'scikit-learn'],
    problem:
      'Investigar, em um cenário simulado, como atributos de perfil e investimento podem compor um modelo de afinidade com produtos sustentáveis.',
    solution:
      'Geração de 10 mil registros sintéticos, tratamento de variáveis, one-hot encoding, separação entre treino e teste e classificação com XGBoost. Análise da importância de variáveis e das métricas de classificação.',
    learning:
      'Relacionar preparação de dados, avaliação do modelo e comunicação dos limites de um experimento ao contexto de negócio.',
    evidence:
      'Projeto de estudo, sem dados de clientes ou implantação bancária. As associações refletem a base simulada e não demonstram comportamento real de clientes, causalidade ou retorno financeiro.',
    repository: 'https://github.com/CalebeSimoes/PROJETO-ESG',
  },
  {
    id: 'toda',
    name: 'TODA · Energia eólica',
    category: 'Desenvolvimento',
    type: 'Aplicação demonstrativa',
    visual: 'energy',
    description:
      'Uma aplicação web que reúne modelagem em Python e um dashboard para explorar produção e receita de energia eólica em cenários simulados.',
    tags: ['Flask', 'Python', 'JavaScript', 'scikit-learn'],
    problem:
      'Tornar a análise de um cenário de geração de energia mais acessível, conectando processamento de dados a uma interface web.',
    solution:
      'Aplicação Flask com processamento em Pandas, regressão com scikit-learn e interface HTML, CSS e JavaScript. Usa uma base climática simulada de 1.500 amostras e apresenta indicadores e gráficos de energia e receita.',
    learning:
      'Conectar backend, modelo preditivo e interface, explicando premissas e resultados de uma simulação.',
    evidence:
      'Projeto demonstrativo com dados sintéticos. TODA é o nome do projeto; não representa vínculo profissional, cliente atendido ou validação em uma operação energética real.',
    repository: 'https://github.com/CalebeSimoes/TODA-CORPORATION',
    image: 'projects/toda-dashboard.png',
    imageAlt:
      'Dashboard original do projeto TODA, com indicadores e gráficos de um cenário simulado de energia eólica.',
  },
  {
    id: 'vendas',
    name: 'Vendas em perspectiva',
    category: 'Dados & ML',
    type: 'Estudo com dados sintéticos',
    visual: 'sales',
    description:
      'Da preparação da base à visualização: análise de vendas, ticket médio, categorias e desempenho por vendedor em um dashboard com sete painéis.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    problem:
      'Organizar dados de vendas e construir uma leitura visual das principais dimensões de uma operação comercial simulada.',
    solution:
      'Geração de 500 registros sintéticos, agregações com Pandas e sete painéis em Matplotlib e Seaborn, cobrindo evolução das vendas, vendedores, categorias, ticket médio e correlações.',
    learning:
      'Transformar uma tabela em indicadores, escolher agregações e construir visualizações para responder perguntas sobre a operação.',
    evidence:
      'Dados gerados para estudo. Os indicadores da imagem pertencem à simulação e não são resultados de uma empresa real. O projeto inclui um script de criação de tabela SQLite, sem alegar um pipeline SQL completo.',
    repository: 'https://github.com/CalebeSimoes/PROJETO-ANALISE-DE-VENDAS',
    image: 'projects/vendas-dashboard.png',
    imageAlt:
      'Dashboard original de análise de vendas com sete gráficos sobre uma base de dados sintética.',
  },
];
export const categories = [
  'Todos',
  'Dados & ML',
  'IA & Automação',
  'Desenvolvimento',
] as const;
