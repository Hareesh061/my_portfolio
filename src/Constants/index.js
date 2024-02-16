import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import kotlin from "../assets/kotlin.png";
import web from "../assets/web.jpg";
import typescript from "../assets/typescript.png";
import git from "../assets/git.png";
import pro1 from "../assets/web.jpg";
import pro2 from "../assets/web.jpg";
import pro3 from "../assets/web.jpg";



const services =[
    {
    title:"web Developer",
    icon: web,
},
{
    title:"Front-end Developer",
    icon:reactjs,
},

{
    title:"Android Developer",
    icon:kotlin,
},

];

const technologies =[

    {
        name: 'HTML',
        icon: html,
    },

    {
        name: 'CSS',
        icon: css,
    },

    {
        name: 'javascript',
        icon: javascript,
    },


    {
        name: 'mongodb',
        icon: mongodb,
    },


    {
        name: 'git',
        icon: git,
    },
];

const projects =[
    {
        name:"pro1",
        description:
        "this is my first project.",
        tags:[
            {
                name:"typescript",
                color:"blue-text-gradient",
            },

            {
                name:"git",
                color:"green-text-gradient",
            },
            {
                name:"bootstrap",
                color:"pink-text-gradient",
            },
        ],
        image:pro1,
        source_code_link: " ",
        source_deploy_link: "",
    },
    {
        name:"Todo App",
        description:
        "thsi is new one",
        tags:[
            {
                name:"react",
                color:"blue-text-gradient",
            },
            {
                name:"Tailwind",
                color:"green-text-gradient",
            },

            {
                name:"css",
                color:"pink-text-gradient",
            },
        ],
        image:pro2,
        source_code_link: " ",
        source_diploy_link: " ",
    },
    {
        name:"oxibook",
        description:
        "kdh dhid hid sdid",
        tags:[
            {
                name:"react js",
                color:"blue-text-gradient",
            },
            {
                name:"Tailwind",
                color:"green-text-gradient",
            },

            {
                name:"css",
                color:"pink-text-gradient",
            },
        ],
        image: pro3,
        source_code_link:" ",
        source_deploy_link: " ",
    },

];

export {services,technologies,projects};
