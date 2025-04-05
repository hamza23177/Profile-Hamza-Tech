import {
  java,
  problemsolver,
  self2,
  herobg,
  l3,
  l2,
  l4,
  l6,
  l7,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hoob,
  sumzz,
  news,
  jobj,
  modAi,
  chat,
  collaborator,
  evogym,
  fileshare,
  expt,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'من نحن',
  },
  {
    id: 'project',
    title: 'استكشف مشاريعنا',
  },
  {
    id: 'contact',
    title: 'تواصل معنا',
  },
  {
    id: 'Experience',
    title: 'خبراتنا المتنوعة',
  },
];



const selfpro = {
  image1: self2,
  imagebg: herobg,
};

const services = [
  {
    title: 'تصميم وتطوير مواقع الويب',
    icon: web,
  },
  {
    title: 'تصميم تطبيقات الموبايل',
    icon: mobile,
  },
  {
    title: 'التسويق الرقمي للمحلات التجارية',
    icon: web,
  },
  {
    title: 'تصميم الإعلانات والهويات البصرية',
    icon: mobile,
  },
];


const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'java',
    icon: java,
  },
];

const experiences = [
  {
    title: "مؤسس منصة حمزة التقنية",
    company_name: "منصة حمزة التقنية",
    icon: l7, // شعار منصتك
    iconBg: "#1d1836",
    date: "منذ 2021 حتى الآن",
    points: [
      "أنشأت منصة حمزة التقنية لتقديم حلول برمجية متكاملة تشمل تصميم المواقع، تطبيقات الجوال، وأنظمة ذكية مخصصة.",
      "طورت مواقع وتطبيقات احترافية لأصحاب المشاريع والمتاجر الرقمية باستخدام أحدث التقنيات.",
      "صممت لوحات تحكم مرنة وسهلة الاستخدام لإدارة المحتوى والمتابعة اللحظية.",
      "ساهمت في بناء واجهات جذابة وتجربة مستخدم سلسة تعزز من ولاء العملاء.",
    ],
  },
  {
    title: "مزود حلول ويب وتطبيقات موبايل",
    company_name: "منصة حمزة التقنية",
    icon: l7,
    iconBg: "#232631",
    date: "منذ 2022 حتى الآن",
    points: [
      "برمجة مواقع إلكترونية سريعة الاستجابة باستخدام React, Tailwind, Laravel, و Flutter.",
      "دمج قواعد البيانات وخدمات API لتقديم حلول متكاملة وسهلة الإدارة.",
      "تطوير تطبيقات موبايل عملية وعصرية تلائم مختلف الأنشطة التجارية.",
    ],
  },
  {
    title: "خبير تسويق رقمي وإعلانات",
    company_name: "منصة حمزة التقنية",
    icon: l7,
    iconBg: "#383E56",
    date: "منذ 2021 حتى 2024",
    points: [
      "أدرت حملات تسويقية فعالة عبر فيسبوك، إنستغرام، وجوجل للمحلات التجارية.",
      "صممت هويات بصرية احترافية وأساليب دعائية تزيد من جذب العملاء.",
      "حللت البيانات التسويقية لاستخلاص نتائج وتحسين الأداء الإعلاني.",
    ],
  },
  {
    title: "تدريب عملي - CodeClause",
    company_name: "CodeClause",
    icon: l7,
    iconBg: "#ffffff",
    date: "فبراير 2024 - مارس 2024",
    points: [
      "أنجزت 3 مشاريع برمجية، منها مشغل موسيقى ومعرض صور، ومشروع تشاركي لمنصة مشاركة ملفات.",
      "عملت ضمن فريق باستخدام منهجيات فعّالة لإدارة المشاريع والتعاون التقني.",
    ],
  },
  {
    title: "تدريب تطوير برمجيات - CodeWay Solutions",
    company_name: "CodeWay Solutions",
    icon: l6,
    iconBg: "#ffffff",
    date: "يناير 2024 - فبراير 2024",
    points: [
      "شاركت في تطوير مشاريع حقيقية ضمن فريق تقني محترف.",
      "تعلمت تقنيات وأساليب جديدة في بناء الواجهات والخلفيات البرمجية.",
      "قمت بتحسين الأداء البرمجي وجودة الكود.",
    ],
  },
  {
    title: "معسكر تدريبي لتطوير الويب الكامل",
    company_name: "Udemy",
    icon: l2,
    iconBg: "#383E56",
    date: "مارس 2020 - أبريل 2021",
    points: [
      "تعلمت بناء واجهات متجاوبة باستخدام HTML, CSS, JavaScript و Bootstrap.",
      "أنجزت مشروع متكامل باستخدام Node.js, Express, MongoDB.",
      "اكتسبت مهارات بناء تطبيقات متكاملة من الواجهة إلى قاعدة البيانات.",
    ],
  },
  {
    title: "تصميم مواقع متجاوبة",
    company_name: "FreeCodeCamp",
    icon: l3,
    iconBg: "#E6DEDD",
    date: "يناير 2021 - فبراير 2022",
    points: [
      "أتقنت تصميم واجهات متجاوبة باستخدام Flexbox, Grid, Media Queries.",
      "طورت 4 مشاريع عملية باستخدام أحدث معايير التصميم.",
    ],
  },
  {
    title: "خوارزميات جافاسكربت وهياكل البيانات",
    company_name: "FreeCodeCamp",
    icon: l3,
    iconBg: "#383E56",
    date: "سبتمبر 2023",
    points: [
      "تعلمت جافاسكربت من الأساسيات إلى المفاهيم المتقدمة مثل async والبرمجة الوظيفية.",
      "أنجزت 4 مشاريع برمجية تركز على المنطق وهياكل البيانات.",
    ],
  },
  {
    title: "رحلة تطوير واجهات React",
    company_name: "React.dev",
    icon: l4,
    iconBg: "#E6DEDD",
    date: "يناير 2023 - حتى الآن",
    points: [
      "متخصص في بناء واجهات باستخدام React بمفاهيم الـ hooks و context و routing.",
      "أبدعت في تصميم واجهات تفاعلية وسريعة باستخدام بنية موديولية قابلة لإعادة الاستخدام.",
      "اهتممت بأداء الواجهة وتجربة المستخدم من خلال تنظيم الكود وتطبيق أفضل الممارسات.",
    ],
  },
];

