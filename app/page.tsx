'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Download,
  GitBranch as Github,
  BriefcaseBusiness as Linkedin,
  Mail,
  Menu,
  X,
  Database,
  Code2,
  Workflow,
  BrainCircuit,
  Terminal,
  ShieldCheck,
  GraduationCap,
  ChartNoAxesCombined,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { projects, categories, type Project } from '@/lib/projects';

const links = {
  github: 'https://github.com/CalebeSimoes',
  linkedin: 'https://www.linkedin.com/in/calebe-sim%C3%B5es/',
  email: 'mailto:calebesimoes731@gmail.com',
};
const skillNodes = [
  {
    id: 'data',
    label: 'Dados & BI',
    Icon: Database,
    description:
      'Python, SQL e Power BI para investigar dados e acompanhar indicadores.',
  },
  {
    id: 'ai',
    label: 'IA & Automação',
    Icon: BrainCircuit,
    description:
      'Modelos locais, APIs e fluxos de automação com validação e confirmação.',
  },
  {
    id: 'web',
    label: 'Desenvolvimento',
    Icon: Code2,
    description:
      'Flask, FastAPI e JavaScript para conectar lógica, dados e interfaces.',
  },
  {
    id: 'python',
    label: 'Python & ML',
    Icon: Terminal,
    description:
      'Pandas, scikit-learn e XGBoost em projetos de análise e aprendizado de máquina.',
  },
];

