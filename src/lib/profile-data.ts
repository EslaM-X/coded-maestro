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
  {
    org: "Fabric Foundation",
    title: "RoboPay — platform hardening & quality",
    href: "https://github.com/fabricfoundation/RoboPay/pull/92",
    summary:
      "Seven open PRs to the Fabric RoboPay repo: security redaction of payment payloads, hardened Go CI, a Python quality baseline, a profile registry validator and two Tier-1 robot profiles.",
    quote: null,
  },
  {
    org: "Steinheim",
    title: "Steinheim — luxury health brand engineering",
    href: "https://github.com/hakamabudagga77/steinheim-eg",
    summary:
      "Twenty shipped PRs to a live luxury health brand: installable PWA, bilingual AI concierge, seasonal campaign engine, accessibility foundation, security hardening, Arabic RTL polish and SEO schema.",
    quote: null,
  },
];

/** Project filter taxonomy — ALL / AI / ROBOTICS / WEB3 / SECURITY / SYSTEMS / FULL-STACK. */
export const PROJECT_CATEGORIES = [
  "ALL",
  "AI",
  "ROBOTICS",
  "WEB3",
  "SECURITY",
  "SYSTEMS",
  "FULL-STACK",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  name: string;
  tag: string;
  category: ProjectCategory;
  desc: string;
  stack: readonly string[];
  href: string | null;
  details?: { en: readonly string[]; ar: readonly string[] };
};

