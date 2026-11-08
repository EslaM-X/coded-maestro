import atlasImage from "@/assets/projects/atlas-shelf-inspection.jpg.asset.json";
import robopayImage from "@/assets/projects/robopay-machine-economy.jpg.asset.json";
import steinheimImage from "@/assets/projects/steinheim-storefront.jpg.asset.json";
import { PROJECTS, type Project } from "@/lib/profile-data";

type Story = {
  problem: { en: string; ar: string };
  role: { en: string; ar: string };
  solution: { en: string; ar: string };
  outcome: { en: string; ar: string };
  image?: { src: string; alt: { en: string; ar: string }; caption: { en: string; ar: string } };
  demo?: { label: { en: string; ar: string }; href: string };
};

const stories: Record<string, Story> = {
  "ProofX v0.4": {
    problem: {
      en: "Execution claims need portable evidence that a verifier can check consistently across languages and environments.",
      ar: "تحتاج ادعاءات التنفيذ إلى أدلة محمولة يستطيع التحقق منها باتساق عبر لغات وبيئات مختلفة.",
    },
    role: {
      en: "Protocol design and implementation, including the cross-language conformance work documented in the repository.",
      ar: "تصميم البروتوكول وتنفيذه، بما يشمل اختبارات التوافق بين اللغات الموثقة في المستودع.",
    },
    solution: {
      en: "A frozen execution-proof flow: claim → evidence → proof → verification, with Go, WASM and Rust tooling.",
      ar: "مسار إثبات تنفيذ مُجمّد: مطالبة ← دليل ← إثبات ← تحقق، مع أدوات Go وWASM وRust.",
    },
    outcome: {
      en: "The published record reports 102 cross-language conformance cases and 14 adversarial scenarios; the implementation is available in the public repository.",
      ar: "يسجل المشروع 102 حالة توافق بين اللغات و14 سيناريو عدائيًا؛ والتنفيذ متاح في المستودع العام.",
    },
    demo: { label: { en: "Open live demo", ar: "افتح العرض المباشر" }, href: "https://proofx.dev" },
  },
  "PiProof v1.0": {
    problem: {
      en: "Proofs shared across applications can be hard to verify without a portable format and a clear way to resolve disputes.",
      ar: "قد يصعب التحقق من الأدلة المتبادلة بين التطبيقات دون صيغة محمولة وآلية واضحة لحسم النزاعات.",
    },
    role: {
      en: "Designed and implemented the PEP/1 evidence workflow and a portable verifier, with the public repository as the implementation record.",
      ar: "صممت ونفذت مسار الأدلة PEP/1 ومدققًا محمولًا؛ والمستودع العام هو سجل التنفيذ.",
    },
    solution: {
      en: "Proof passports, cross-application evidence and an explicit claim → counter-claim → evidence → resolution flow, implemented without runtime dependencies.",
      ar: "جوازات أدلة وإثباتات بين التطبيقات ومسار واضح للمطالبة ← الرد ← الدليل ← الحسم، دون تبعيات وقت التشغيل.",
    },
    outcome: {
      en: "The published implementation includes a single-file verifier under 500 lines and runs in browsers, Node, Deno and Bun.",
      ar: "يتضمن التنفيذ المنشور مدققًا من ملف واحد يقل عن 500 سطر، ويعمل في المتصفحات وNode وDeno وBun.",
    },
  },
  "Atlas Shelf Inspection": {
    problem: {
      en: "A physical robot should only perform a paid inspection after payment is authorized, with the work validated across more than one simulator.",
      ar: "ينبغي ألا ينفذ الروبوت فحصًا مدفوعًا إلا بعد اعتماد الدفع، مع التحقق من الأداء عبر أكثر من محاكي.",
    },
    role: {
      en: "Built the Atlas Tier-1 inspection profile and connected the robotics workflow to the RoboPay payment-gated flow.",
      ar: "أنشأت ملف فحص Atlas Tier-1 وربطت مسار الروبوت بتدفق RoboPay المحكوم بالدفع.",
    },
    solution: {
      en: "Shelf-inspection behavior tested in MuJoCo, PyBullet and Webots, with x402 payment gating and on-chain settlement evidence.",
      ar: "سلوك فحص رفوف مختبر عبر MuJoCo وPyBullet وWebots، مع بوابة دفع x402 وأدلة تسوية على السلسلة.",
    },
    outcome: {
      en: "The repository records three physics engines, three settlement transactions and 13 evidence artifacts for the profile.",
      ar: "يسجل المستودع ثلاثة محركات فيزيائية وثلاث معاملات تسوية و13 أثرًا إثباتيًا لهذا الملف.",
    },
    image: {
      src: atlasImage.url,
      alt: { en: "Atlas shelf-inspection simulation evidence", ar: "لقطة إثبات محاكاة فحص الرفوف بواسطة Atlas" },
      caption: { en: "A frame from the published Atlas inspection simulation.", ar: "لقطة من محاكاة فحص Atlas المنشورة." },
    },
  },
  "Steinheim AI Launchpad": {
    problem: {
      en: "Daily brand content needs to scale without letting automated writers invent facts or publish without review.",
      ar: "يحتاج محتوى العلامة التجارية اليومي إلى التوسع دون أن يختلق الذكاء الاصطناعي حقائق أو ينشر دون مراجعة.",
    },
    role: {
      en: "Designed the content workflow around a verified knowledge base, specialized AI stages and a human publishing gate.",
      ar: "صممت مسار المحتوى حول قاعدة معرفة موثقة ومراحل ذكاء اصطناعي متخصصة وبوابة نشر بشرية.",
    },
    solution: {
      en: "A planner, writer, illustrator and quality-check flow that traces claims to known facts and waits for human approval.",
      ar: "مسار للمخطط والكاتب والمصمم ومراجعة الجودة يتتبع الادعاءات إلى الحقائق وينتظر موافقة بشرية.",
    },
    outcome: {
      en: "The implementation keeps the human approval step before publishing; the public brand experience is available to explore.",
      ar: "يحافظ التنفيذ على خطوة الموافقة البشرية قبل النشر؛ ويمكن استكشاف تجربة العلامة التجارية العامة.",
    },
    image: {
      src: steinheimImage.url,
      alt: { en: "Steinheim public storefront", ar: "واجهة متجر Steinheim العامة" },
      caption: { en: "The live storefront connected to the operations work.", ar: "المتجر المباشر المرتبط بأعمال التشغيل." },
    },
    demo: { label: { en: "Explore live storefront", ar: "استكشف المتجر المباشر" }, href: "https://steinheim-eg.com" },
  },
  "Steinheim ERP & Invoicing": {
    problem: {
      en: "A growing operation needs one place for invoices, inventory, customer records, reporting and daily sales performance.",
      ar: "تحتاج العمليات المتنامية إلى مكان واحد للفواتير والمخزون وبيانات العملاء والتقارير ومتابعة المبيعات اليومية.",
    },
    role: {
      en: "Delivered the internal operations platform and contributed 20 merged pull requests to the public product experience.",
      ar: "نفذت منصة العمليات الداخلية وأسهمت بعشرين طلب دمج في تجربة المنتج العامة.",
    },
    solution: {
      en: "An integrated workflow for invoices, stock checks, customer records and reporting, alongside a bilingual, installable public storefront.",
      ar: "مسار متكامل للفواتير ومراجعة المخزون وبيانات العملاء والتقارير، إلى جانب متجر عام ثنائي اللغة قابل للتثبيت.",
    },
    outcome: {
      en: "The work is represented by 20 merged pull requests and a live storefront; no internal ERP screenshot is claimed here.",
      ar: "يمثل العمل عشرون طلب دمج منجزًا ومتجر مباشر؛ ولا ندعي وجود لقطة شاشة لنظام ERP الداخلي هنا.",
    },
    image: {
      src: steinheimImage.url,
      alt: { en: "Steinheim public storefront", ar: "واجهة متجر Steinheim العامة" },
      caption: { en: "The public product storefront; internal ERP screens are not shown.", ar: "واجهة المنتج العامة؛ لا تعرض الصورة شاشات نظام ERP الداخلي." },
    },
    demo: { label: { en: "Explore live storefront", ar: "استكشف المتجر المباشر" }, href: "https://steinheim-eg.com" },
  },
  "RoboPay Spot Tier-1": {
    problem: {
      en: "Robotic skills need a payment boundary and consistent validation across simulated physics environments before they can be offered as machine services.",
      ar: "تحتاج مهارات الروبوت إلى بوابة دفع وتحقق متسق عبر بيئات فيزيائية محاكاة قبل تقديمها كخدمات للآلات.",
    },
    role: {
      en: "Built a Spot Tier-1 profile and measured its task behavior across MuJoCo and PyBullet.",
      ar: "أنشأت ملف Spot Tier-1 وقست سلوك المهام عبر MuJoCo وPyBullet.",
    },
    solution: {
      en: "A policy → planner → controller pipeline with x402 payment gating and a no-settlement-on-failure rule.",
      ar: "مسار سياسة ← مخطط ← متحكم، مع بوابة دفع x402 وقاعدة تمنع التسوية عند الفشل.",
    },
    outcome: {
      en: "The portfolio record reports seven paid embodied skills and 100% success with 0% collision at 0.26 m maximum sim-to-sim deviation.",
      ar: "يسجل ملف الأعمال سبع مهارات مُجسدة مدفوعة ونجاحًا بنسبة 100% دون تصادم، مع أقصى انحراف 0.26 متر بين المحاكيات.",
    },
    image: {
      src: robopayImage.url,
      alt: { en: "RoboPay machine-economy payment flow", ar: "مسار الدفع واقتصاد الآلات في RoboPay" },
      caption: { en: "RoboPay's public action-flow diagram, used as system context.", ar: "مخطط مسار العمل العام من RoboPay، لشرح سياق النظام." },
    },
  },
  "ai-agent-automation-platform": {
    problem: {
      en: "Autonomous workflows need clear permissions, human approval, safe retries and a complete record of every action.",
      ar: "تحتاج مسارات العمل المستقلة إلى صلاحيات واضحة وموافقة بشرية ومحاولات آمنة وسجل كامل لكل إجراء.",
    },
    role: {
      en: "Designed and implemented the orchestration flow, offline evaluation and audit behavior documented in the repository.",
      ar: "صممت ونفذت مسار التنسيق والتقييم أوفلاين وسجل التدقيق الموثق في المستودع.",
    },
    solution: {
      en: "Specialized agents, deny-by-default tool permissions, a human approval gate, idempotent runs, checkpoints and an audit trail.",
      ar: "وكلاء متخصصون وصلاحيات أدوات مرفوضة افتراضيًا وبوابة موافقة بشرية وتشغيل متماثل ونقاط حفظ وسجل تدقيق.",
    },
    outcome: {
      en: "The published project reports 22 offline tests and a v0.2.0 release.",
      ar: "يسجل المشروع المنشور 22 اختبارًا أوفلاين وإصدارًا v0.2.0.",
    },
  },
  "RoboPay Go2 Tier-1": {
    problem: {
      en: "Paid robot skills need repeatable obstacle-navigation checks and payment safety across simulator backends.",
      ar: "تحتاج مهارات الروبوت المدفوعة إلى اختبارات متكررة للملاحة بين العوائق وأمان الدفع عبر محاكيات مختلفة.",
    },
    role: {
      en: "Developed the Unitree Go2 Tier-1 simulator profile and submitted the public contribution to Fabric RoboPay.",
      ar: "طورت ملف محاكاة Unitree Go2 Tier-1 وقدمت المساهمة العامة إلى Fabric RoboPay.",
    },
    solution: {
      en: "Obstacle navigation re-validated across MuJoCo and PyBullet, connected to an x402 paid-per-skill concept.",
      ar: "ملاحة بين العوائق أُعيد التحقق منها عبر MuJoCo وPyBullet، ضمن مفهوم الدفع لكل مهارة باستخدام x402.",
    },
    outcome: {
      en: "The contribution is publicly reviewable as pull request #89 in Fabric RoboPay.",
      ar: "يمكن مراجعة المساهمة علنًا في طلب الدمج رقم 89 بمستودع Fabric RoboPay.",
    },
    image: {
      src: robopayImage.url,
      alt: { en: "RoboPay machine-economy payment flow", ar: "مسار الدفع واقتصاد الآلات في RoboPay" },
      caption: { en: "RoboPay's public action-flow diagram, used as system context.", ar: "مخطط مسار العمل العام من RoboPay، لشرح سياق النظام." },
    },
  },
  "production-systems-lab": {
    problem: {
      en: "Financial and distributed systems must remain correct under retries, replay, traffic spikes and attempts to alter audit history.",
      ar: "يجب أن تحافظ الأنظمة المالية والموزعة على صحتها مع إعادة المحاولات والهجمات المعادة وذروة المرور ومحاولات تغيير سجل التدقيق.",
    },
    role: {
      en: "Designed and implemented reusable Go building blocks documented with race tests and benchmarks.",
      ar: "صممت ونفذت لبنات Go قابلة لإعادة الاستخدام وموثقة باختبارات التنافسية وقياس الأداء.",
    },
    solution: {
      en: "Idempotency, replay protection, circuit breakers, retries, HMAC authentication, rate limiting and hash-chained audit.",
      ar: "التماثل ومنع إعادة التشغيل وقواطع الدائرة وإعادة المحاولة ومصادقة HMAC وتحديد المعدل وسجل تدقيق متسلسل بالتجزئة.",
    },
    outcome: {
      en: "The repository contains race-tested and benchmarked components, plus a tamper-evident audit chain.",
      ar: "يحتوي المستودع على مكونات مجتازة لاختبارات التنافسية ومقيسة الأداء، مع سلسلة تدقيق كاشفة للتلاعب.",
    },
  },
};

export function projectSlug(name: string) {
  return name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectCaseStudy(slug: string) {
  const project = PROJECTS.find((item) => projectSlug(item.name) === slug);
  if (!project) return null;

  const story = stories[project.name];
  return {
    project: project as Project,
    story: story ?? {
      problem: { en: project.desc, ar: project.desc },
      role: {
        en: "Technical design and implementation, represented by the linked public work.",
        ar: "التصميم التقني والتنفيذ، وتمثله الأعمال العامة المرتبطة أدناه.",
      },
      solution: {
        en: project.details?.en.join(" ") ?? `Delivered with ${project.stack.join(", ")}.`,
        ar: project.details?.ar.join(" ") ?? `نُفذ باستخدام ${project.stack.join("، ")}.`,
      },
      outcome: {
        en: project.details?.en.join(" ") ?? "The public repository is the available implementation evidence; no additional metric is claimed here.",
        ar: project.details?.ar.join(" ") ?? "المستودع العام هو دليل التنفيذ المتاح؛ ولا نضيف هنا أي أرقام غير موثقة.",
      },
    } satisfies Story,
  };
}