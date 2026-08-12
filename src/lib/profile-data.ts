export const PROFILE = {
  name: "EslaM HeshAM",
  alias: "MR-X",
  handle: "EslaM-X",
  location: "Cairo, Egypt · Remote Worldwide",
  email: "eslam.kora60@gmail.com",
  roles: [
    "SOVEREIGN ENGINEER",
    "WEB3 & PROTOCOL ARCHITECT",
    "CYBER SECURITY AUTHORITY",
    "FULL-STACK · AI SYSTEMS",
  ],
  headline:
    "Lead Technical Architect · Business Operations Manager · Web3 & Cyber Security",
  tagline:
    "Most people play within the rules. I write the code that defines them.",
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/EslaM-X", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eslam-hesham-359964192",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/EslaM_HeshAM_X", icon: "x" },
  {
    label: "Instagram",
    href: "https://instagram.com/eslam_hesham_x_",
    icon: "instagram",
  },
  { label: "Facebook", href: "https://facebook.com/EslaM.HeshAM.X", icon: "facebook" },
  { label: "Medium", href: "https://medium.com/@eslam_hesham_x", icon: "medium" },
] as const;

export const STATS = [
  {
    value: 44000,
    suffix: "+",
    label: "Contributions this year",
    labelAr: "مساهمة برمجية هذا العام",
  },
  { value: 7, suffix: " yrs", label: "Engineering in Web3", labelAr: "سنوات في الويب 3" },
  { value: 60, suffix: "+", label: "Repositories shipped", labelAr: "مستودع تم إطلاقه" },
  {
    value: 5,
    suffix: "",
    label: "Global orgs contributed to",
    labelAr: "مؤسسات عالمية ساهمت فيها",
  },
];

