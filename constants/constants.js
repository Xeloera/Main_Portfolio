import { DiPython, DiReact, DiNodejs, DiHtml5, DiCss3, DiJavascript1, DiAws, DiDocker} from 'react-icons/di';


export const projects = [
  {
    title: 'Chess Bot',
    description: "Using React, NextJs, Node, and a Stockfish AI; I Chess App for you!",
      image: '/images/1.png',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'E-Commerce',
    description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: '/images/2.png',
    tags: ['React', 'JavaScript'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'WebRTC App',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
      image: '/images/3.jpg',
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/4.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];



export const Technologies = [
  {
    name: "Python",
    description: "ML/DL, API, Backend",
    modLibs: "TensorFlow, PyTorch, OpenCV, OpenAI, Numpy, Pandas, Scikit-Learn, Statsmodels",
    icon: DiPython
  },
  {
    name: "React",
    description: "Frontend",
    modLibs: "Chart.js, Redux, Styled-components",
    icon: DiReact
  },
  {
    name: "Node.js",
    description: "API, Backend",
    modLibs: "Express, MongoDB, Mongoose, Socket.io",
    icon: DiNodejs
  },
  {
    name: "HTML",
    description: "Frontend",
    modLibs: "",
    icon: DiHtml5
  },
  {
    name: "CSS",
    description: "Frontend",
    modLibs: "",
    icon: DiCss3
  },
  {
    name: "JavaScript",
    description: "Frontend",
    modLibs: "",
    icon: DiJavascript1
  },
  {
    "name": "C++",
    "description": "Programming Language",
    "modLibs": "Standard C++ Library",
    "icon": "cpp"
  },
  {
    "name": "C",
    "description": "Programming Language",
    "modLibs": "Standard C Library",
    "icon": "c"
  },
  {
    name: "AWS",
    description: "Cloud Services",
    modLibs: "EC2, S3, Lambda, RDS, DynamoDB",
    icon: DiAws
  },
  {
    name: "Docker",
    description: "Containerization Platform",
    modLibs: "",
    icon: DiDocker
  },
  // Add more technologies as needed
];
