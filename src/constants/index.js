import javascript from "/tech/javascript.png";
import typescript from "/tech/typescript.png";
import css from "/tech/css.png";
import reactjs from "/tech/reactjs.png";
import redux from "/tech/redux.png";
import tailwind from "/tech/tailwind.png";
import nodejs from "/tech/nodejs.png";
import mongodb from "/tech/mongodb.png";
import git from "/tech/git.png";
import figma from "/tech/figma.png";
import docker from "/tech/docker.png";
import c from "/tech/c++.png";
import java from "/tech/java.png";
import py from "/tech/py.png";
import gcp from "/tech/gcp.png";
import azure from "/tech/azure.png";
import springboot from "/tech/springboot.svg";
export {
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  c,
  java,
  py,
  gcp,
  azure,
  springboot
};
const projects = [
  {
    name: "Vaultify",
    description:
      "A cloud storage web app built with Next.js and Appwrite, allowing users to securely upload, manage, and access their files online. It offers a clean, intuitive interface with real-time file handling and user authentication.",
      iconLists: ["/images/exp2.png", "/tech/typescript.png", "/tech/tailwind.png","/next.svg"],
      link: "https://vaultify-topaz.vercel.app/sign-in",
      image: '/images/vaultifyp.png',
     source_code_link: "https://github.com/Manishdevaraj/Vaultify.git",
  },
  {
    name: "Result Wiz",
    description:
      "A result management platform built for my college using React, MongoDB, and Tailwind CSS, enabling students to view their academic results and administrators to efficiently manage and publish them.",
      iconLists: ["/tech/reactjs.png", "/tech/typescript.png", "/tech/tailwind.png","/next.svg"],
      link: "https://skctresultwiz.vercel.app/sign-in",
    image: '/images/skctp.png',
    source_code_link: "https://github.com/Manishdevaraj/RESULT_WIZ_Client.git",
  },
  {
    name: "Live Doc",
    description:
      "A real-time collaborative document editor built with React and Socket.IO, allowing multiple users to edit and sync documents live. It features seamless live updates, multi-user support, and document persistence.",
      iconLists: ["/tech/reactjs.png", "/tech/typescript.png", "/tech/tailwind.png","/next.svg"],
      link: "https://docment-collab.vercel.app/",
    image: '/images/livedocp.png',
    source_code_link: "https://github.com/Manishdevaraj/Live-Doc.git",
  },
  // {
  //   name: "N8N Autoamation",
  //   description:
  //     "An open-source workflow automation tool that allows users to automate tasks and integrate various apps with no code, enabling seamless data flow and process automation. It supports custom workflows and extensive integrations for streamlined operations.",
  //     iconLists: ["/public/images/n8n.png"],
  //     link: "https://n8n.io/",
  //   image: '/public/images/n8np.png',
  //   source_code_link: "https://github.com/Manishdevaraj",
  // },
  {
    name: "VolHub",
    description:
      "VolHub is a volunteer event management platform that connects students with social service opportunities. It allows users to discover, register for, and track volunteer events, making it easy for both organizers and volunteers to manage and participate in community activities.",
      iconLists: ["/tech/reactjs.png","/tech/tailwind.png", "/tech/springboot.svg", "/tech/javascript.png"],
      // link: "https://whatsapp-clone-42627.firebaseapp.com/",
    image: '/volhub.png',
    source_code_link: "https://github.com/Manishdevaraj/Volhub_SDP_Client.git",
  },
  {
    name: "Whatsapp Clone",
    description:
      "A WhatsApp clone built with React and Socket.IO, enabling real-time messaging, user authentication, and message storage for seamless communication. It also supports media sharing, group chats, and peer-to-peer video and audio calls using WebRTC for enhanced user interaction.",
      iconLists: ["/tech/reactjs.png","/tech/tailwind.png", "/tech/nodejs.png", "/tech/javascript.png"],
      link: "https://whatsapp-clone-42627.firebaseapp.com/",
    image: 'images/wbp.png',
    source_code_link: "https://github.com/Manishdevaraj/Whatsapp-Clone.git",
  },

];

