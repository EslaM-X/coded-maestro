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
  { label: "Facebook", href: "https://www.facebook.com/share/17tZjhwv99", icon: "facebook" },
  { label: "Medium", href: "https://medium.com/@eslam.kora60", icon: "medium" },
] as const;

export const STATS = [
  {
    value: 44000,
    suffix: "+",
    label: "Contributions this year",
    labelAr: "مساهمة برمجية هذا العام",
  },
  { value: 8, suffix: " yrs", label: "Engineering in Web3", labelAr: "سنوات في الويب 3" },
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
  {
    icon: "brain",
    years: 9,
    en: {
      title: "AI, Agents & the Machine Economy",
      unit: "years",
      desc: "Researching autonomous intelligence as an economic actor: multi-agent planning, tool use, machine-to-machine payments and the Discover → Negotiate → Pay → Create → Sell → Earn loop.",
    },
    ar: {
      title: "الذكاء الاصطناعي والوكلاء واقتصاد الآلات",
      unit: "سنوات",
      desc: "بحث في الذكاء المستقل كفاعل اقتصادي: التخطيط متعدد الوكلاء، واستخدام الأدوات، والمدفوعات بين الآلات، ودورة الاكتشاف ← التفاوض ← الدفع ← الخلق ← البيع ← الربح.",
    },
  },
  {
    icon: "cpu",
    years: 10,
    en: {
      title: "Advanced Automation & Systems Engineering",
      unit: "years",
      desc: "Engineering the removal of manual human intervention: self-running scripts, event pipelines and API meshes that link software, databases and interfaces into one instant, error-free operation.",
    },
    ar: {
      title: "الأتمتة المتقدمة وهندسة الأنظمة",
      unit: "سنوات",
      desc: "هندسة إلغاء التدخل البشري اليدوي: سكربتات ذاتية التشغيل، وخطوط أحداث، وشبكات واجهات برمجية تربط البرمجيات وقواعد البيانات والواجهات في عملية واحدة لحظية وخالية من الأخطاء.",
    },
  },
  {
    icon: "coins",
    years: 9,
    en: {
      title: "DeFi, Tokenomics & Digital Governance",
      unit: "years",
      desc: "Open financial systems without banks or intermediaries: liquidity pools, lending markets, yield mechanics, DAO voting and on-chain governance executed by transparent code.",
    },
    ar: {
      title: "التمويل اللامركزي واقتصاد الرموز والحوكمة الرقمية",
      unit: "سنوات",
      desc: "أنظمة مالية مفتوحة بلا بنوك أو وسطاء: مجمعات السيولة، وأسواق الإقراض، وآليات العائد، وتصويت المنظمات المستقلة، والحوكمة على السلسلة بشيفرة شفافة.",
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
      "DApps Architecture",
      "DeFi Protocol Design",
      "Liquidity & AMM Design",
      "On-Chain Voting",
      "Staking & Yield Logic",
      "NFT & Digital Ownership",
      "Cross-Chain Messaging",
      "Gas Optimization",
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
      "Event-Driven Pipelines",
      "Workflow Orchestration",
      "Web3 Frontend (wagmi / viem)",
      "Realtime Infrastructure",
      "Zero-Downtime Deploys",
      "Edge Caching & CDN",
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
      "Autonomous Agent Economies",
      "Agent-to-Agent Negotiation",
      "Machine-Payable Skills",
      "Workflow Automation (n8n)",
      "Data Scraping & ETL",
      "Self-Healing Systems",
      "Decision Engines",
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
      "Cybercrime Investigation",
      "Chain Analysis & Tracing",
      "Anti-Sybil Systems",
      "Secure Key Custody",
      "Threat Intelligence",
      "Supply-Chain Security",
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
      "Autonomous Navigation",
      "Machine-to-Machine Commerce",
      "Robotic Fleet Ops",
      "Firmware Security",
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
      "Digital Transformation",
      "Revenue Operations",
      "Vendor & Partner Strategy",
      "Data-Driven Decisions",
    ],
  },
];


export const EXPERIENCE = [
  {
    role: "Lead Technical Architect",
    roleAr: "كبير المهندسين المعماريين التقنيين",
    org: "Map of Pi",
    orgAr: "Map of Pi",
    period: "Feb 2026 — Present",
    periodAr: "فبراير 2026 — حتى الآن",
    place: "United States · Remote",
    placeAr: "الولايات المتحدة · عن بُعد",
    points: [
      "Leading architectural design of high-scale MERN systems for Map of Pi v2.0.",
      "Integrating AI neural networks into a self-evolving Web3 commerce ecosystem.",
      "Implementing military-grade encryption and security layers for millions of users.",
    ],
    pointsAr: [
      "قيادة التصميم المعماري لأنظمة MERN عالية النطاق في Map of Pi v2.0.",
      "دمج الشبكات العصبية للذكاء الاصطناعي داخل منظومة تجارة Web3 ذاتية التطوّر.",
      "تطبيق طبقات تشفير وحماية بمستوى عسكري لخدمة ملايين المستخدمين.",
    ],
  },
  {
    role: "Web3 Core Systems Contributor & Cyber Security Vanguard",
    roleAr: "مساهم في أنظمة Web3 الأساسية ورائد أمن سيبراني",
    org: "Pi Network Ecosystem",
    orgAr: "منظومة Pi Network",
    period: "2019 — Present",
    periodAr: "2019 — حتى الآن",
    place: "Remote",
    placeAr: "عن بُعد",
    points: [
      "Authored PiRC protocol standards; proposals reviewed and endorsed by Pi Network's founder.",
      "Adversarial threat modeling, BFT consensus research and cryptographic state-machine design.",
      "Zero-knowledge validation vectors and formal verification for mission-critical contracts.",
    ],
    pointsAr: [
      "تأليف معايير بروتوكول PiRC؛ ومراجعة المقترحات واعتمادها من مؤسس Pi Network.",
      "نمذجة التهديدات العدائية، وأبحاث إجماع BFT، وتصميم آلات الحالة التشفيرية.",
      "متجهات تحقق بدون معرفة (ZK) وتحقق شكلي للعقود بالغة الأهمية.",
    ],
  },
  {
    role: "Business Operations Manager — Office of the CEO & Board",
    roleAr: "مدير العمليات — مكتب الرئيس التنفيذي ومجلس الإدارة",
    org: "S.I.G — El-Sharbatly International Group",
    orgAr: "S.I.G — مجموعة الشربتلي الدولية",
    period: "Feb 2026 — Present",
    periodAr: "فبراير 2026 — حتى الآن",
    place: "New Cairo, Egypt",
    placeAr: "القاهرة الجديدة، مصر",
    points: [
      "Working directly with the CEO and Board on strategic operations and executive decisions.",
      "Leading KPI monitoring, cross-functional performance and operational excellence.",
      "Led design and development of the S.I.G corporate digital presence.",
    ],
    pointsAr: [
      "العمل مباشرة مع الرئيس التنفيذي ومجلس الإدارة في العمليات الاستراتيجية والقرارات التنفيذية.",
      "قيادة متابعة مؤشرات الأداء والأداء متعدد الأقسام والتميّز التشغيلي.",
      "قيادة تصميم وتطوير الحضور الرقمي لمجموعة S.I.G.",
    ],
  },
  {
    role: "Business Operations Manager · Founding Team",
    roleAr: "مدير العمليات · الفريق المؤسس",
    org: "Steinheim",
    orgAr: "Steinheim",
    period: "Feb 2026 — Present",
    periodAr: "فبراير 2026 — حتى الآن",
    place: "Cairo, Egypt · Hybrid",
    placeAr: "القاهرة، مصر · هجين",
    points: [
      "Launched a premium sanitaryware brand in Egypt from the ground up.",
      "Built invoicing, inventory, reporting and audit systems used daily across the business.",
      "Owned stock control, product database, sales processes and go-to-market readiness.",
    ],
    pointsAr: [
      "إطلاق علامة فاخرة للأدوات الصحية في مصر من الصفر.",
      "بناء أنظمة الفوترة والمخزون والتقارير والتدقيق المستخدمة يوميًا في الشركة.",
      "إدارة مراقبة المخزون وقاعدة بيانات المنتجات وعمليات البيع والجاهزية للسوق.",
    ],
  },
  {
    role: "Founder",
    roleAr: "المؤسس",
    org: "PiEat-Me",
    orgAr: "PiEat-Me",
    period: "May 2025 — Feb 2026",
    periodAr: "مايو 2025 — فبراير 2026",
    place: "Remote · Worldwide",
    placeAr: "عن بُعد · عالميًا",
    points: [
      "Founded and shipped a consumer product inside the Pi Network ecosystem.",
    ],
    pointsAr: [
      "تأسيس وإطلاق منتج استهلاكي داخل منظومة Pi Network.",
    ],
  },
  {
    role: "Cost Controller & Data Systems",
    roleAr: "مراقب تكاليف وأنظمة بيانات",
    org: "Orascom Construction PLC",
    orgAr: "أوراسكوم للإنشاءات",
    period: "2021 — Jan 2026",
    periodAr: "2021 — يناير 2026",
    place: "Cairo, Egypt",
    placeAr: "القاهرة، مصر",
    points: [
      "Cost control, financial data pipelines and reporting for large-scale construction operations.",
    ],
    pointsAr: [
      "مراقبة التكاليف وخطوط البيانات المالية والتقارير لعمليات إنشاءات واسعة النطاق.",
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
  { label: "Research", id: "research" },
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
  {
    icon: "coins",
    en: {
      title: "The Machine Economy",
      desc: "The revolutionary shift of AI from a mere analysis and automation tool into an autonomous economic entity capable of direct financial action.",
      bullets: [
        "Operational loop: Discover → Negotiate → Pay → Create → Sell → Earn.",
        "Agents discover resources, negotiate them, pay, create value and earn with full autonomy.",
        "The human role narrows to setting strategic objectives while AI executes inside strict boundaries.",
      ],
    },
    ar: {
      title: "اقتصاد الآلات (Machine Economy)",
      desc: "التحول الثوري لانتقال الذكاء الاصطناعي من مجرد أداة تحليل وأتمتة إلى كيان اقتصادي مستقل وقادر على الفعل المالي المباشر.",
      bullets: [
        "القدرات التشغيلية: (Discover → Negotiate → Pay → Create → Sell → Earn).",
        "آلية العمل: تتيح للوكلاء الذكيين اكتشاف الموارد، والتفاوض عليها، والدفع، وخلق القيمة، والربح باستقلالية تامة.",
        "الدور البشري: يقتصر على صياغة الأهداف الاستراتيجية، بينما يتولى الذكاء الاصطناعي التنفيذ ضمن حدود صارمة.",
      ],
    },
  },
  {
    icon: "zap",
    en: {
      title: "Advanced Automation",
      desc: "Engineering away manual human intervention by building intelligent, integrated digital systems that run complex operations instantly and with absolute efficiency.",
      bullets: [
        "Operational structure: linking software systems, databases and APIs through self-running scripts.",
        "Added value: eliminating human error, cutting response time and maximizing operational productivity.",
        "Built for companies and digital platforms that cannot afford downtime.",
      ],
    },
    ar: {
      title: "الأتمتة المتقدمة (Advanced Automation)",
      desc: "هندسة إلغاء التدخل البشري اليدوي عبر بناء منظومات رقمية ذكية ومتكاملة تدير العمليات المعقدة بلحظية وكفاءة مطلقة.",
      bullets: [
        "البنية التشغيلية: ربط الأنظمة البرمجية، وقواعد البيانات، والواجهات البرمجية عبر سكربتات ذاتية التشغيل.",
        "القيمة المضافة: القضاء على الأخطاء البشرية، وتقليل زمن الاستجابة، وتعظيم الإنتاجية التشغيلية.",
        "مصمّمة للشركات والمنصات الرقمية التي لا تحتمل التوقف.",
      ],
    },
  },
  {
    icon: "globe",
    en: {
      title: "Web3 Applications",
      desc: "The next generation of the internet, built on decentralization and true digital ownership for users through blockchain technology.",
      bullets: [
        "Operational structure: distributed networks, smart contracts and data encryption at high cyber-security standards.",
        "Added value: stripping intermediaries of control and letting individuals fully own their data and digital assets.",
        "Transparent by design — every state change is verifiable.",
      ],
    },
    ar: {
      title: "تطبيقات الويب 3 (Web3 Applications)",
      desc: "الجيل القادم من الإنترنت المبني على اللامركزية والملكية الرقمية الحقيقية للمستخدمين عبر تقنيات البلوكشين.",
      bullets: [
        "البنية التشغيلية: الاعتماد على شبكات موزعة، والعقود الذكية، وتشفير البيانات بمعايير أمان سيبراني عالية.",
        "القيمة المضافة: حرمان الوسطاء من السيطرة، وتمكين الأفراد من امتلاك بياناتهم وأصولهم الرقمية بالكامل.",
        "الشفافية بالتصميم — كل تغيير في الحالة قابل للتحقق.",
      ],
    },
  },
  {
    icon: "coins",
    en: {
      title: "Decentralized Finance (DeFi)",
      desc: "An open, global and independent financial system operating without central banks or traditional intermediaries through transparent code.",
      bullets: [
        "Operational structure: lending, borrowing, trading and automated yield generation via liquidity pools and smart contracts.",
        "Added value: financial services for anyone on earth with an internet connection, with full transparency on every transaction.",
        "Composability: protocols stack into new financial primitives.",
      ],
    },
    ar: {
      title: "تطبيقات التمويل اللامركزي (DeFi)",
      desc: "نظام مالي عالمي مفتوح ومستقل يعمل بلا بنوك مركزية أو وسطاء تقليديين عبر شيفرات برمجية شفافة.",
      bullets: [
        "البنية التشغيلية: الإقراض، والاقتراض، والتداول، وتوليد العائدات آليًا عبر مجمعات السيولة والعقود الذكية.",
        "القيمة المضافة: إتاحة الخدمات المالية لأي شخص في العالم يملك اتصالًا بالإنترنت مع شفافية كاملة في كل معاملة.",
        "قابلية التركيب: تتراكم البروتوكولات لتكوّن أدوات مالية جديدة.",
      ],
    },
  },
  {
    icon: "layers",
    en: {
      title: "Decentralized Applications (DApps)",
      desc: "Complete digital applications running on blockchain networks instead of traditional centralized company servers.",
      bullets: [
        "Operational structure: front-ends wired to smart contracts running on tamper-proof distributed ledgers.",
        "Added value: censorship resistance, absolute zero-downtime continuity and protection of user privacy.",
        "No single point of failure, no silent takedowns.",
      ],
    },
    ar: {
      title: "التطبيقات اللامركزية (DApps)",
      desc: "برمجيات وتطبيقات رقمية متكاملة تعمل على شبكات البلوكشين بدلًا من خوادم الشركات المركزية التقليدية.",
      bullets: [
        "البنية التشغيلية: واجهات أمامية متصلة بعقود ذكية تعمل على دفاتر أستاذ موزعة وغير قابلة للتلاعب.",
        "القيمة المضافة: مقاومة الرقابة، واستمرارية العمل المطلقة بلا توقف (Zero Downtime)، وحماية خصوصية المستخدمين.",
        "لا نقطة فشل واحدة، ولا إيقاف صامت للخدمة.",
      ],
    },
  },
  {
    icon: "vote",
    en: {
      title: "DAO & Decentralized Voting",
      desc: "Managing organizations and digital networks collectively and democratically through tokens and smart contracts.",
      bullets: [
        "Operational structure: proposal submission, direct voting and automatic execution of decisions from encrypted on-chain results.",
        "Added value: absolute transparency in decision-making, incentivized community participation and the end of bureaucracy.",
        "Governance that anyone can audit, line by line.",
      ],
    },
    ar: {
      title: "الحوكمة اللامركزية والتصويت (DAO & Decentralized Voting)",
      desc: "إدارة المنظمات والشبكات الرقمية بشكل جماعي وديمقراطي يعتمد على الرموز الرقمية والعقود الذكية.",
      bullets: [
        "البنية التشغيلية: تقديم المقترحات، والتصويت المباشر، والتنفيذ الآلي للقرارات بناءً على نتائج التصويت المشفرة على البلوكشين.",
        "القيمة المضافة: شفافية مطلقة في اتخاذ القرار، وتحفيز المشاركة المجتمعية، والقضاء على البيروقراطية والإدارة الفردية.",
        "حوكمة يستطيع أي شخص تدقيقها سطرًا بسطر.",
      ],
    },
  },
] as const;

/** Featured writing / recognition spotlight. */
export const SPOTLIGHT = {
  href: "https://medium.com/@eslam.kora60/building-the-future-of-pi-web3-architectural-insights-recognition-from-dr-nicolas-kokkalis-03027c9c221d",
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
  research: "عمق البحث",
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
    research: { en: "Depth of Research", ar: "عمق البحث" },
  },
  kickers: {
    research: {
      en: "Decades of sustained research across chains, contracts, adversaries and ciphers.",
      ar: "عقود من البحث المتواصل في السلاسل والعقود والخصوم والشيفرات.",
    },
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