/** Long-horizon research tracks — years of depth per domain. */
export const RESEARCH_TRACKS = [
  {
    icon: "blocks",
    years: 15,
    en: {
      title: "Blockchain Research",
      unit: "years",
      desc: "Studying and researching distributed ledgers, consensus and cryptoeconomics since the earliest Bitcoin era — from block structure and mempool dynamics to BFT consensus and protocol governance.",
    },
    ar: {
      title: "أبحاث البلوك تشين",
      unit: "عامًا",
      desc: "دراسة وبحث في السجلات الموزعة والإجماع واقتصاديات التشفير منذ عصر البيتكوين المبكر — من بنية الكتل وديناميكيات الـ mempool إلى إجماع BFT وحوكمة البروتوكولات.",
    },
  },
  {
    icon: "file",
    years: 8,
    en: {
      title: "Smart Contract Engineering",
      unit: "years",
      desc: "Designing, writing and auditing on-chain contracts: storage-slot safety, reentrancy classes, invariant and fuzz testing, formal verification and upgrade-path risk.",
    },
    ar: {
      title: "هندسة العقود الذكية",
      unit: "سنوات",
      desc: "تصميم وكتابة وتدقيق العقود على السلسلة: أمان خانات التخزين، وفئات إعادة الدخول، واختبار الثوابت والتشويش، والتحقق الصوري، ومخاطر مسارات الترقية.",
    },
  },
  {
    icon: "shield",
    years: 14,
    en: {
      title: "Cyber Security · Red Team & Blue Team",
      unit: "years",
      desc: "White-hat ethical hacker. Offensive research (red team) and defensive engineering (blue team): exploitation, vulnerability research, intrusion analysis, digital forensics and cybercrime investigation.",
    },
    ar: {
      title: "الأمن السيبراني · الفريق الأحمر والأزرق",
      unit: "عامًا",
      desc: "هاكر أخلاقي (قبعة بيضاء). أبحاث هجومية (Red Team) وهندسة دفاعية (Blue Team): الاستغلال، وأبحاث الثغرات، وتحليل الاختراقات، والأدلة الجنائية الرقمية، والتحقيق في الجرائم الإلكترونية.",
    },
  },
  {
    icon: "bug",
    years: 15,
    en: {
      title: "Malware & Virus Research",
      unit: "years",
      desc: "Deep study of virus families, payload construction, propagation, persistence and damage models — plus sandboxed reverse engineering, detection engineering and countermeasures.",
    },
    ar: {
      title: "أبحاث الفيروسات والبرمجيات الخبيثة",
      unit: "عامًا",
      desc: "دراسة معمّقة لعائلات الفيروسات وتركيب الحمولات والانتشار والبقاء ونماذج الضرر — مع الهندسة العكسية في بيئات معزولة، وهندسة الكشف، وسبل المكافحة.",
    },
  },
  {
    icon: "lock",
    years: 11,
    en: {
      title: "Cryptography & Cryptanalysis",
      unit: "years",
      desc: "Encryption in depth: symmetric and asymmetric schemes, hashing, key management, full-disk and end-to-end encryption, zero-knowledge primitives and decryption/cryptanalysis research.",
    },
    ar: {
      title: "التشفير وتحليل الشيفرات",
      unit: "عامًا",
      desc: "تعمّق في التشفير: الأنظمة المتماثلة وغير المتماثلة، والتجزئة، وإدارة المفاتيح، والتشفير الكامل والطرف-إلى-طرف، وبدائيات المعرفة الصفرية، وأبحاث فك التشفير وتحليل الشيفرات.",
    },
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Web3 & Blockchain",
    items: [
      "Protocol Design",
      "Smart Contracts",
      "Solidity / Foundry",
      "Stellar Core",
      "Consensus (BFT)",
      "DeFi Mechanics",
      "Pi SDK",
      "Tokenomics",
      "EVM Internals",
      "Hardhat",
      "Rust / Anchor",
      "Layer-2 & Rollups",
      "Bridges & Interop",
      "Account Abstraction",
      "Oracles (Chainlink)",
      "IPFS / Arweave",
      "MEV Awareness",
      "Zero-Knowledge Proofs",
      "The Graph",
      "Wallet & Key Custody",
      "DAO Governance",
      "x402 Machine Payments",
    ],
  },
  {
    title: "Full-Stack Engineering",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "Docker",
      "Go",
      "Python",
      "NestJS",
      "Express",
      "GraphQL",
      "tRPC",
      "Redis",
      "Prisma / Drizzle",
      "REST & WebSockets",
      "Kubernetes",
      "CI/CD (GitHub Actions)",
      "Cloudflare Workers",
      "Vercel Edge",
      "Microservices",
      "System Design",
      "Testing (Vitest / Playwright)",
      "Observability",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "Neural Networks",
      "AI Agents",
      "LLM Integration",
      "Embodied Robotics",
      "Sim-to-Sim (MuJoCo)",
      "Trading Automation",
      "Multi-Agent Systems",
      "RAG Pipelines",
      "Vector Databases",
      "Prompt Engineering",
      "Fine-Tuning / LoRA",
      "Computer Vision",
      "PyTorch",
      "Reinforcement Learning",
      "PyBullet / ROS",
      "Physical AI",
      "MLOps",
      "Speech & TTS",
    ],
  },
  {
    title: "Cyber Security",
    items: [
      "Threat Modeling",
      "Zero-Trust Design",
      "Smart Contract Auditing",
      "Invariant Testing",
      "Penetration Testing",
      "Cryptography",
      "Red Team Operations",
      "Blue Team Defense",
      "Digital Forensics",
      "Malware Analysis",
      "Reverse Engineering",
      "Incident Response",
      "OSINT",
      "Blockchain Forensics",
      "Exploit Development",
      "Fuzzing",
      "Burp Suite / Metasploit",
      "Wireshark / Ghidra",
      "SIEM & Detection",
      "Kali / Linux Hardening",
      "MITRE ATT&CK (TTPs)",
      "Post-Quantum Awareness",
    ],
  },
  {
    title: "Machines, Robotics & Embedded",
    items: [
      "Real-Time OS",
      "Embedded Systems",
      "Sensor Fusion",
      "Motion Control",
      "IVI / Automotive Systems",
      "Machine Economy Payments",
      "Humanoid & Multi-Task Robots",
      "Digital Twins",
      "Edge Inference",
      "CAN Bus / Telemetry",
    ],
  },
  {
    title: "Business & Operations",
    items: [
      "Operations Strategy",
      "ERP Architecture",
      "KPI & Analytics",
      "Brand Launch",
      "Supply & Inventory",
      "Executive Coordination",
      "Financial Modeling",
      "Cost Control",
      "Product Strategy",
      "Go-To-Market",
      "Process Automation",
      "Technical Leadership",
    ],
  },
];


