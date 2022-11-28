import spacelabImg from '../../images/componentassets/projectassets/SpaceLab.png';
import portfolio_v2Img from '../../images/componentassets/projectassets/portfolio_v2.png';
import firefliesImg from '../../images/componentassets/projectassets/Fireflies.jpg';
import empoweredImg from '../../images/componentassets/projectassets/EmpoweredU.jpg';
import sunriseImg from '../../images/componentassets/projectassets/Sunrise.jpg';
import websiteImg from '../../images/componentassets/projectassets/MyWebsite.png';
import mydeskImg from '../../images/componentassets/projectassets/my-desk.png';
import webstyleImg from '../../images/componentassets/projectassets/webstyle.png';
import exoplanetariumImg from '../../images/componentassets/projectassets/Exoplanetarium.png';

export const featuredList = [
    {
        name:"Exoplanetarium 3D",
        imgUrl: exoplanetariumImg,
        imgAlt:"Large text that says Exoplanetarium over a starry background",
        description:"An educational and interactive 3D web app rendering "+
        "NASA/Caltech data from the K2 and Keplar "+
        "Missions on over 9,000 Exoplanets.",
        tools:"React.js · Three.js · WebGL",
        projectLink:"http://spacelab.space/projects",
        githubLink:"https://github.com/spacelabdev/Exoplanetarium-3D"
    },
];

export const projectList = [
    {
        name:"SpaceLab",
        imgUrl: spacelabImg,
        imgAlt:"Large text that says SpaceLab over a starry background",
        description:"The SpaceLab website where you can learn about the organization, " +
        "explore NASA and CalTech data on Exoplanets, and make donations.",
        tools:"React.js · Node.js · Bootstrap",
        projectLink:"http://spacelab.space/",
        githubLink:"https://github.com/spacelabdev/spacelab-react"
    },
    {
        name:"Portfolio V2",
        imgUrl: portfolio_v2Img,
        imgAlt:"Large white text that says Laura Hiller over dark background",
        description:"The second iteration of my portfolio website." +  
        " Designed to be more accessible, more responsive, and more efficient.",
        tools:"React-three/drei · SCSS",
        projectLink:"https://lauraehiller.com/",
        githubLink:"https://github.com/lauraehiller/Portfolio_v2"
    },
    {
        name:"My Desk",
        imgUrl: mydeskImg,
        imgAlt:"A dark room with a desk and bookshelf",
        description:"A 3D model of my desk that I designed to get practice " +
        "modeling in Blender and to get familiar with React-three/fiber.",
        tools:"React-three/fiber · Blender",
        projectLink:"https://lauraehiller.github.io/my_desk/",
        githubLink:"https://github.com/lauraehiller/my_desk"
    },
    {
        name:"Webstyle",
        imgUrl:webstyleImg,
        imgAlt:"A white web page with black text",
        description:"A fun website for trying out different color and font combinations.",
        tools:"HTML · CSS · JavaScript",
        projectLink:"https://lauraehiller.github.io/WebStyleProject/",
        githubLink:"https://github.com/lauraehiller/WebStyleProject"
    },
    {
        name:"3D World: Fireflies",
        imgUrl:firefliesImg,
        imgAlt:"A wood cabin in a swamp at night",
        description:"A beautiful 3D world I designed for Computer Graphics. "+ 
        "Fun Fact: There are about 12,000 fireflies in this world.",
        tools:"Three.js · WebGL · Blender · HTML · CSS",
        projectLink:"https://people.ucsc.edu/~lhiller/index.html/Assignment%205/World.html",
        githubLink:''
    },
    {
        name:"3D World: Sunrise",
        imgUrl:sunriseImg,
        imgAlt:"A sunrise over a distant city",
        description:"A project for Computer Graphics in which "+
        "I wrote custom shaders to create the lighting effects and to "+
        "interpolate the sky color (creating the sunrise/sunset aesthetic).",
        tools:"WebGL · HTML · CSS · JavaScript.",
        projectLink:"https://people.ucsc.edu/~lhiller/index.html/Assignment4/World.html",
        githubLink:''
    },
    {
        name:"Portfolio V1",
        imgUrl:websiteImg,
        imgAlt:"Large text that says Laura Hiller",
        description:"My first attempt at coding a portfolio website.  I've learned a lot since then!",
        tools:"Bootstrap · HTML · CSS · Javascript",
        projectLink:"https://lauraehiller.com/",
        githubLink:"https://github.com/lauraehiller"
    },
    {
        name:"EmpoweredU",
        imgUrl:empoweredImg,
        imgAlt:"A person sitting with a laptop and cup of coffee",
        description:"A user friendly and responsive website that I designed for the client.",
        tools:"WordPress · HTML",
        projectLink:"https://myempoweredu.com/",
        githubLink:''
    }

];