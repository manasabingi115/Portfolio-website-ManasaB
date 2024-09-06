import fbimg from "./Images/facebook post model.png";
import warehouseimg from "./Images/Warehouses.png";
import recipesimg from "./Images/Food-recipe-app.png";
import shoppingimg from "./Images/React-shopping-cart.png";
import currencyimg from "./Images/Currency-converter.png";
import todoimg from "./Images/Todo-app.png";
import clockimg from "./Images/Clock.png";
import dictionaryimg from "./Images/dictionary-app.png";
import hospitalRunimg from "./Images/hospital run.png";
import portfolio from "./Images/portfolio.png";

const projectsData = [
  {
    image: portfolio,
    projectName: "My Portfolio",
    description: "This is my portfolio website.",
    technologiesUsed: [
      "ReactJs",
      "HTML",
      "CSS",
      "ContextAPI",
      "Fluent UI React v9",
      "EmailJs",
    ],
    liveAt: "https://hospital-run.vercel.app/",
    githubRepo: "https://github.com/manasabingi115/Hospital-Run",
    filterBy: ["latest", "popular"],
  },
  {
    image: hospitalRunimg,
    projectName: "Hospital Run(Redux)",
    description:
      "This is an open-source electronic medical record (EMR) system designed to simplify patient management and improve healthcare delivery. It's built with modern web technologies, providing a user-friendly interface for healthcare professionals.",
    technologiesUsed: [
      "ReactJs",
      "HTML",
      "CSS",
      "Redux",
      "Router",
      "Bootstrap",
    ],
    liveAt: "https://hospital-run.vercel.app/",
    githubRepo: "https://github.com/manasabingi115/Hospital-Run",
    filterBy: ["latest", "popular"],
  },
  {
    image: shoppingimg,
    projectName: "Food Delivery App",
    description:
      "This App allows users to add items to a cart, with items categorized by type such as vegetables, fruits, and nuts.",
    technologiesUsed: ["ReactJs", "HTML", "CSS", "Api"],
    liveAt: "https://03s3u.csb.app/",
    githubRepo: "https://github.com/manasabingi115/React-Shopping-Cart",
    filterBy: ["popular"],
  },
  {
    image: warehouseimg,
    projectName: "Warehouse Management App(Redux)",
    description:
      "This project uses Redux to manage state. It allows users to search for warehouses by name and filter them by cities, clusters, and space availability. Users can also edit warehouse details by clicking on the warehouse name.",
    technologiesUsed: ["ReactJs", "Redux", "HTML", "CSS", "Api"],
    liveAt: "https://06gfhm.csb.app/",
    githubRepo: "https://github.com/manasabingi115/WoreHouses-Redux-project",
    filterBy: [],
  },
  {
    image: fbimg,
    projectName: "Facebook Post Model",
    description:
      "This app allows users to post text and GIFs. It uses the Giphy API to fetch GIFs and includes functionality to change the background color. The app is responsive and uses localStorage to persist data even after a page refresh.",
    technologiesUsed: ["ReactJs", "HTML", "CSS", "Giphy Api"],
    liveAt: "https://facebook-post-model.vercel.app/",
    githubRepo: "https://github.com/manasabingi115/Facebook-Post-model-",
    filterBy: [],
  },
  {
    image: recipesimg,
    projectName: "Food Recipe App",
    description:
      "In a food recipe app, we will retrieve the data of recipes based on our search queries.",
    technologiesUsed: ["ReactJs", "HTML", "CSS", "Api"],
    liveAt: "https://yvltb.csb.app/",
    githubRepo: "https://github.com/manasabingi115/Food-Recipe-App",
    filterBy: [],
  },
  {
    image: todoimg,
    projectName: "Todo application based on REST API",
    description:
      "This Todo List app helps manage day-to-day tasks, allowing users to add, delete, and update tasks. It is built with HTML, CSS, and JavaScript and uses a third-party REST API as a backend service to fetch data. The app ensures efficient task management and seamless data handling through the REST API integration.",
    technologiesUsed: ["JavaScript", "HTML", "CSS", "Api"],
    liveAt: "https://web-platform-fhwhid.stackblitz.io",
    githubRepo: "https://github.com/manasabingi115/Todo-REST-application",
    filterBy: [],
  },
  {
    image: currencyimg,
    projectName: "Currency Converter",
    description:
      "This Currency Converter app allows users to convert currency from one country to another.",
    technologiesUsed: ["JavaScript", "HTML", "CSS"],
    liveAt: "https://lt1b3.csb.app/",
    githubRepo: "https://github.com/manasabingi115/currency-converter",
    filterBy: [],
  },
  {
    image: dictionaryimg,
    projectName: "Dictionary App",
    description:
      "This Dictionary app allows users to find word meanings, pronunciation, example sentences, and the origin of words.",
    technologiesUsed: ["JavaScript", "HTML", "CSS"],
    liveAt: "https://5ezg5.csb.app/",
    githubRepo: "https://github.com/manasabingi115/dictionary-app",
    filterBy: [],
  },
  {
    image: clockimg,
    projectName: "Analog Clock",
    description: "This is a clock designed using HTML and CSS.",
    technologiesUsed: ["HTML", "CSS"],
    liveAt: "https://1gs6i.csb.app/",
    githubRepo: "https://github.com/manasabingi115/Clock",
    filterBy: [],
  },
];

export default projectsData;