export const EXPERIENCE = [
  {
    role: "Lead Technical Architect",
    org: "Map of Pi",
    period: "Feb 2026 — Present",
    place: "United States · Remote",
    points: [
      "Leading architectural design of high-scale MERN systems for Map of Pi v2.0.",
      "Integrating AI neural networks into a self-evolving Web3 commerce ecosystem.",
      "Implementing military-grade encryption and security layers for millions of users.",
    ],
  },
  {
    role: "Web3 Core Systems Contributor & Cyber Security Vanguard",
    org: "Pi Network Ecosystem",
    period: "2019 — Present",
    place: "Remote",
    points: [
      "Authored PiRC protocol standards; proposals reviewed and endorsed by Pi Network's founder.",
      "Adversarial threat modeling, BFT consensus research and cryptographic state-machine design.",
      "Zero-knowledge validation vectors and formal verification for mission-critical contracts.",
    ],
  },
  {
    role: "Business Operations Manager — Office of the CEO & Board",
    org: "S.I.G — El-Sharbatly International Group",
    period: "Feb 2026 — Present",
    place: "New Cairo, Egypt",
    points: [
      "Working directly with the CEO and Board on strategic operations and executive decisions.",
      "Leading KPI monitoring, cross-functional performance and operational excellence.",
      "Led design and development of the S.I.G corporate digital presence.",
    ],
  },
  {
    role: "Business Operations Manager · Founding Team",
    org: "Steinheim",
    period: "Feb 2026 — Present",
    place: "Cairo, Egypt · Hybrid",
    points: [
      "Launched a premium sanitaryware brand in Egypt from the ground up.",
      "Built invoicing, inventory, reporting and audit systems used daily across the business.",
      "Owned stock control, product database, sales processes and go-to-market readiness.",
    ],
  },
  {
    role: "Founder",
    org: "PiEat-Me",
    period: "May 2025 — Feb 2026",
    place: "Remote · Worldwide",
    points: [
      "Founded and shipped a consumer product inside the Pi Network ecosystem.",
    ],
  },
  {
    role: "Cost Controller & Data Systems",
    org: "Orascom Construction PLC",
    period: "2021 — Jan 2026",
    place: "Cairo, Egypt",
    points: [
      "Cost control, financial data pipelines and reporting for large-scale construction operations.",
    ],
  },
];

export const IMPACT = [
  {
    org: "Pi Network",
    title: "PiRC — Pi Requests for Comment",
    href: "https://github.com/PiNetwork/PiRC/pull/2",
    summary:
      "Authored the PiRC1 utility standards proposal: escrow lock proofs, dynamic p_floor calculation, engagement-weighted PiPower and Sybil-resistant reporting.",
    quote:
      "\u201cBoth of these are good ideas. Implementation seems possible.\u201d \u2014 Dr. Nicolas Kokkalis, Founder of Pi Network",
  },
  {
    org: "Stellar",
    title: "stellar-core — consensus layer contribution",
    href: "https://github.com/stellar/stellar-core/pull/5409",
    summary:
      "Contribution to the reference peer-to-peer implementation powering the Stellar network's consensus protocol.",
    quote: null,
  },
  {
    org: "Fabric Foundation",
    title: "RoboPay — machine-payable robotics",
    href: "https://github.com/fabricfoundation/RoboPay/pull/86",
    summary:
      "Connecting robots, simulators and physical devices to a payment network — x402 payment gating with no-settle-on-failure guarantees.",
    quote: null,
  },
];