function SkillNetwork() {
  const [active, setActive] = useState('data');
  return (
    <div className="network" aria-label="Mapa interativo de competências">
      <div className="network-head">
        <span>EXPLORAR CONEXÕES</span>
        <span>01 — 04</span>
      </div>
      <svg className="network-svg" viewBox="0 0 500 476" aria-hidden="true">
        <g stroke="#596c40" fill="none">
          <path d="M130 140L250 238L385 130M250 238L406 332M250 238L142 362" />
          <path
            d="M130 140L385 130L406 332L142 362Z"
            strokeDasharray="3 8"
            opacity=".5"
          />
        </g>
        <g fill="#bcef6d">
          {[
            [130, 140],
            [385, 130],
            [406, 332],
            [142, 362],
            [205, 197],
            [324, 195],
            [330, 286],
            [193, 304],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3} />
          ))}
        </g>
      </svg>
      <div className="network-center">
        <strong>
          CS<span className="accent">.</span>
        </strong>
        <span>DADOS + CÓDIGO</span>
      </div>
      {skillNodes.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`skill-node node-${id}`}
          aria-pressed={active === id}
          aria-describedby="skill-description"
          onClick={() => setActive(id)}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
      <span className="network-coordinate" aria-hidden="true">
        + CS.
      </span>
      <p id="skill-description" className="network-hint" aria-live="polite">
        {skillNodes.find((node) => node.id === active)?.description}
      </p>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual">
      {project.image ? (
        <>
          <img
            className="real-project-image"
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            width={project.id === 'toda' ? 1168 : 5946}
            height={project.id === 'toda' ? 669 : 4754}
          />
          <span className="image-caption">
            CAPTURA DO PROJETO · DADOS SINTÉTICOS
          </span>
        </>
      ) : (
        <>
          <div className="visual-topline">
            <span>
              {project.id === 'cantinho'
                ? 'CANTINHO / SISTEMA DE AUTOMAÇÃO'
                : 'ECO-AFINIDADE / FLUXO DE MODELAGEM'}
            </span>
            <span>{project.id === 'cantinho' ? '01' : '02'}</span>
          </div>
          {project.visual === 'flow' ? (
            <div className="flow-visual" aria-hidden="true">
              <div className="flow-step">
                <Terminal size={27} />
                <span>Seu pedido</span>
              </div>
              <span className="flow-connector">→</span>
              <div className="flow-step highlight">
                <BrainCircuit size={32} />
                <span>IA local</span>
              </div>
              <span className="flow-connector">→</span>
              <div className="flow-step">
                <ShieldCheck size={27} />
                <span>Confirmar</span>
              </div>
            </div>
          ) : (
            <div className="flow-visual" aria-hidden="true">
              <div className="flow-step">
                <Database size={27} />
                <span>Base sintética</span>
              </div>
              <span className="flow-connector">→</span>
              <div className="flow-step highlight">
                <Workflow size={32} />
                <span>XGBoost</span>
              </div>
              <span className="flow-connector">→</span>
              <div className="flow-step">
                <ChartNoAxesCombined size={27} />
                <span>Avaliação</span>
              </div>
            </div>
          )}
          <span className="visual-caption">
            {project.id === 'cantinho'
              ? 'Fluxo simplificado · execução após confirmação'
              : '10.000 registros simulados · estudo de classificação'}
          </span>
        </>
      )}
      <span className="visual-open" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article className="project-card">
      <button
        className="project-visual-button"
        onClick={() => onOpen(project)}
        aria-label={`Conhecer o projeto ${project.name}`}
      >
        <ProjectVisual project={project} />
      </button>
      <div className="project-info">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.type}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <button className="text-button" onClick={() => onOpen(project)}>
            Explorar projeto <ArrowUpRight size={16} />
          </button>
          <a
            className="text-button"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ver código de ${project.name} no GitHub`}
          >
            <Github size={16} />
            Código
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a
            className="wordmark"
            href="#inicio"
            aria-label="Calebe Simões, início"
          >
            calebe.simões<span>↗</span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#trajetoria">Trajetória</a>
          </nav>
          <a className="header-contact" href="#contato">
            Vamos conversar <ArrowUpRight size={17} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Navegação mobile"
          >
            {[
              ['Projetos', 'projetos'],
              ['Sobre', 'sobre'],
              ['Trajetória', 'trajetoria'],
              ['Contato', 'contato'],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="conteudo">
        <section className="wrap hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow hero-kicker">
              <span className="status-dot" /> DADOS, AUTOMAÇÃO & DESENVOLVIMENTO
            </div>
            <h1>
              Entre dados,
              <br />
              código e<br />
              <em>possibilidades.</em>
            </h1>
            <p className="hero-description">
              Sou Calebe Simões. Atuo com dados na Midea Carrier e construo
              projetos que conectam análise, inteligência artificial e
              aplicações web.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projetos">
                Explore meus projetos <ArrowDown size={17} />
              </a>
              <a className="button-quiet" href="cv-calebe-simoes.pdf" download>
                <Download size={16} />
                Baixar currículo
              </a>
            </div>
            <div className="hero-foot">
              <span>São Paulo, Brasil</span>
              <span aria-hidden="true">·</span>
              <span>Ciência da Computação</span>
            </div>
          </div>
          <SkillNetwork />
        </section>
        <div className="wrap intro-strip">
          <p>
            <strong>Dados na prática.</strong> Curiosidade para ir além.
          </p>
          <div className="stack-line">
            <span>
              <Terminal size={16} />
              Python
            </span>
            <span>
              <Database size={16} />
              SQL
            </span>
            <span>
              <ChartNoAxesCombined size={16} />
              Power BI
            </span>
            <span>
              <Code2 size={16} />
              JavaScript
            </span>
          </div>
        </div>
        <section className="wrap section" id="projetos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / PROJETOS SELECIONADOS</p>
              <h2>
                Ideias que viraram código<span className="accent">.</span>
              </h2>
            </div>
            <p className="section-note">
              Problemas, escolhas técnicas e aprendizados. Explore o contexto de
              cada projeto.
            </p>
          </div>
          <Tabs className="project-tabs" defaultValue="Todos">
            <TabsList aria-label="Filtrar projetos por área">
              {categories.map((category) => (
                <TabsTrigger value={category} key={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent value={category} key={category}>
                <div className="project-grid">
                  {projects
                    .filter(
                      (project) =>
                        category === 'Todos' || project.category === category,
                    )
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onOpen={setSelected}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="additional-project">
            <div>
              <span className="eyebrow">OUTRA VERTENTE / FRONT-END</span>
              <h3>Portfólio de moda.</h3>
              <p>
                Interface responsiva com HTML, CSS e JavaScript, galerias e
                apresentação de projetos.
              </p>
            </div>
            <a
              className="button-quiet"
              href="https://github.com/CalebeSimoes/Web-site-Portfolio-Moda"
              target="_blank"
              rel="noreferrer"
            >
              Ver projeto web <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="wrap section about" id="sobre">
          <div>
            <p className="eyebrow">02 / SOBRE MIM</p>
            <h2>
              Entender o problema.
              <br />
              <span className="accent">Construir a solução.</span>
            </h2>
            <div className="education-label">
              <GraduationCap size={22} />
              <span>
                Ciência da Computação · FAM
                <br />
                2025 — 2028 · em andamento
              </span>
            </div>
          </div>
          <div className="about-text">
            <p>
              Minha trajetória começou em operações e processos. Hoje, uso essa
              visão de negócio para trabalhar com dados e desenvolver soluções
              em tecnologia.
            </p>
            <p>
              Na Midea Carrier, atuo com dashboards, documentação técnica e
              apoio à ingestão de dados. Nos projetos pessoais, exploro machine
              learning, automação com IA e desenvolvimento web — do tratamento
              da base à interface.
            </p>
            <div className="competency">
              <ChartNoAxesCombined size={22} />
              <div>
                <h3>Análise e inteligência de negócios</h3>
                <p>
                  Python, SQL, Power BI e Excel para preparar dados, acompanhar
                  KPIs e comunicar análises.
                </p>
              </div>
            </div>
            <div className="competency">
              <Workflow size={22} />
              <div>
                <h3>Dados, integração e automação</h3>
                <p>
                  Tratamento de dados, APIs, documentação e fluxos em Python que
                  conectam ferramentas.
                </p>
              </div>
            </div>
            <div className="competency">
              <Code2 size={22} />
              <div>
                <h3>Aplicações e aprendizado de máquina</h3>
                <p>
                  Flask, FastAPI, JavaScript, scikit-learn e XGBoost aplicados a
                  projetos e estudos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="wrap section experience" id="trajetoria">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / TRAJETÓRIA</p>
              <h2>
                Negócio e tecnologia,
                <br />
                cada vez mais próximos.
              </h2>
            </div>
          </div>
          <div className="experience-row">
            <span className="experience-date">NOV 2025 — ATUAL</span>
            <div>
              <h3>Midea Carrier Brasil</h3>
              <span className="experience-role">Estagiário em Dados</span>
            </div>
            <p>
              Dashboards e KPIs com Python, SQL e Power BI. Documentação para
              Engenharia de Dados, apoio à ingestão e estudos de viabilidade de
              machine learning.
            </p>
          </div>
          <div className="experience-row">
            <span className="experience-date">MAI — NOV 2025</span>
            <div>
              <h3>Hospital Santa Catarina</h3>
              <span className="experience-role">
                Assistente administrativo · Engenharia Clínica
              </span>
            </div>
            <p>
              Controle de solicitações, conciliação de notas fiscais e apoio aos
              processos de suprimentos, em colaboração com a equipe técnica.
            </p>
          </div>
          <div className="experience-row">
            <span className="experience-date">JUN 2023 — DEZ 2024</span>
            <div>
              <h3>Gi Group</h3>
              <span className="experience-role">
                Aprendiz → Assistente administrativo
              </span>
            </div>
            <p>
              Auditorias internas, relatórios, cruzamento de dados em Excel e
              automação de tarefas repetitivas. Base em controle de informações
              e melhoria de processos.
            </p>
          </div>
        </section>
        <section className="contact-section" id="contato">
          <div className="wrap contact-inner">
            <div>
              <span className="eyebrow">04 / PRÓXIMAS CONEXÕES</span>
              <h2>
                Vamos construir
                <br />o próximo passo?
              </h2>
              <p>
                Uma oportunidade em dados, um projeto de tecnologia ou uma boa
                troca de ideias. A conversa pode começar por aqui.
              </p>
            </div>
            <div className="contact-links">
              <a href={links.email}>
                <Mail size={19} />
                calebesimoes731@gmail.com
                <ArrowUpRight size={17} />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={19} />
                LinkedIn
                <ArrowUpRight size={17} />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                <Github size={19} />
                GitHub
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap site-footer">
        <span>© 2026 Calebe Simões · Feito de curiosidade e código.</span>
        <a className="scroll-top" href="#inicio">
          Voltar ao início <ArrowUp size={14} />
        </a>
      </footer>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="project-dialog" showCloseButton={false}>
          {selected && (
            <>
              <DialogClose
                className="absolute top-4 right-4 p-2"
                aria-label="Fechar detalhes do projeto"
              >
                <X size={21} />
              </DialogClose>
              <DialogHeader>
                <p className="eyebrow">
                  {selected.category} / {selected.type}
                </p>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>
              <div className="tags">
                {selected.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {[
                ['O problema', selected.problem],
                ['A construção', selected.solution],
                ['O aprendizado', selected.learning],
              ].map(([title, body]) => (
                <div className="detail-block" key={title}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
              <p className="detail-evidence">{selected.evidence}</p>
              <div className="dialog-buttons">
                <a
                  className="button-primary"
                  href={selected.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  Explorar no GitHub
                  <ArrowUpRight size={17} />
                </a>
                <DialogClose className="button-quiet">
                  Voltar aos projetos
                </DialogClose>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
