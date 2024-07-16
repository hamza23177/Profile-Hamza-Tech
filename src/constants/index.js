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
    title: 'About',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'Experience',
    title: 'Experience',
  },
];

const selfpro = {
  image1: self2,
  imagebg: herobg,
};

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UX/UI Designer',
    icon: mobile,
  },
  {
    title: 'Problem Solver',
    icon: problemsolver,
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
    title: 'Intern At CodeClause',
    company_name: 'CodeClause',
    icon: l7,
    iconBg: '#ffffff',
    date: 'February 2024 - March 2024',
    points: [
      'I worked on 2 three individual projects and 1 with my team member ',
      'Projects included a music player , an image gallery and the last one was a collaborative project it was a  file sharing platform',
      ,
    ],
  },
  {
    title: 'Intern At CodeWay Solutions',
    company_name: 'CodeWay Solutions',
    icon: l6,
    iconBg: '#ffffff',
    date: 'January 2024 - February 2024',
    points: [
      'CodeWay solutions provided me the oppurtunity to show case my skills',
      "I'm working on varios projects at codeWays ",
      'Learning new approaches and new techniques ',
    ],
  },
  {
    title: 'Web development Bootcamp',
    company_name: 'Udemy',
    icon: l2,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Learned Responsive Web Development ',
      'Learned fullStack developnent ',
      'The Bootcamp included , advanced Javascripts,CSS and HTML for frontend end including Bootstrap  ',
      'I also acquired knowledge for backend that included Express.js,MongoDB Node.js and a mega project at the end',
      'Course Instructor colt steel',
    ],
  },
  {
    title: 'Responsive web design',
    company_name: 'FreeCode Camp',
    icon: l3,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Learned a lot of basics to advance responsive  designing ',
      'created four projects at the end of the course',
      'Course taught me a lot of thigs like flex-box, grid ',
    ],
  },
  {
    title: 'Javascript Algorithms and Data Structures',
    company_name: 'FreeCode Camp',
    icon: l3,
    iconBg: '#383E56',
    date: 'Sep 2023 ',
    points: [
      'This cousre taught me basic to advance level of javascript',
      'It ncludes asynchronous javascript to and other cool stuff with javascript',
      'Javascripts is a great language to work with ',
      'made four project by the end of the project ',
    ],
  },
  {
    title: 'React Develpment ',
    company_name: 'React.dev',
    icon: l4,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'React is a a great Library to work an provides fast and modular design',
      'JSX paints the canvas bright, components bloom in modular light.',
      "From simple form to grandest screen, React's magic, a developer's dream.",
      ' React empowers developers to architect performant UIs with modular ease.',
    ],
  },
];

const projects = [
  {
    name: 'Collaborator',
    description:
      'Collaborator is an application that helps us to manage the tasks, track progress of the task and assign task to different team members.',
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
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'toast',
        color: 'green-text-gradient',
      },
    ],
    image: collaborator,
    source_code_link: 'https://collaborators-8cwo.onrender.com/dashboard',
  },
  // {
  //   name: 'Job junction',
  //   description:
  //     'The  Job junction  project is a web-based platform designed to facilitate job posting and job seeking . It is a web-based platform designed for job posting and job seeking .',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'toast',
  //       color: 'pink-text-gradient',
  //     },
  //     {
  //       name: 'axios',
  //       color: 'red-text-gradient',
  //     },
  //   ],
  //   image: jobj,
  //   source_code_link: 'https://job-junction-cfsh.onrender.com/',
  // },
  // {
  //   name: 'Hey-',
  //   description:
  //     'This project is a chat application built using , React, Express, MongoDB, and Socket.IO. It allows users to connect with each other and communicate with each other.',
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
  //       name: 'socket-io',
  //       color: 'white-text-gradient',
  //     },
  //   ],
  //   image: chat,
  //   source_code_link: 'https://hey-0b6j.onrender.com/',
  // },
  {
    name: 'Expense Tracker',
    description:
      'Expense Tracker is a full-stack web application built with GraphQL, React, and MongoDB. It allows users to track their expenses and manage their finances effectively.',
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
        name: 'Graph-QL',
        color: 'pink-text-gradient',
      },
    ],
    image: expt,
    source_code_link: 'https://expense-tracker-z1iv.onrender.com/login',
  },
  {
    name: 'Easy-share',
    description:
      'This web application allows users to securely share files of any type with others. Built with Node.js, Express.js, EJS, Tailwind CSS, and MongoDB, it offers features like password protection for shared links.',
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
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: fileshare,
    source_code_link:
      'https://github.com/Anubhav-dev-web/CodeClauseInternship_File-Sharing-Platform',
  },
  {
    name: 'Mod-AI',
    description:
      'This landing page is built with React, Tailwind CSS, and Vite, providing a modern and efficient development environment for showcasing AI-related content.  ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Ai-page ',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: modAi,
    source_code_link: 'https://mod-ai-six.vercel.app/',
  },
  {
    name: 'EvoGym',
    description:
      'Fitness Site Landing Page project! This landing page is designed for fitness enthusiasts and is built with React, Tailwind CSS, Vite, TypeScript, Framer Motion etc.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: evogym,
    source_code_link: 'https://evo-fitness.netlify.app/',
  },

  {
    name: 'Article summarizer',
    description:
      'This website serves as a tool to summarize lengthy articles into concise and digestible summaries. It leverages the power of GPT AI model to generate accurate and coherent summaries.',
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