export const PROJECTS = [
  {
    name: "Steinheim ERP & Invoicing",
    tag: "Enterprise",
    desc: "Full internal operations platform: invoicing, inventory, stock audits, customer records, reporting and daily sales performance for a live retail brand.",
    stack: ["TypeScript", "React", "Supabase", "PostgreSQL"],
    href: null,
  },
  {
    name: "RoboPay Spot Tier-1",
    tag: "Robotics · Payments",
    desc: "Boston Dynamics Spot Tier-1 profile — 7 paid embodied skills on MuJoCo + PyBullet sim-to-sim, gated by an x402 payment layer with no-settle-on-failure.",
    stack: ["Python", "MuJoCo", "PyBullet", "x402"],
    href: "https://github.com/EslaM-X/robopay-spot-tier1",
  },
  {
    name: "PiRC1 Standards Pro",
    tag: "Protocol",
    desc: "Reference implementation proposal for PiRC1 Utility Standards and the PEP Protocol — engagement scoring, transparency dashboards and Sybil protection.",
    stack: ["TypeScript", "Protocol Design"],
    href: "https://github.com/EslaM-X/pirc1-standards-pro",
  },
  {
    name: "MapCap IPO Platform",
    tag: "Web3",
    desc: "Frontend and backend systems for a decentralized capital-formation platform inside the Pi ecosystem.",
    stack: ["TypeScript", "Node.js", "MongoDB"],
    href: "https://github.com/EslaM-X/mapcap-ipo-frontendX",
  },
  {
    name: "Pi Local AI Agent",
    tag: "AI",
    desc: "A locally-running autonomous agent for the Pi ecosystem — planning and executing multi-step tasks without a central service.",
    stack: ["TypeScript", "LLM", "Agents"],
    href: "https://github.com/EslaM-X/pi-local-ai-agent",
  },
  {
    name: "S.I.G Corporate Platform",
    tag: "Brand",
    desc: "End-to-end design and build of a diversified business group's corporate presence: UI/UX, content architecture and business data integration.",
    stack: ["React", "TypeScript", "Design Systems"],
    href: null,
  },
  {
    name: "Spin4Pi Vault",
    tag: "Web3",
    desc: "Vault mechanics and reward logic for a gamified Pi ecosystem application.",
    stack: ["TypeScript", "Pi SDK"],
    href: "https://github.com/EslaM-X/spin4pi-vault",
  },
  {
    name: "PiEat-Me",
    tag: "Founder",
    desc: "Founded a food-commerce product inside the Pi Network ecosystem, from concept to live users.",
    stack: ["React", "Node.js", "Pi Payments"],
    href: null,
  },
];

export const CERTS = [
  { name: "Web3 / Blockchain Project Manager", issuer: "Udemy", year: "2023" },
  { name: "Web5 Fundamentals — Data Ownership", issuer: "Udemy", year: "2023" },
  { name: "Postgraduate Diploma: Project Management", issuer: "Udemy", year: "2023" },
  { name: "Introduction to Ethical Hacking", issuer: "Udemy", year: "2023" },
  { name: "Diploma in Blockchain Technology", issuer: "Alison", year: "2022" },
  { name: "Types of Cyber Security", issuer: "Great Learning", year: "2022" },
  { name: "Beginner's Guide to Cyber Security", issuer: "Udemy", year: "2022" },
  { name: "Linux From Zero To Hero", issuer: "M3aarf", year: "2023" },
  { name: "Blockchain Council", issuer: "M3aarf", year: "2023" },
  { name: "Artificial Intelligence for Beginners", issuer: "HP LIFE", year: "2025" },
  { name: "Strategic Planning", issuer: "HP LIFE", year: "2023" },
  { name: "Effective Leadership", issuer: "HP LIFE", year: "2023" },
  { name: "IT for Business Success", issuer: "HP LIFE", year: "2023" },
  { name: "Introduction to Big Data Science", issuer: "Edlal", year: "2022" },
  { name: "AI and Its Future Applications", issuer: "Edlal", year: "2022" },
  { name: "Awareness in Cyber Security", issuer: "Edlal", year: "2022" },
  { name: "Certified Entrepreneurship Skills", issuer: "TeraCourses", year: "2021" },
  { name: "Social Entrepreneurship", issuer: "HP LIFE", year: "2023" },
];