export const PROJECTS: readonly Project[] = [
  {
    name: "Steinheim ERP & Invoicing",
    tag: "Enterprise",
    category: "SYSTEMS" as ProjectCategory,
    desc: "Full internal operations platform — invoicing, inventory, stock audits, customer records, reporting and daily sales performance — plus the live public web product, shipped through 20 merged PRs.",
    stack: ["TypeScript", "React", "Supabase", "PostgreSQL", "Next.js"],
    details: {
      en: [
        "Internal ERP used daily by the operating brand.",
        "Public storefront: PWA, bilingual AI concierge, seasonal campaign engine.",
      ],
      ar: [
        "نظام ERP داخلي يُستخدم يوميًا في العلامة التجارية.",
        "واجهة عامة: تطبيق PWA ومساعد ذكاء اصطناعي ثنائي اللغة ومحرك حملات موسمي.",
      ],
    },
    href: "https://github.com/hakamabudagga77/steinheim-eg",
  },
  {
    name: "RoboPay Spot Tier-1",
    tag: "Robotics · Payments",
    category: "ROBOTICS" as ProjectCategory,
    desc: "Boston Dynamics Spot Tier-1 profile — 7 paid embodied skills on MuJoCo + PyBullet sim-to-sim, gated by an x402 payment layer with no-settle-on-failure.",
    stack: ["Python", "MuJoCo", "PyBullet", "x402"],
    details: {
      en: [
        "Policy → planner → controller pipeline measured across 3 physics backends.",
        "0.26 m max sim-to-sim deviation at 100% success, 0% collision.",
      ],
      ar: [
        "خط أنابيب السياسة ← المخطط ← المتحكم مقيس عبر 3 محاكيات فيزيائية.",
        "أقصى انحراف بين المحاكيات 0.26 م بنجاح 100% وبدون تصادمات.",
      ],
    },
    href: "https://github.com/EslaM-X/robopay-spot-tier1",
  },
  {
    name: "PiRC1 Standards Pro",
    tag: "Protocol",
    category: "WEB3" as ProjectCategory,
    desc: "Reference implementation proposal for PiRC1 Utility Standards and the PEP Protocol — engagement scoring, transparency dashboards and Sybil protection.",
    stack: ["TypeScript", "Protocol Design"],
    href: "https://github.com/EslaM-X/pirc1-standards-pro",
  },
  {
    name: "MapCap IPO Platform",
    tag: "Web3",
    category: "WEB3" as ProjectCategory,
    desc: "Frontend and backend systems for a decentralized capital-formation platform inside the Pi ecosystem.",
    stack: ["TypeScript", "Node.js", "MongoDB"],
    href: "https://github.com/EslaM-X/mapcap-ipo-frontendX",
  },
  {
    name: "Pi Local AI Agent",
    tag: "AI",
    category: "AI" as ProjectCategory,
    desc: "A locally-running autonomous agent for the Pi ecosystem — planning and executing multi-step tasks without a central service.",
    stack: ["TypeScript", "LLM", "Agents"],
    details: {
      en: [
        "Planning → router → research/content/QA pipeline with a human approval gate.",
        "Every execution writes to an audit log before it is allowed to act.",
      ],
      ar: [
        "خط التخطيط ← الموجّه ← البحث/المحتوى/الجودة مع بوابة موافقة بشرية.",
        "كل تنفيذ يُسجّل في سجل تدقيق قبل السماح له بالفعل.",
      ],
    },
    href: "https://github.com/EslaM-X/pi-local-ai-agent",
  },
  {
    name: "S.I.G Corporate Platform",
    tag: "Brand",
    category: "FULL-STACK" as ProjectCategory,
    desc: "End-to-end design and build of a diversified business group's corporate presence: UI/UX, content architecture and business data integration.",
    stack: ["React", "TypeScript", "Design Systems"],
    href: null,
  },
  {
    name: "Spin4Pi Vault",
    tag: "Web3",
    category: "WEB3" as ProjectCategory,
    desc: "Vault mechanics and reward logic for a gamified Pi ecosystem application.",
    stack: ["TypeScript", "Pi SDK"],
    href: "https://github.com/EslaM-X/spin4pi-vault",
  },
  {
    name: "PiEat-Me",
    tag: "Founder",
    category: "WEB3" as ProjectCategory,
    desc: "Founded a food-commerce product inside the Pi Network ecosystem, from concept to live users.",
    stack: ["React", "Node.js", "Pi Payments"],
    href: null,
  },
  {
    name: "ai-agent-automation-platform",
    tag: "Flagship · AI",
    category: "AI" as ProjectCategory,
    desc: "Governed agent orchestration: planning, specialized agents, a human approval gate, execution, full audit, offline evaluation, retries and idempotency — zero API keys, fully offline-testable.",
    stack: ["Python", "Agents", "Workflows", "Audit"],
    details: {
      en: [
        "Retry policy with exponential backoff; permanent failures abort with a full audit trail.",
        "Tool permissions deny-by-default; idempotent runs and checkpoint-based resume.",
        "22 offline tests · CI green · v0.2.0 released.",
      ],
      ar: [
        "سياسة إعادة محاولة بتأخير متصاعد؛ الفشل الدائم يُوقف العملية مع سجل تدقيق كامل.",
        "صلاحيات أدوات مرفوضة افتراضيًا؛ تشغيل متماكل واستئناف من نقاط الحفظ.",
        "22 اختبارًا أوفلاين · CI أخضر · الإصدار v0.2.0.",
      ],
    },
    href: "https://github.com/EslaM-X/ai-agent-automation-platform",
  },
  {
    name: "robot-sim-policy-lab",
    tag: "Robotics · Simulation",
    category: "ROBOTICS" as ProjectCategory,
    desc: "Policy-driven robotics experiments with measurable task execution, physics validation and simulator-to-simulator testing across MuJoCo and PyBullet.",
    stack: ["Python", "MuJoCo", "PyBullet"],
    details: {
      en: [
        "The same policy re-validated across physics engines — sim-to-sim, not sim-to-hype.",
        "Measured success, collision and deviation; 18 tests, CI green.",
      ],
      ar: [
        "نفس السياسة يُعاد التحقق منها عبر محركات فيزيائية — نقل بين المحاكيات لا وعود.",
        "قياس دقيق للنجاح والتصادم والانحراف؛ 18 اختبارًا و CI أخضر.",
      ],
    },
    href: "https://github.com/EslaM-X/robot-sim-policy-lab",
  },
  {
    name: "RoboPay Go2 Tier-1",
    tag: "Robotics · Bounty PR",
    category: "ROBOTICS" as ProjectCategory,
    desc: "Unitree Go2 Tier-1 simulator profile for the Fabric RoboPay bounty — obstacle navigation re-validated across MuJoCo + PyBullet, submitted as an open PR.",
    stack: ["Python", "MuJoCo", "PyBullet", "x402"],
    details: {
      en: [
        "A paid-per-skill embodied profile for the machine economy.",
        "Public PR #89 to fabricfoundation/RoboPay — evidence, not estimates.",
      ],
      ar: [
        "ملف مُجسَّد يُدفع لكل مهارة في اقتصاد الآلات.",
        "PR #89 عام إلى fabricfoundation/RoboPay — أدلة لا تخمينات.",
      ],
    },
    href: "https://github.com/fabricfoundation/RoboPay/pull/89",
  },
  {
    name: "production-systems-lab",
    tag: "Systems · Go",
    category: "SYSTEMS" as ProjectCategory,
    desc: "Production-grade Go building blocks for financial and distributed systems: idempotency, replay protection, circuit breakers, retries, HMAC auth, rate limiting and hash-chained audit.",
    stack: ["Go", "Idempotency", "Webhooks", "Audit"],
    details: {
      en: [
        "Race-tested, benchmarked building blocks — not a toy repo.",
        "Hash-chained audit log for tamper-evident accounting.",
      ],
      ar: [
        "لبنات مُختبَرة ضد التنافسية ومقيسة الأداء — لا مستودع تجريبي.",
        "سجل تدقيق متسلسل بالتجزئة لمحاسبة مقاومة للتلاعب.",
      ],
    },
    href: "https://github.com/EslaM-X/production-systems-lab",
  },
  {
    name: "engineering-notes",
    tag: "Notes · Deep Dives",
    category: "SYSTEMS" as ProjectCategory,
    desc: "Problem-first engineering deep dives — policy-driven robotics, replay-safe payments, CI as evidence and secure API design. Every claim ends in a testable artifact.",
    stack: ["Robotics", "Payments", "Security", "CI"],
    details: {
      en: [
        "Each note closes the loop: problem → design → code → measurable artifact.",
        "The notes behind the evidence matrix on this page.",
      ],
      ar: [
        "كل ملاحظة تُغلق الحلقة: المشكلة ← التصميم ← الكود ← أثر قابل للقياس.",
        "الملاحظات التي تقف خلف مصفوفة الأدلة في هذه الصفحة.",
      ],
    },
    href: "https://github.com/EslaM-X/engineering-notes",
  },
  {
    name: "EslaM-X Sovereign Portfolio",
    tag: "This Site",
    category: "FULL-STACK" as ProjectCategory,
    desc: "This bilingual AR/EN portfolio, engineered as an evidence system — every claim opens to a public repo, PR or benchmark, with SSR meta for Arabic and English share cards.",
    stack: ["TypeScript", "TanStack Start", "Nitro", "Vercel"],
    details: {
      en: [
        "Deterministic telemetry, live GitHub evidence, zero fabricated numbers.",
        "Shared link cards adapt to Arabic or English automatically.",
      ],
      ar: [
        "قياس حتمي وأدلة GitHub حية وصفر أرقام مختلقة.",
        "بطاقات المشاركة تتكيف مع العربية أو الإنجليزية تلقائيًا.",
      ],
    },
    href: "https://github.com/EslaM-X/coded-maestro",
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
  { label: "Arsenal", id: "arsenal" },
  { label: "Evidence", id: "evidence" },
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
  arsenal: "الترسانة",
  evidence: "الأدلة",
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
  systemOnline: { en: "SYSTEM ONLINE", ar: "النظام يعمل" },
  liveStatus: {
    en: "Live — eslamx.vercel.app",
    ar: "مباشر — eslamx.vercel.app",
  },
  ctaGithub: { en: "Open GitHub", ar: "افتح GitHub" },
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
    arsenal: { en: "GitHub Arsenal", ar: "ترسانة جيت هب" },
    evidence: { en: "Engineering Evidence", ar: "الأدلة الهندسية" },
    architecture: { en: "Interactive Architecture", ar: "المعمارية التفاعلية" },
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
    arsenal: {
      en: "Live telemetry from the GitHub profile — refreshed every day by an automated workflow.",
      ar: "بيانات حية من ملف GitHub — تُحدَّث يوميًا عبر سير عمل آلي.",
    },
    evidence: {
      en: "Every claim on this page opens to a public repository, a PR, or a benchmark. Evidence, not estimates.",
      ar: "كل ادعاء في هذه الصفحة يقود إلى مستودع عام أو طلب دمج أو معيار قياس. أدلة، لا تخمينات.",
    },
    architecture: {
      en: "The pipelines behind the systems — click a domain to walk its flow.",
      ar: "خطوط الأنابيب خلف الأنظمة — اضغط على مجال لاستعراض مساره.",
    },
  },
  arsenalNote: {
    en: "Telemetry panels are generated from live GitHub data by the update-profile-assets workflow. Motion is pure SMIL — no JavaScript.",
    ar: "لوحات القياس تُولَّد من بيانات GitHub الحية عبر سير عمل update-profile-assets. الحركة بـ SMIL خالص — بلا جافاسكربت.",
  },
  evidenceCta: { en: "View source", ar: "اعرض المصدر" },
  archNote: {
    en: "The human approval gate is the difference between automation and accountability.",
    ar: "بوابة الموافقة البشرية هي الفارق بين الأتمتة والمساءلة.",
  },
} as const;