export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/tech/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: css,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: javascript,
    width: 65,
    height: 65,
  },
  {
    skill_name: "Java",
    Image: java,
    width: 65,
    height: 65,
  },
  {
    skill_name: "c++",
    Image: c,
    width: 65,
    height: 65,
  },
  {
    skill_name: "Python",
    Image: py,
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: reactjs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: typescript,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.svg",
    width: 70,
    height: 80,
  },
  
  {
    skill_name: "Node js",
    Image: nodejs,
    width: 70,
    height: 80,
  },
  {
    skill_name: "Spring Boot",
    Image: '/tech/springboot.svg',
    width: 70,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/tech/mongodb.svg",
    width: 60,
    height: 40,
  },
  {
    skill_name: "Mysql",
    Image: "/tech/mysql.svg",
    width: 60,
    height: 40,
  },
 
];



export const Other_skill = [
  {
    skill_name: "Git",
    Image: git,
    width: 60,
    height: 60,
  },
  {
    skill_name: "Firebase",
    Image: "/tech/firebase.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "aws",
    Image: "/tech/aws.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "docker",
    Image: "/public/dock.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Azure",
    Image: "/public/tech/azure.png",
    width: 50,
    height: 60,
  },
];












const navLinks = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
   
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    
    {
      review: "Full Stack Development involves creating both the frontend and backend of web applications. It covers everything from designing interactive user interfaces to building secure, scalable server logic and managing databases. This approach ensures smooth, integrated, and complete solutions across the entire technology stack.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/fullstack.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Built responsive, high-performance web applications using React, Next.js, and Vite with modern state management (Hooks, Context API,Redux).",
        "Developed scalable backend services using Node.js and Express, handling REST APIs, middleware, and authentication.",
        "Hands-on experience working with MongoDB and Mongoose for designing schemas, relationships, and performing efficient data queries."  
      ],
    },
    {
      review: "API Integration & Testing involves connecting applications to external or internal services using APIs, ensuring smooth data exchange and functionality. It includes testing APIs with tools like Postman and Thunder Client to verify performance, security, and reliability.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/api.png",
      title: "API Integration & Testing",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Integrated real-time communication using Socket.IO, enabling features like live notifications, real-time messaging, and event-based updates in web and mobile applications.",
        "Implemented secure API authentication using tokens, headers, and role-based access control, ensuring data integrity and protected endpoints.",
        "Created API collections and automated test suites in Postman, organizing endpoints and simulating complete user workflows for faster, repeatable testing"
      ],
    },
    {
      review: "React Native is a popular open-source framework for building fast, cross-platform mobile apps using JavaScript and React. It allows developers to create native-like experiences for both iOS and Android from a single codebase.",
      imgPath: "/images/reactnative2.png",
      logoPath: "/images/reactnativelogo.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Optimized app performance by reducing load times, memory usage, and unnecessary re-renders, applying techniques like lazy loading, memoization, and FlatList optimizations."
      ],
    },
    {
      review: "n8n is an open-source workflow automation tool that connects APIs, apps, and services with custom logic. It lets you automate repetitive tasks, manage data flows, and trigger actions using visual, no-code workflows — or extend them with custom code when needed.",
      imgPath: "/images/n8n.png",
      logoPath: "/images/n8n.png",
      title: "Workflow Automation",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Familiar with no-code/low-code automation using n8n, building workflows to automate tasks like sending emails, processing form data, triggering events, and integrating third-party APIs.",
        "Designed and configured webhooks in n8n to handle real-time data exchange between frontend applications (built with Vite, React) and automated backend workflows.",
        "Integrated n8n workflows with services like Gmail, Webhooks, MongoDB, and REST APIs to automate notifications, form submissions, and user onboarding processes."
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      link: "https://www.instagram.com/m_anish_devaraj/"
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
      link: "https://www.instagram.com/m_anish_devaraj/"
    },
    {
      name: "x",
      imgPath: "/images/x.png",
      link: "https://www.instagram.com/m_anish_devaraj/"

    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      link: "https://www.linkedin.com/in/manishdevaraj"
    },
  ];
  
  export {
    projects,
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };