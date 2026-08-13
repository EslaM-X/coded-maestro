/**
 * Arabic dictionaries for content that is stored in English in profile-data.
 * Keyed by the English source string so nothing has to be duplicated or removed.
 */

export const SKILL_GROUP_AR: Record<string, string> = {
  "Web3 & Blockchain": "الويب 3 والبلوك تشين",
  "Full-Stack Engineering": "هندسة الويب المتكاملة",
  "AI & Automation": "الذكاء الاصطناعي والأتمتة",
  "Cyber Security": "الأمن السيبراني",
  "Machines, Robotics & Embedded": "الآلات والروبوتات والأنظمة المدمجة",
  "Business & Operations": "الأعمال والعمليات",
};

/** Concept skills translated; product/brand names intentionally stay in Latin. */
export const SKILL_AR: Record<string, string> = {
  "Protocol Design": "تصميم البروتوكولات",
  "Smart Contracts": "العقود الذكية",
  "Consensus (BFT)": "الإجماع (BFT)",
  "DeFi Mechanics": "آليات التمويل اللامركزي",
  Tokenomics: "اقتصاد الرموز",
  "EVM Internals": "أعماق آلة EVM",
  "Layer-2 & Rollups": "الطبقة الثانية والرول-أب",
  "Bridges & Interop": "الجسور والتشغيل البيني",
  "Account Abstraction": "تجريد الحسابات",
  "MEV Awareness": "الوعي بـ MEV",
  "Zero-Knowledge Proofs": "براهين المعرفة الصفرية",
  "Wallet & Key Custody": "حفظ المحافظ والمفاتيح",
  "DAO Governance": "حوكمة المنظمات المستقلة",
  "x402 Machine Payments": "مدفوعات الآلات x402",
  "DApps Architecture": "معمارية التطبيقات اللامركزية",
  "DeFi Protocol Design": "تصميم بروتوكولات التمويل اللامركزي",
  "Liquidity & AMM Design": "السيولة وصانع السوق الآلي",
  "On-Chain Voting": "التصويت على السلسلة",
  "Staking & Yield Logic": "منطق التخزين والعائد",
  "NFT & Digital Ownership": "الرموز غير القابلة للاستبدال والملكية الرقمية",
  "Cross-Chain Messaging": "المراسلة عبر السلاسل",
  "Gas Optimization": "تحسين رسوم الغاز",
  "Microservices": "الخدمات المصغّرة",
  "System Design": "تصميم الأنظمة",
  Observability: "المراقبة والرصد",
  "Event-Driven Pipelines": "خطوط معالجة مدفوعة بالأحداث",
  "Workflow Orchestration": "تنسيق سير العمل",
  "Realtime Infrastructure": "بنية تحتية لحظية",
  "Zero-Downtime Deploys": "نشر بلا توقف",
  "Edge Caching & CDN": "التخزين الطرفي وشبكات التوزيع",
  "Neural Networks": "الشبكات العصبية",
  "AI Agents": "وكلاء الذكاء الاصطناعي",
  "LLM Integration": "دمج النماذج اللغوية الكبيرة",
  "Embodied Robotics": "الروبوتات المُجسَّدة",
  "Trading Automation": "أتمتة التداول",
  "Multi-Agent Systems": "الأنظمة متعددة الوكلاء",
  "RAG Pipelines": "خطوط الاسترجاع المعزّز",
  "Vector Databases": "قواعد البيانات المتجهية",
  "Prompt Engineering": "هندسة الأوامر",
  "Computer Vision": "الرؤية الحاسوبية",
  "Reinforcement Learning": "التعلّم المعزز",
  "Physical AI": "الذكاء الاصطناعي الفيزيائي",
  "Speech & TTS": "الصوت وتحويل النص لكلام",
  "Autonomous Agent Economies": "اقتصادات الوكلاء المستقلين",
  "Agent-to-Agent Negotiation": "التفاوض بين الوكلاء",
  "Machine-Payable Skills": "مهارات قابلة للدفع آليًا",
  "Data Scraping & ETL": "جمع البيانات ومعالجتها",
  "Self-Healing Systems": "أنظمة ذاتية الإصلاح",
  "Decision Engines": "محركات القرار",
  "Threat Modeling": "نمذجة التهديدات",
  "Zero-Trust Design": "تصميم انعدام الثقة",
  "Smart Contract Auditing": "تدقيق العقود الذكية",
  "Invariant Testing": "اختبار الثوابت",
  "Penetration Testing": "اختبار الاختراق",
  Cryptography: "التشفير",
  "Red Team Operations": "عمليات الفريق الأحمر",
  "Blue Team Defense": "دفاع الفريق الأزرق",
  "Digital Forensics": "الأدلة الجنائية الرقمية",
  "Malware Analysis": "تحليل البرمجيات الخبيثة",
  "Reverse Engineering": "الهندسة العكسية",
  "Incident Response": "الاستجابة للحوادث",
  "Blockchain Forensics": "التتبع الجنائي للبلوك تشين",
  "Exploit Development": "تطوير الثغرات",
  Fuzzing: "اختبار التشويش",
  "SIEM & Detection": "أنظمة الرصد والكشف",
  "Kali / Linux Hardening": "تحصين Kali / Linux",
  "MITRE ATT&CK (TTPs)": "تكتيكات MITRE ATT&CK",
  "Post-Quantum Awareness": "الوعي بما بعد الكم",
  "Cybercrime Investigation": "التحقيق في الجرائم السيبرانية",
  "Chain Analysis & Tracing": "تحليل السلاسل وتتبع الأموال",
  "Anti-Sybil Systems": "أنظمة مقاومة الهويات الوهمية",
  "Secure Key Custody": "الحفظ الآمن للمفاتيح",
  "Threat Intelligence": "استخبارات التهديدات",
  "Supply-Chain Security": "أمن سلاسل التوريد",
  "Real-Time OS": "أنظمة تشغيل لحظية",
  "Embedded Systems": "الأنظمة المدمجة",
  "Sensor Fusion": "دمج المستشعرات",
  "Motion Control": "التحكم في الحركة",
  "IVI / Automotive Systems": "أنظمة السيارات والمعلومات الترفيهية",
  "Machine Economy Payments": "مدفوعات اقتصاد الآلات",
  "Humanoid & Multi-Task Robots": "الروبوتات البشرية ومتعددة المهام",
  "Digital Twins": "التوائم الرقمية",
  "Edge Inference": "الاستدلال الطرفي",
  "CAN Bus / Telemetry": "ناقل CAN والقياس عن بُعد",
  "Autonomous Navigation": "الملاحة الذاتية",
  "Machine-to-Machine Commerce": "التجارة بين الآلات",
  "Robotic Fleet Ops": "تشغيل أساطيل الروبوتات",
  "Firmware Security": "أمن البرمجيات الثابتة",
  "Operations Strategy": "استراتيجية العمليات",
  "ERP Architecture": "معمارية أنظمة ERP",
  "KPI & Analytics": "مؤشرات الأداء والتحليلات",
  "Brand Launch": "إطلاق العلامات التجارية",
  "Supply & Inventory": "التوريد والمخزون",
  "Executive Coordination": "التنسيق التنفيذي",
  "Financial Modeling": "النمذجة المالية",
  "Cost Control": "مراقبة التكاليف",
  "Product Strategy": "استراتيجية المنتج",
  "Go-To-Market": "خطط دخول السوق",
  "Process Automation": "أتمتة العمليات",
  "Technical Leadership": "القيادة التقنية",
  "Digital Transformation": "التحول الرقمي",
  "Revenue Operations": "عمليات الإيرادات",
  "Vendor & Partner Strategy": "استراتيجية الموردين والشركاء",
  "Data-Driven Decisions": "قرارات مبنية على البيانات",
  "Testing (Vitest / Playwright)": "الاختبارات (Vitest / Playwright)",
  "CI/CD (GitHub Actions)": "التكامل والنشر المستمر",
  "REST & WebSockets": "REST والمقابس اللحظية",
  "Fine-Tuning / LoRA": "الضبط الدقيق / LoRA",
  "Sim-to-Sim (MuJoCo)": "النقل بين المحاكيات (MuJoCo)",
  "Web3 Frontend (wagmi / viem)": "واجهات ويب 3 (wagmi / viem)",
  "Workflow Automation (n8n)": "أتمتة سير العمل (n8n)",
  MLOps: "عمليات تعلّم الآلة",
  OSINT: "الاستخبارات مفتوحة المصدر",
};

export const IMPACT_AR: Record<
  string,
  { org: string; title: string; summary: string; quote: string | null }
> = {
  "PiRC — Pi Requests for Comment": {
    org: "شبكة Pi",
    title: "PiRC — مقترحات تطوير بروتوكول Pi",
    summary:
      "تأليف مقترح معايير المنفعة PiRC1: إثباتات قفل الضمان، والحساب الديناميكي لـ p_floor، وقوة PiPower الموزونة بالتفاعل، والتقارير المقاومة لهجمات Sybil.",
    quote:
      "«كلتا الفكرتين جيدة. ويبدو التنفيذ ممكنًا.» — د. نيكولاس كوكاليس، مؤسس شبكة Pi",
  },
  "stellar-core — consensus layer contribution": {
    org: "Stellar",
    title: "stellar-core — مساهمة في طبقة الإجماع",
    summary:
      "مساهمة في التنفيذ المرجعي لشبكة الند-للند التي تُشغّل بروتوكول الإجماع في شبكة Stellar.",
    quote: null,
  },
  "RoboPay — machine-payable robotics": {
    org: "Fabric Foundation",
    title: "RoboPay — روبوتات قابلة للدفع آليًا",
    summary:
      "ربط الروبوتات والمحاكيات والأجهزة الفيزيائية بشبكة مدفوعات — بوابة دفع x402 مع ضمان عدم التسوية عند الفشل.",
    quote: null,
  },
};

export const PROJECT_AR: Record<string, { tag: string; desc: string }> = {
  "Steinheim ERP & Invoicing": {
    tag: "مؤسسي",
    desc: "منصة عمليات داخلية متكاملة: الفوترة، والمخزون، وجرد المخزون، وسجلات العملاء، والتقارير، وأداء المبيعات اليومي لعلامة تجارية قائمة.",
  },
  "RoboPay Spot Tier-1": {
    tag: "روبوتات · مدفوعات",
    desc: "ملف Spot Tier-1 من Boston Dynamics — 7 مهارات مُجسَّدة مدفوعة على محاكاة MuJoCo وPyBullet، محكومة بطبقة دفع x402 مع عدم التسوية عند الفشل.",
  },
  "PiRC1 Standards Pro": {
    tag: "بروتوكول",
    desc: "تنفيذ مرجعي مقترح لمعايير المنفعة PiRC1 وبروتوكول PEP — تقييم التفاعل، ولوحات الشفافية، والحماية من هجمات Sybil.",
  },
  "MapCap IPO Platform": {
    tag: "ويب 3",
    desc: "أنظمة الواجهة الأمامية والخلفية لمنصة لامركزية لتكوين رأس المال داخل منظومة Pi.",
  },
  "Pi Local AI Agent": {
    tag: "ذكاء اصطناعي",
    desc: "وكيل مستقل يعمل محليًا لمنظومة Pi — يخطط وينفذ مهامًا متعددة الخطوات دون خدمة مركزية.",
  },
  "S.I.G Corporate Platform": {
    tag: "علامة تجارية",
    desc: "تصميم وبناء كامل للحضور المؤسسي لمجموعة أعمال متنوعة: تجربة المستخدم، ومعمارية المحتوى، ودمج بيانات الأعمال.",
  },
  "Spin4Pi Vault": {
    tag: "ويب 3",
    desc: "آليات الخزنة ومنطق المكافآت لتطبيق ترفيهي داخل منظومة Pi.",
  },
  "PiEat-Me": {
    tag: "مؤسس",
    desc: "تأسيس منتج تجارة أغذية داخل منظومة Pi Network، من الفكرة حتى مستخدمين فعليين.",
  },
};

export const RECO_AR: Record<string, { quote: string; author: string; title: string }> = {
  "Daniel Lee": {
    quote:
      "إسلام مطوّر عالي الدافعية وشغوف جدًا بالذكاء الاصطناعي. إلى جانب تركيزه الدقيق على مهامه، يبحث دائمًا عن فرص لتحسين وتقوية مشاريع المؤسسة — تحسين قابلية التوسّع، ورفع الأداء، وتعزيز الأمان. وهو يبادر باستمرار بطرق ترفع بنيتنا التحتية إلى مستوى المؤسسات الكبرى.",
    author: "دانيال لي",
    title: "مهندس برمجيات / مستشار تقني",
  },
  "Antony Ciccone": {
    quote:
      "قيادته التقنية كانت استثنائية. يعتمد باستمرار على المعمارية الحديثة وأفضل الممارسات لبناء حلول قابلة للتوسّع وعالية الأداء. أسلوبه على GitHub من الطراز الأول — طلبات دمج نظيفة، وتوثيق واضح، وتعاون مدروس يرفع مستوى الفريق كله. مزيج نادر من الخبرة التقنية المتقدمة والتفكير الاستراتيجي. أوصي به بشدة.",
    author: "أنتوني تشيكوني",
    title: "خبير أتمتة التقنية · Turtle Enterprises LLC",
  },
};

export const CERT_AR: Record<string, string> = {
  "Web3 / Blockchain Project Manager": "مدير مشاريع ويب 3 / بلوك تشين",
  "Web5 Fundamentals — Data Ownership": "أساسيات Web5 — ملكية البيانات",
  "Postgraduate Diploma: Project Management": "دبلوم دراسات عليا: إدارة المشاريع",
  "Introduction to Ethical Hacking": "مقدمة في الاختراق الأخلاقي",
  "Diploma in Blockchain Technology": "دبلومة تقنية البلوك تشين",
  "Types of Cyber Security": "أنواع الأمن السيبراني",
  "Beginner's Guide to Cyber Security": "دليل المبتدئين للأمن السيبراني",
  "Linux From Zero To Hero": "لينكس من الصفر إلى الاحتراف",
  "Blockchain Council": "مجلس البلوك تشين",
  "Artificial Intelligence for Beginners": "الذكاء الاصطناعي للمبتدئين",
  "Strategic Planning": "التخطيط الاستراتيجي",
  "Effective Leadership": "القيادة الفعّالة",
  "IT for Business Success": "تقنية المعلومات لنجاح الأعمال",
  "Introduction to Big Data Science": "مقدمة في علم البيانات الضخمة",
  "AI and Its Future Applications": "الذكاء الاصطناعي وتطبيقاته المستقبلية",
  "Awareness in Cyber Security": "التوعية بالأمن السيبراني",
  "Certified Entrepreneurship Skills": "مهارات ريادة الأعمال المعتمدة",
  "Social Entrepreneurship": "ريادة الأعمال الاجتماعية",
};

export const ISSUER_AR: Record<string, string> = {
  Udemy: "يوديمي",
  Alison: "أليسون",
  "Great Learning": "جريت ليرننج",
  M3aarf: "معارف",
  "HP LIFE": "HP LIFE",
  Edlal: "إدلال",
  TeraCourses: "تيرا كورسيز",
};
