export type Lang = 'en' | 'es';

export interface Bi {
  en: string;
  es: string;
}

export interface SkillGroup {
  icon: string;
  title: Bi;
  items: string[];
}

export interface Job {
  company: string;
  location: Bi;
  role: Bi;
  period: Bi;
  current: boolean;
  bullets: Bi[];
}

export interface Metric {
  value: string;
  label: Bi;
}

/** UI strings keyed by id, each with both languages. */
export const UI = {
  navAbout: { en: 'About', es: 'Perfil' },
  navSkills: { en: 'Skills', es: 'Skills' },
  navExperience: { en: 'Experience', es: 'Experiencia' },
  navImpact: { en: 'Impact', es: 'Impacto' },
  navContact: { en: 'Contact', es: 'Contacto' },
  downloadCv: { en: 'Download CV', es: 'Descargar CV' },

  heroBadge: { en: 'Available for Senior Angular roles', es: 'Disponible para roles Senior Angular' },
  heroRole: { en: 'Senior Angular / Fullstack Engineer', es: 'Ingeniero Senior Angular / Fullstack' },
  heroTagline: {
    en: 'I architect large-scale, high-performance Angular applications — NgRx, RxJS, Signals — for US enterprise clients.',
    es: 'Diseño aplicaciones Angular de gran escala y alto rendimiento — NgRx, RxJS, Signals — para clientes enterprise de EE. UU.',
  },
  heroCtaContact: { en: 'Get in touch', es: 'Contáctame' },
  heroCtaWork: { en: 'See impact', es: 'Ver impacto' },

  aboutTitle: { en: 'Profile', es: 'Perfil' },
  aboutBody: {
    en: 'Senior Frontend / Fullstack Engineer with 10+ years building production Angular applications (v1.x through 20) for US-based clients. Deep expertise in NgRx state management and RxJS reactive programming for complex async data flows. Proven record leading AngularJS-to-Angular migrations, architecting reusable and testable component libraries, and delivering measurable performance gains. Comfortable across the stack, integrating Angular with Node.js, Java and .NET services. Strong collaborator in fully remote, Agile teams.',
    es: 'Ingeniero Senior Frontend / Fullstack con más de 10 años construyendo aplicaciones Angular en producción (v1.x hasta 20) para clientes de EE. UU. Amplia experiencia en gestión de estado con NgRx y programación reactiva con RxJS para flujos de datos asíncronos complejos. Historial comprobado liderando migraciones de AngularJS a Angular, diseñando librerías de componentes reutilizables y testeables, y entregando mejoras de rendimiento medibles. Cómodo en todo el stack, integrando Angular con servicios Node.js, Java y .NET. Fuerte colaborador en equipos ágiles 100% remotos.',
  },

  skillsTitle: { en: 'Technical Skills', es: 'Habilidades Técnicas' },
  experienceTitle: { en: 'Experience', es: 'Experiencia' },
  presentLabel: { en: 'Present', es: 'Actualidad' },
  impactTitle: { en: 'Impact in Numbers', es: 'Impacto en Números' },
  impactSubtitle: {
    en: 'Measurable results delivered on large-scale production platforms.',
    es: 'Resultados medibles entregados en plataformas de producción a gran escala.',
  },
  eduTitle: { en: 'Education', es: 'Educación' },
  edu: { en: 'B.Sc. in Computer Science', es: 'Lic. en Ciencias de la Computación' },
  eduSchool: { en: 'Universidad Mayor de San Andrés — La Paz, Bolivia', es: 'Universidad Mayor de San Andrés — La Paz, Bolivia' },
  langTitle: { en: 'Languages', es: 'Idiomas' },
  langSpanish: { en: 'Spanish — Native', es: 'Español — Nativo' },
  langEnglish: { en: 'English — Professional (B2, CEFR Certified)', es: 'Inglés — Profesional (B2, Certificado CEFR)' },

  contactTitle: { en: "Let's build something", es: 'Construyamos algo' },
  contactBody: {
    en: 'Open to Senior Angular / Frontend opportunities. Reach out — I reply fast.',
    es: 'Abierto a oportunidades Senior Angular / Frontend. Escríbeme — respondo rápido.',
  },
  contactEmail: { en: 'Email me', es: 'Envíame un correo' },
  footer: { en: 'Built with Angular 20 — Standalone Components & Signals.', es: 'Hecho con Angular 20 — Standalone Components & Signals.' },
} as const;

export const PROFILE = {
  name: 'Jesus Joshimar Callisaya Salinas',
  shortName: 'Jesus Callisaya',
  initials: 'JC',
  location: { en: 'La Paz, Bolivia · Remote', es: 'La Paz, Bolivia · Remoto' } as Bi,
  email: 'jesuscallisayasalinas@gmail.com',
  phone: '+591 79127459',
  linkedin: 'https://linkedin.com/in/jesus-callisaya',
  github: 'https://github.com/jesus-callisaya',
  cv: 'assets/CV-jesus-callisaya.pdf',
};

export const HERO_STATS: Metric[] = [
  { value: '10+', label: { en: 'Years experience', es: 'Años de experiencia' } },
  { value: '1.x–20', label: { en: 'Angular versions shipped', es: 'Versiones de Angular' } },
  { value: '200K+', label: { en: 'Users served', es: 'Usuarios atendidos' } },
];

export const SKILLS: SkillGroup[] = [
  {
    icon: 'angular',
    title: { en: 'Angular & State', es: 'Angular y Estado' },
    items: ['Angular 1.x–20', 'NgRx (Actions · Reducers · Selectors · Effects)', 'RxJS', 'Signals', 'Standalone Components', 'Lazy Loading', 'OnPush', 'Guards & Resolvers'],
  },
  {
    icon: 'code',
    title: { en: 'Frontend Core', es: 'Core Frontend' },
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass', 'Design Systems', 'Responsive Design', 'Accessibility (WCAG)'],
  },
  {
    icon: 'layers',
    title: { en: 'Build & Architecture', es: 'Build y Arquitectura' },
    items: ['NX Monorepo', 'Module Federation', 'Micro-Frontends', 'Webpack', 'Kendo UI', 'Advanced Charts & Data Viz'],
  },
  {
    icon: 'gauge',
    title: { en: 'Performance & Testing', es: 'Rendimiento y Testing' },
    items: ['Core Web Vitals', 'Bundle Analysis', 'Code Splitting', 'Tree Shaking', 'Jest', 'Jasmine', 'Karma', 'Unit / Integration / E2E'],
  },
  {
    icon: 'server',
    title: { en: 'Backend Integration', es: 'Integración Backend' },
    items: ['RESTful APIs', 'Node.js', 'Java', '.NET / ASP.NET Core', 'Event-Driven Architecture', 'JWT / OAuth2'],
  },
  {
    icon: 'cloud',
    title: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    items: ['AWS (S3 · CloudFront · Lambda · API Gateway · Route 53)', 'Azure DevOps', 'CI/CD (GitHub Actions · CodePipeline)', 'Docker', 'Git'],
  },
];

export const EXPERIENCE: Job[] = [
  {
    company: 'Unosquare',
    location: { en: 'Remote — US Clients', es: 'Remoto — Clientes EE. UU.' },
    role: { en: 'Senior Frontend / Fullstack Engineer', es: 'Ingeniero Senior Frontend / Fullstack' },
    period: { en: 'Sep 2022 – Present', es: 'Sep 2022 – Actualidad' },
    current: true,
    bullets: [
      {
        en: 'Led large-scale Angular initiatives for US enterprise clients, architecting modular SPAs serving 200K+ active users with focus on scalability and long-term frontend health.',
        es: 'Lideré iniciativas Angular de gran escala para clientes enterprise de EE. UU., diseñando SPAs modulares con 200K+ usuarios activos, enfocadas en escalabilidad y salud del frontend a largo plazo.',
      },
      {
        en: 'Designed end-to-end NgRx state management (Actions, Reducers, Selectors, Effects) to centralize complex state and eliminate data inconsistencies across multi-step workflows.',
        es: 'Diseñé gestión de estado NgRx de extremo a extremo (Actions, Reducers, Selectors, Effects) para centralizar estados complejos y eliminar inconsistencias en flujos multi-paso.',
      },
      {
        en: 'Engineered advanced RxJS pipelines (switchMap, combineLatest, takeUntil, custom operators) for real-time feeds and concurrent API calls — predictable state, no memory leaks.',
        es: 'Construí pipelines RxJS avanzados (switchMap, combineLatest, takeUntil, operadores propios) para feeds en tiempo real y llamadas concurrentes — estado predecible, sin fugas de memoria.',
      },
      {
        en: 'Directed full AngularJS → Angular rewrites and upgrades through Angular 20, adopting Standalone Components and Signals to cut bundle size 28% and improve initial render 40%.',
        es: 'Dirigí migraciones completas AngularJS → Angular y upgrades hasta Angular 20, adoptando Standalone Components y Signals para reducir el bundle 28% y mejorar el render inicial 40%.',
      },
      {
        en: 'Reduced Time to Interactive from 4.2s to 2.5s via OnPush, lazy-loaded modules and preloading — contributing to a 15% lift in user retention.',
        es: 'Reduje el Time to Interactive de 4.2s a 2.5s con OnPush, módulos lazy y preloading — contribuyendo a un 15% más de retención de usuarios.',
      },
      {
        en: 'Structured codebases with NX Monorepo and Module Federation for independent team workflows and scalable micro-frontend delivery; mentored mid/junior engineers on Angular, NgRx and RxJS.',
        es: 'Estructuré los repos con NX Monorepo y Module Federation para flujos de trabajo independientes y entrega escalable de micro-frontends; mentoré a ingenieros junior/semi-senior en Angular, NgRx y RxJS.',
      },
    ],
  },
  {
    company: 'Registro Único para la Administración Tributaria Municipal (RUAT)',
    location: { en: 'La Paz, Bolivia', es: 'La Paz, Bolivia' },
    role: { en: 'Senior Frontend Developer', es: 'Desarrollador Senior Frontend' },
    period: { en: 'May 2014 – Jun 2022', es: 'May 2014 – Jun 2022' },
    current: false,
    bullets: [
      {
        en: 'Designed modular Angular applications for municipal tax platforms supporting thousands of concurrent users, prioritizing component reuse and maintainable architecture.',
        es: 'Diseñé aplicaciones Angular modulares para plataformas tributarias municipales con miles de usuarios concurrentes, priorizando reutilización de componentes y arquitectura mantenible.',
      },
      {
        en: 'Implemented NgRx / Redux state management for complex multi-step forms and dashboards across large government-facing applications.',
        es: 'Implementé gestión de estado NgRx / Redux para formularios multi-paso complejos y dashboards en grandes aplicaciones gubernamentales.',
      },
      {
        en: 'Built reactive RxJS pipelines to sync UI with RESTful backends — polling, caching and optimistic UI updates; optimized load times ~30% via lazy loading and bundle analysis.',
        es: 'Construí pipelines reactivos RxJS para sincronizar la UI con backends RESTful — polling, caché y updates optimistas; optimicé tiempos de carga ~30% con lazy loading y análisis de bundle.',
      },
      {
        en: 'Delivered responsive, cross-browser, WCAG-accessible UIs; designed REST API contracts and HTTP interceptors for token management and error handling.',
        es: 'Entregué UIs responsivas, cross-browser y accesibles (WCAG); diseñé contratos de API REST e interceptores HTTP para gestión de tokens y manejo de errores.',
      },
    ],
  },
];

export const METRICS: Metric[] = [
  { value: '40%', label: { en: 'Faster Time to Interactive', es: 'Time to Interactive más rápido' } },
  { value: '28%', label: { en: 'Smaller bundle size', es: 'Reducción del bundle' } },
  { value: '60%', label: { en: 'Lower international latency (CDN)', es: 'Menor latencia internacional (CDN)' } },
  { value: '95%', label: { en: 'CloudFront cache-hit ratio', es: 'Tasa de aciertos de caché CloudFront' } },
  { value: '45%', label: { en: 'Fewer deployment failures', es: 'Menos fallos de despliegue' } },
  { value: '30%', label: { en: 'Higher dev velocity (AI tooling)', es: 'Mayor velocidad de desarrollo (IA)' } },
];