export const RECOMMENDATIONS = [
  {
    quote:
      "Eslam is a highly motivated developer with a strong passion for AI. Beyond diligently focusing on his assigned tasks, he consistently seeks opportunities to optimize and strengthen our organizational projects — improving scalability, enhancing performance, reinforcing security. He actively identifies ways to elevate our infrastructure to enterprise-grade standards.",
    author: "Daniel Lee",
    title: "Software Engineer / Technical Freelancer",
  },
  {
    quote:
      "His technical leadership has been exceptional. He consistently leverages modern architecture and best practices to build scalable, high-performance solutions. His GitHub workflow is top tier — clean pull requests, clear documentation, and thoughtful collaboration that elevates the entire team. He's a rare combination of advanced technical expertise and strategic thinking. Highly recommended.",
    author: "Antony Ciccone",
    title: "Technology Automation Powerhouse · Turtle Enterprises LLC",
  },
];

export const NAV = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Horizons", id: "horizons" },
  { label: "Experience", id: "experience" },
  { label: "Impact", id: "impact" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

/** Advanced Horizons — bilingual frontier domains. */
export const HORIZONS = [
  {
    icon: "cpu",
    en: {
      title: "Technological Physics & Physical AI",
      desc: "Bridging physics simulation and machine intelligence: embodied agents, sim-to-sim transfer and control systems that reason about the real world before they touch it.",
    },
    ar: {
      title: "الفيزياء التكنولوجية والذكاء الاصطناعي الفيزيائي",
      desc: "الجمع بين محاكاة الفيزياء وذكاء الآلة: وكلاء مُجسَّدون، ونقل التعلم بين المحاكيات، وأنظمة تحكّم تفهم العالم الحقيقي قبل أن تلمسه.",
    },
  },
  {
    icon: "file",
    en: {
      title: "Smart Contracts & Protocol Law",
      desc: "Contracts as legislation: escrow proofs, invariant testing, formal verification and storage-slot level auditing for value that cannot afford to fail.",
    },
    ar: {
      title: "العقود الذكية وقانون البروتوكول",
      desc: "العقود كتشريع: إثباتات الضمان، واختبار الثوابت، والتحقق الصوري، والتدقيق حتى مستوى خانات التخزين لقيمة لا تحتمل الفشل.",
    },
  },
  {
    icon: "scale",
    en: {
      title: "Smart Digital Justice",
      desc: "Automated, auditable dispute resolution on-chain: transparent evidence trails, Sybil-resistant reputation and rulings that anyone can verify.",
    },
    ar: {
      title: "العدالة الرقمية الذكية",
      desc: "فضّ نزاعات آلي وقابل للتدقيق على السلسلة: مسارات أدلة شفافة، وسمعة مقاومة لهجمات الهوية، وأحكام يستطيع أي شخص التحقق منها.",
    },
  },
  {
    icon: "search",
    en: {
      title: "Digital Forensics & Cybercrime Analysis",
      desc: "Tracing attacks and illicit flows across chains and infrastructure — incident reconstruction, adversary profiling and evidence-grade reporting.",
    },
    ar: {
      title: "التحليل الجنائي الرقمي وتحليل الجرائم السيبرانية",
      desc: "تتبّع الهجمات والتدفقات غير المشروعة عبر السلاسل والبنية التحتية — إعادة بناء الحوادث، وتوصيف الخصوم، وتقارير بمستوى الأدلة.",
    },
  },
  {
    icon: "bot",
    en: {
      title: "Robotics & the Machine Economy",
      desc: "Machines that earn and spend: x402 payment gating, no-settle-on-failure guarantees and paid embodied skills for autonomous hardware.",
    },
    ar: {
      title: "الروبوتات واقتصاد الآلات",
      desc: "آلات تكسب وتنفق: بوابات دفع x402، وضمانات عدم التسوية عند الفشل، ومهارات مُجسَّدة مدفوعة للعتاد المستقل.",
    },
  },
  {
    icon: "brain",
    en: {
      title: "Autonomous AI Agents",
      desc: "Local-first agents that plan and execute multi-step work with no central service — memory, tool use and guardrails built in.",
    },
    ar: {
      title: "وكلاء الذكاء الاصطناعي المستقلون",
      desc: "وكلاء يعملون محليًا يخططون وينفذون مهامًا متعددة الخطوات دون خدمة مركزية — ذاكرة واستخدام أدوات وحواجز أمان مدمجة.",
    },
  },
] as const;

/** Featured writing / recognition spotlight. */
export const SPOTLIGHT = {
  href: "https://medium.com/@eslam_hesham_x",
  prHref: "https://github.com/PiNetwork/PiRC/pull/2",
  en: {
    kicker: "Featured",
    title: "Recognized by the Founder of Pi Network",
    body: "My PiRC1 utility-standards proposal — escrow lock proofs, dynamic p_floor pricing, engagement-weighted PiPower and Sybil-resistant reporting — was reviewed and endorsed publicly by Dr. Nicolas Kokkalis, Stanford PhD and Founder of Pi Network.",
    quote:
      "“Both of these are good ideas. Implementation seems possible.” — Dr. Nicolas Kokkalis, Founder of Pi Network",
    cta: "Read the article on Medium",
    cta2: "View the proposal",
  },
  ar: {
    kicker: "مقال مميز",
    title: "تقدير من مؤسس شبكة Pi",
    body: "مقترحي لمعايير المنفعة PiRC1 — إثباتات قفل الضمان، والتسعير الديناميكي لـ p_floor، وقوة PiPower الموزونة بالتفاعل، والتقارير المقاومة لهجمات Sybil — تمت مراجعته والإشادة به علنًا من الدكتور نيكولاس كوكاليس، مؤسس شبكة Pi وحاصل على الدكتوراه من ستانفورد.",
    quote:
      "«كلتا الفكرتين جيدة. ويبدو التنفيذ ممكنًا.» — د. نيكولاس كوكاليس، مؤسس شبكة Pi",
    cta: "اقرأ المقال على Medium",
    cta2: "اطّلع على المقترح",
  },
} as const;

/** Arabic labels for the primary navigation. */
export const NAV_AR: Record<string, string> = {
  about: "نبذة",
  skills: "المهارات",
  horizons: "آفاق متقدمة",
  experience: "المسيرة",
  impact: "الأثر",
  projects: "الأعمال",
  contact: "تواصل",
};

/** Bilingual UI copy. */
export const COPY = {
  hire: { en: "Hire Me", ar: "وظّفني" },
  available: {
    en: "Available for elite engagements",
    ar: "متاح للمشاريع الاستثنائية",
  },
  viewWork: { en: "View the Work", ar: "شاهد الأعمال" },
  startConversation: { en: "Start a Conversation", ar: "ابدأ محادثة" },
  heroBody: {
    en: "I architect decentralized systems, harden them against the worst adversaries, and turn engineering depth into business outcomes.",
    ar: "أُصمّم أنظمة لا مركزية، وأُحصّنها ضد أشرس الخصوم، وأحوّل العمق الهندسي إلى نتائج تجارية ملموسة.",
  },
  sections: {
    about: { en: "The Architect", ar: "المهندس" },
    skills: { en: "Arsenal", ar: "الترسانة" },
    horizons: { en: "Advanced Horizons", ar: "آفاق متقدمة" },
    experience: { en: "Trajectory", ar: "المسيرة" },
    impact: { en: "Open-Source Impact", ar: "الأثر مفتوح المصدر" },
    projects: { en: "Selected Works", ar: "أعمال مختارة" },
    recognition: { en: "Recognition", ar: "التقدير" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  kickers: {
    skills: {
      en: "The stack behind protocol design, enterprise systems and adversarial security work.",
      ar: "الأدوات خلف تصميم البروتوكولات وأنظمة المؤسسات والعمل الأمني الهجومي.",
    },
    horizons: {
      en: "Where physics, autonomous machines, cryptographic law and digital justice converge.",
      ar: "حيث تلتقي الفيزياء والآلات المستقلة والقانون التشفيري والعدالة الرقمية.",
    },
    impact: {
      en: "Contributions to protocols used by millions — reviewed by the people who built them.",
      ar: "مساهمات في بروتوكولات يستخدمها الملايين — راجعها من بنوها بأنفسهم.",
    },
    projects: {
      en: "Real systems in production — enterprise operations, robotics payments, protocol tooling and Web3 products.",
      ar: "أنظمة حقيقية في الإنتاج — عمليات مؤسسية، ومدفوعات روبوتية، وأدوات بروتوكول، ومنتجات ويب 3.",
    },
  },
  aboutP1: {
    en: "I am a Lead Technical Architect and Business Operations Manager operating at the intersection of Web3, artificial intelligence and cyber security. I do not merely inhabit technology — I shape it: designing decentralized ecosystems, hardening them with military-grade cryptography, and translating deep engineering into measurable business growth.",
    ar: "أنا كبير المهندسين التقنيين ومدير العمليات، أعمل عند تقاطع الويب 3 والذكاء الاصطناعي والأمن السيبراني. أنا لا أسكن التقنية فحسب — بل أصوغها: أُصمّم منظومات لا مركزية، وأُحصّنها بتشفير بمستوى عسكري، وأترجم العمق الهندسي إلى نمو تجاري قابل للقياس.",
  },
  aboutP2: {
    en: "On the engineering side I build high-scale MERN and Next.js systems, author protocol standards, audit smart contracts down to storage-slot collisions and invariant testing, and integrate neural intelligence into self-evolving products. On the business side I sit in the Office of the CEO & Board, run operations for a live retail brand, and turn strategy into systems that people use every single day.",
    ar: "على الجانب الهندسي أبني أنظمة MERN وNext.js واسعة النطاق، وأكتب معايير البروتوكولات، وأدقّق العقود الذكية حتى تصادمات خانات التخزين واختبار الثوابت، وأدمج الذكاء العصبي في منتجات ذاتية التطور. وعلى جانب الأعمال أعمل ضمن مكتب الرئيس التنفيذي ومجلس الإدارة، وأدير عمليات علامة تجارية قائمة، وأحوّل الاستراتيجية إلى أنظمة تُستخدم يوميًا.",
  },
  aboutP3: {
    en: "Excellence without compromise. My code is my law. My vision is my compass.",
    ar: "تميّز بلا تنازلات. شفرتي هي قانوني، ورؤيتي هي بوصلتي.",
  },
  creedTitle: { en: "Creed", ar: "العقيدة" },
  creed: [
    {
      en: ["Empire Architect", "Blockchain ecosystems and the foundations of trust."],
      ar: ["مهندس الإمبراطورية", "منظومات البلوكشين وأسس الثقة."],
    },
    {
      en: ["Shadow Guardian", "Anticipating threats before they emerge."],
      ar: ["حارس الظل", "استباق التهديدات قبل ظهورها."],
    },
    {
      en: ["Data Oracle", "Turning raw data into strategic power."],
      ar: ["عرّاف البيانات", "تحويل البيانات الخام إلى قوة استراتيجية."],
    },
    {
      en: ["Operator", "Systems that scale a business, not just a codebase."],
      ar: ["المشغّل", "أنظمة تُنمّي العمل، لا الشيفرة فقط."],
    },
  ],
  certifications: { en: "Certifications", ar: "الشهادات" },
  exploreRepos: { en: "Explore all repositories", ar: "استعرض كل المستودعات" },
  contactTitle: { en: "Build something legendary", ar: "لنبنِ شيئًا أسطوريًا" },
  contactBody: {
    en: "If you seek a worker, look elsewhere. If you seek a partner in greatness — you have arrived.",
    ar: "إن كنت تبحث عن موظف، فابحث في مكان آخر. وإن كنت تبحث عن شريك في العظمة — فقد وصلت.",
  },
  copy: { en: "Copy", ar: "نسخ" },
  copied: { en: "Copied", ar: "تم النسخ" },
  footerTag: {
    en: "Sovereign Engineer · Blockchain Titan · Cyber Authority",
    ar: "مهندس سيادي · عملاق البلوكشين · مرجع سيبراني",
  },
  footerRights: {
    en: "Rare. Unseen. Unstoppable.",
    ar: "نادر. غير مرئي. لا يُوقف.",
  },
} as const;
