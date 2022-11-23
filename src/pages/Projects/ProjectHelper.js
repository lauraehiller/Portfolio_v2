import firefliesImg from '../../images/componentassets/projectassets/Fireflies.jpg';
import empoweredImg from '../../images/componentassets/projectassets/EmpoweredU.jpg';
import sunriseImg from '../../images/componentassets/projectassets/Sunrise.jpg';
import websiteImg from '../../images/componentassets/projectassets/MyWebsite.png';

export const projectList = [
    {
        name:"Portfolio V2",
        imgUrl: firefliesImg,
        imgAlt:"An image",
        description:"The second iteration of my portfolio website." +  
        " Designed to be more accessible, more responsive, and more efficient.",
        tools:"HTML · CSS · JavaScript · React",
        projectLink:"https://lauraehiller.com/",
        githubLink:"https://github.com/lauraehiller"
    },
    {
        name:"Webstyle",
        imgUrl:firefliesImg,
        imgAlt:"An image",
        description:"A fun website for trying out different color and font combinations.",
        tools:"HTML · CSS · JavaScript",
        projectLink:"https://lauraehiller.github.io/WebStyleProject/",
        githubLink:"https://github.com/lauraehiller"
    },
    {
        name:"3D World: Fireflies",
        imgUrl:firefliesImg,
        imgAlt:"An image",
        description:"A beautiful 3D world I designed for Computer Graphics. "+ 
        "Fun Fact: There are about 12,000 fireflies in this world.",
        tools:"Three.js · WebGL · Blender · HTML · CSS",
        projectLink:"https://people.ucsc.edu/~lhiller/index.html/Assignment%205/World.html",
        githubLink:"https://github.com/lauraehiller"
    },
    {
        name:"3D World: Sunrise",
        imgUrl:sunriseImg,
        imgAlt:"An image",
        description:"A project for Computer Graphics in which"+
        "I wrote custom shaders to create the lighting effects and to"+
        "interpolate the sky color (creating the sunrise/sunset aesthetic).",
        tools:"WebGL · HTML · CSS · JavaScript.",
        projectLink:"https://people.ucsc.edu/~lhiller/index.html/Assignment4/World.html",
        githubLink:"https://github.com/lauraehiller"
    },
    {
        name:"Portfolio V1",
        imgUrl:websiteImg,
        imgAlt:"An image",
        description:"My first attempt at coding a portfolio website.  I've learned a lot since then!",
        tools:"Bootstrap · HTML · CSS · Javascript",
        projectLink:"https://lauraehiller.com/",
        githubLink:"https://github.com/lauraehiller"
    },
    {
        name:"EmpoweredU",
        imgUrl:empoweredImg,
        imgAlt:"An image",
        description:"A user friendly and responsive website that I designed for the client.",
        tools:"WordPress · HTML",
        projectLink:"https://myempoweredu.com/",
        githubLink:""
    }

];