/** Engineering Evidence — every claim links to a public artifact. */
export const EVIDENCE = [
  {
    org: { en: "Robotics & Simulation", ar: "الروبوتات والمحاكاة" },
    claim: {
      en: "Policy-driven navigation validated across three physics backends — measured, not promised.",
      ar: "ملاحة مدفوعة بالسياسات مُتحقَّق منها عبر ثلاثة محاكيات فيزيائية — مقاسة، لا موعودة.",
    },
    metric: { en: "18 tests · 0.26 m max deviation · CI green", ar: "18 اختبارًا · 0.26 م كحد أقصى · CI أخضر" },
    href: "https://github.com/EslaM-X/robot-sim-policy-lab",
  },
  {
    org: { en: "AI Agents", ar: "وكلاء الذكاء الاصطناعي" },
    claim: {
      en: "Human-gated, audit-logged agent orchestration — no autonomous execution without approval.",
      ar: "تنسيق وكلاء خاضع لموافقة بشرية وسجلات تدقيق — لا تنفيذ مستقل دون موافقة.",
    },
    metric: { en: "10 tests · approval gate · audit chain", ar: "10 اختبارات · بوابة موافقة · سلسلة تدقيق" },
    href: "https://github.com/EslaM-X/ai-agent-automation-platform",
  },
  {
    org: { en: "Production Systems", ar: "الأنظمة الإنتاجية" },
    claim: {
      en: "Reliability patterns in Go — idempotency, replay, circuit-breakers, HMAC auth, hash-chained audit.",
      ar: "أنماط موثوقية في Go — التماثل، وإعادة التشغيل، وقواطع الدائرة، ومصادقة HMAC، وتدقيق متسلسل بالتجزئة.",
    },
    metric: { en: "Go · race-tested · benchmarks", ar: "Go · مختبر ضد التنافسية · قياسات أداء" },
    href: "https://github.com/EslaM-X/production-systems-lab",
  },
  {
    org: { en: "Engineering Notes", ar: "ملاحظات هندسية" },
    claim: {
      en: "Problem-first deep dives — robotics, payments, CI and secure APIs, each ending in a testable artifact.",
      ar: "غوص معمّق يبدأ بالمشكلة — الروبوتات والمدفوعات وCI والواجهات الآمنة، كل منها ينتهي بأثر قابل للاختبار.",
    },
    metric: { en: "5 notes · v1.0.0", ar: "5 ملاحظات · v1.0.0" },
    href: "https://github.com/EslaM-X/engineering-notes",
  },
  {
    org: { en: "Web3 Protocols", ar: "بروتوكولات الويب 3" },
    claim: {
      en: "Authored PiRC1 utility standards — reviewed and endorsed by Pi Network's founder.",
      ar: "تأليف معايير المنفعة PiRC1 — رُوجعت وأُثني عليها من مؤسس Pi Network.",
    },
    metric: { en: "PR #2 · Dr. Nicolas Kokkalis", ar: "PR #2 · د. نيكولاس كوكاليس" },
    href: "https://github.com/PiNetwork/PiRC/pull/2",
  },
  {
    org: { en: "Stellar", ar: "ستيلر" },
    claim: {
      en: "Contribution to the reference P2P implementation behind Stellar consensus.",
      ar: "مساهمة في تنفيذ الندّ المرجعي خلف إجماع Stellar.",
    },
    metric: { en: "stellar-core PR #5409", ar: "stellar-core PR #5409" },
    href: "https://github.com/stellar/stellar-core/pull/5409",
  },
  {
    org: { en: "Machine-Payable Robotics", ar: "الروبوتات المدفوعة آليًا" },
    claim: {
      en: "x402 payment gating with no-settle-on-failure guarantees for embodied agents.",
      ar: "بوابة دفع x402 بضمانات عدم التسوية عند الفشل للوكلاء المُجسَّدين.",
    },
    metric: { en: "RoboPay PR #86 · Spot Tier-1", ar: "RoboPay PR #86 · Spot Tier-1" },
    href: "https://github.com/fabricfoundation/RoboPay/pull/86",
  },
  {
    org: { en: "Machine-Payable Robotics", ar: "الروبوتات المدفوعة آليًا" },
    claim: {
      en: "Unitree Go2 Tier-1 simulator profile — obstacle navigation re-validated across MuJoCo + PyBullet, paid per skill.",
      ar: "ملف محاكي Tier-1 لـ Unitree Go2 — ملاحة مع العقبات مُعاد التحقق منها عبر MuJoCo + PyBullet، مدفوعة لكل مهارة.",
    },
    metric: { en: "RoboPay PR #89 · Go2 Tier-1", ar: "RoboPay PR #89 · Go2 Tier-1" },
    href: "https://github.com/fabricfoundation/RoboPay/pull/89",
  },
  {
    org: { en: "Client Engineering", ar: "هندسة العملاء" },
    claim: {
      en: "Twenty merged PRs shipping a live luxury health brand — PWA, AI concierge, security hardening.",
      ar: "عشرون طلب دمج مُنجزًا تشحن علامة صحية فاخرة حية — PWA ومساعد ذكاء اصطناعي وتحصين أمني.",
    },
    metric: { en: "20 PRs · steinheim-eg", ar: "20 PR · steinheim-eg" },
    href: "https://github.com/hakamabudagga77/steinheim-eg",
  },
  {
    org: { en: "The Evidence Matrix", ar: "مصفوفة الأدلة" },
    claim: {
      en: "The full audit trail — every number, test and benchmark, tracked in one place.",
      ar: "مسار التدقيق الكامل — كل رقم واختبار ومعيار قياس، في مكان واحد.",
    },
    metric: { en: "portfolio · public", ar: "portfolio · عام" },
    href: "https://github.com/EslaM-X/portfolio",
  },
];