const projects = [
  {
    name: 'دليل خدمات مدينة دوما',
    description: 'يُعد تطبيق "دوما" دليلك الشامل لجميع الخدمات والعناوين في مدينة دوما، حيث يوفر لك معلومات دقيقة ومحدثة حول المشافي 🏥، المطاعم 🍴، الأطباء، محطات المحروقات 🚉، خدمات الاتصال، الإطفائية، الإسعاف، المتاجر، الأسواق، خدمات التوصيل والتكسي، صالات الأفراح، خدمات التصوير، الفرق الإنشادية، والمهن الحرفية واليدوية  .',

    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'SQL',
        color: 'green-text-gradient',
      },
      {
        name: 'Material',
        color: 'pink-text-gradient',
      },
      {
        name: 'Laravel',
        color: 'green-text-gradient',
      },
    ],
    image: collaborator,
    source_code_link: 'https://t.me/DalelDouma/13',
  },

  {
    name: 'شام شوب',
    description: 'شام شوب هو منصة تجارة إلكترونية متخصصة ببيع المنتجات الإلكترونية، الألبسة، والأحذية، ويخدم السوق السورية بشكل خاص. يوفّر تجربة تسوّق سهلة وآمنة مع واجهة أنيقة ومرتبة تُمكّن المستخدمين من استعراض وشراء المنتجات بكل سهولة، مع خيارات دفع وتوصيل تناسب الجميع.',

    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'SQL',
        color: 'pink-text-gradient',
      },
    ],
    image: expt,
    source_code_link: 'https://syria-shop-pro.vercel.app/',
  },
  {
    name: 'نظام المحاسبة الباندا',
    description: 'نظام المحاسبة الباندا هو نظام محاسبة متكامل مصمم لإدارة المستودعات ونقاط البيع بكفاءة عالية، مثل محلات السوبر ماركت والمتاجر التجارية المختلفة. يتميز بواجهة سهلة الاستخدام، ويدعم تتبع المبيعات والمشتريات والمخزون وإصدار التقارير المالية بشكل دقيق وسلس، مما يجعله الحل الأمثل لأصحاب الأعمال الباحثين عن تنظيم شامل ومحترف.',

    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'Laravel',
        color: 'pink-text-gradient',
      },
    ],
    image: fileshare,
    source_code_link:
      '#',
  },
  {
    name: 'Hey',
    description: 'Hey هو تطبيق دردشة تفاعلي يُتيح للمستخدمين التواصل الفوري فيما بينهم بطريقة سهلة وسلسة. تم تطويره باستخدام React وExpress وMongoDB وSocket.IO، ويوفر تجربة دردشة مرنة وسريعة تُمكِّن المستخدمين من البقاء على اتصال دائم ومشاركة المحادثات في الوقت الحقيقي.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'socket-io',
        color: 'white-text-gradient',
      },
    ],
    image: chat,
    source_code_link: 'https://hey-0b6j.onrender.com/',
  },
    {
    name: 'Driver XP MOTOR',
    description: 'Driver XP MOTOR هو منصة إلكترونية متميزة تُقدّم لك أحدث موديلات الدراجات النارية وأسعارها التنافسية، بالإضافة إلى مجموعة واسعة من الاكسسوارات التي تضيف لمسة من التميز. سواء كنت من عشاق المغامرة أو تسعى للحصول على تجربة قيادة استثنائية، يوفر لك الموقع كل ما تحتاجه لاختيار الدراجة المثالية واكسسواراتها بأفضل الأسعار وأعلى الجودة.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'toast',
        color: 'pink-text-gradient',
      },
      {
        name: 'axios',
        color: 'red-text-gradient',
      },
    ],
    image: jobj,
    source_code_link: 'https://hamza23177.github.io/my-website/',
  },
  // {
  //   name: 'Mod-AI',
  //   description:
  //     'This landing page is built with React, Tailwind CSS, and Vite, providing a modern and efficient development environment for showcasing AI-related content.  ',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'Ai-page ',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: modAi,
  //   source_code_link: 'https://mod-ai-six.vercel.app/',
  // },
  // {
  //   name: 'EvoGym',
  //   description:
  //     'Fitness Site Landing Page project! This landing page is designed for fitness enthusiasts and is built with React, Tailwind CSS, Vite, TypeScript, Framer Motion etc.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'framer-motion',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'typescript',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: evogym,
  //   source_code_link: 'https://evo-fitness.netlify.app/',
  // },

  {
    name: 'Article summarizer',
    description: 'موقع "ملخص المقالات" هو أداة مبتكرة تساعدك في تلخيص المقالات الطويلة وتحويلها إلى ملخصات قصيرة وسهلة الفهم. يعتمد الموقع على قوة نموذج الذكاء الاصطناعي GPT لتوليد ملخصات دقيقة ومترابطة، مما يوفر لك الوقت والجهد في قراءة المقالات الطويلة. اجعل تجربة القراءة أكثر سهولة وفعالية مع هذه الأداة المتقدمة.',

    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'GPT-4 model',
        color: 'pink-text-gradient',
      },
    ],
    image: sumzz,
    source_code_link: 'https://ai-article-summarizer-livid.vercel.app/',
  },
  // {
  //   name: 'News App',
  //   description:
  //     'This is a web application that provides news articles from various categories sourced from an API. The app is built using React and Bootstrap, It also have multiple categories to filter from . ',
  //   tags: [
  //     {
  //       name: 'React',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'new -API',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: news,
  //   source_code_link: 'https://github.com/Anubhav-dev-web/newsapp',
  // },
];

export { services, technologies, experiences, projects, selfpro };