/** Interactive architecture flows — bilingual stage pipelines. */
export const ARCH_FLOWS = [
  {
    id: "robotics",
    icon: "bot",
    title: { en: "Robotics", ar: "الروبوتات" },
    tagline: {
      en: "Policy → Planner → Controller → MuJoCo ⇄ PyBullet → Validation",
      ar: "السياسة ← المخطط ← المتحكم ← MuJoCo ⇄ PyBullet ← التحقق",
    },
    stages: [
      {
        en: "Policy",
        ar: "السياسة",
        descEn: "High-level rules: where to go, what to avoid, what to respect.",
        descAr: "قواعد عالية المستوى: إلى أين تذهب، وماذا تتجنب، وما الذي تحترمه.",
      },
      {
        en: "Planner",
        ar: "المخطط",
        descEn: "Turns the policy into a concrete trajectory in the simulated world.",
        descAr: "يحوّل السياسة إلى مسار ملموس في العالم المُحاكى.",
      },
      {
        en: "Controller",
        ar: "المتحكم",
        descEn: "Executes the plan at real-time frequency, closed-loop on state.",
        descAr: "ينفّذ الخطة بتردد لحظي، بحلقة مغلقة على الحالة.",
      },
      {
        en: "MuJoCo ⇄ PyBullet",
        ar: "MuJoCo ⇄ PyBullet",
        descEn: "The same policy re-validated across two physics engines — sim-to-sim.",
        descAr: "نفس السياسة تُعاد معاينتها عبر محركي فيزياء — من محاكي إلى محاكي.",
      },
      {
        en: "Validation",
        ar: "التحقق",
        descEn: "Measured success, collision and deviation before anything ships.",
        descAr: "قياس النجاح والتصادم والانحراف قبل إطلاق أي شيء.",
      },
    ],
    note: {
      en: "Measured 0.26 m max sim-to-sim deviation — 100% success, 0% collision.",
      ar: "أقصى انحراف مقاس بين المحاكيات 0.26 م — نجاح 100% وبدون تصادمات.",
    },
  },
  {
    id: "ai",
    icon: "brain",
    title: { en: "AI Agents", ar: "وكلاء الذكاء الاصطناعي" },
    tagline: {
      en: "Planning → Agent Router → Research / Content / QA → Approval Gate → Execution → AuditLog",
      ar: "التخطيط ← موجّه الوكلاء ← البحث / المحتوى / الجودة ← بوابة الموافقة ← التنفيذ ← سجل التدقيق",
    },
    stages: [
      {
        en: "Planning",
        ar: "التخطيط",
        descEn: "The goal is decomposed into verifiable, ordered tasks.",
        descAr: "الهدف يُجزَّأ إلى مهام مرتبة قابلة للتحقق.",
      },
      {
        en: "Agent Router",
        ar: "موجّه الوكلاء",
        descEn: "Each task routes to the specialist agent best equipped for it.",
        descAr: "كل مهمة تُوجَّه إلى الوكلاء المتخصص الأنسب لها.",
      },
      {
        en: "Research / Content / QA",
        ar: "البحث / المحتوى / الجودة",
        descEn: "Parallel lanes gather, produce and verify before anything is final.",
        descAr: "مسارات متوازية تجمع وتنتج وتتحقق قبل اعتماد أي شيء.",
      },
      {
        en: "Approval Gate",
        ar: "بوابة الموافقة",
        descEn: "A human decision point — nothing acts on the real world without consent.",
        descAr: "نقطة قرار بشري — لا شيء يعمل على العالم الحقيقي دون موافقة.",
      },
      {
        en: "Execution → AuditLog",
        ar: "التنفيذ ← سجل التدقيق",
        descEn: "Every action is written to an append-only audit trail as it executes.",
        descAr: "كل فعل يُسجَّل في سجل تدقيق غير قابل للتعديل لحظة تنفيذه.",
      },
    ],
    note: {
      en: "The human approval gate is the difference between automation and accountability.",
      ar: "بوابة الموافقة البشرية هي الفارق بين الأتمتة والمساءلة.",
    },
  },
] as const;
