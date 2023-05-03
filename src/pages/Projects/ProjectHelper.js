import Positonai from "../../images/componentassets/Positonai-cut.png";
import PosiVault from "../../images/componentassets/PosiVault-cut.png";
import spacelabImg from "../../images/componentassets/SpaceLab-cut.png";
import portfolio_v2Img from "../../images/componentassets/portfolio_v2.png";
import firefliesImg from "../../images/componentassets/Fireflies.jpg";
import empoweredImg from "../../images/componentassets/EmpoweredU.jpg";
import sunriseImg from "../../images/componentassets/Sunrise.jpg";
import websiteImg from "../../images/componentassets/MyWebsite.png";
import mydeskImg from "../../images/componentassets/my-desk.png";
import webstyleImg from "../../images/componentassets/webstyle.png";
import exoplanetariumImg from "../../images/componentassets/Exoplanetarium.png";

export const featuredList = [
  {
    name: "Positon.ai",
    imgUrl: Positonai,
    imgAlt: "A website landing page",
    description:
      "The Positon website where you can explore solutions, use cases, company news and history.",
    tools: "React.js · Node.js · TypeScript · Tailwind",
    projectLink: "https://positon.ai/",
  },
  {
    name: "PosiVault",
    imgUrl: PosiVault,
    imgAlt: "A website landing page",
    description: "An AI-powered SaaS application for programmatic M&A.",
    tools: "Next.js · GraphQL · Prisma (ORM) · Nexus",
    projectLink: "https://positon.ai/#solutions",
  },
  {
    name: "Exoplanetarium 3D",
    imgUrl: exoplanetariumImg,
    imgAlt: "Large text that says Exoplanetarium over a starry background",
    description:
      "An educational and interactive 3D web app that renders " +
      "NASA/Caltech data from the K2 and Keplar " +
      "missions on over 9,000 Exoplanets.",
    tools: "React.js · Three.js · WebGL",
    projectLink: "http://spacelab.space/projects",
    githubLink: "https://github.com/spacelabdev/Exoplanetarium-3D",
  },
  {
    name: "SpaceLab.space",
    imgUrl: spacelabImg,
    imgAlt: "Large text that says SpaceLab over a starry background",
    description:
      "The SpaceLab website where you can learn about the organization, " +
      "explore NASA and CalTech data, and make donations.",
    tools: "React.js · Node.js · Bootstrap",
    projectLink: "http://spacelab.space/",
    githubLink: "https://github.com/spacelabdev/spacelab-react",
  },
];

export const projectList = [
  {
    name: "Portfolio V2",
    imgUrl: portfolio_v2Img,
    imgAlt: "Large white text that says Laura Hiller over dark background",
    description:
      "The second iteration of my portfolio website." +
      " Designed to be more accessible, more responsive, and more efficient.",
    tools: "React.js · Three.js · SCSS",
    projectLink: "#hero",
    githubLink: "https://github.com/lauraehiller/Portfolio_v2",
  },
  {
    name: "My Desk",
    imgUrl: mydeskImg,
    imgAlt: "A dark room with a desk and bookshelf",
    description:
      "A 3D model of my desk that I designed to practice " +
      "modeling in Blender and to familiarize myself with React-three/fiber.",
    tools: "React-three/fiber · Blender",
    projectLink: "https://lauraehiller.github.io/my_desk/",
    githubLink: "https://github.com/lauraehiller/my_desk",
  },
  {
    name: "Webstyle",
    imgUrl: webstyleImg,
    imgAlt: "A white web page with black text",
    description:
      "A fun website for trying out different color and font " +
      "combinations.  Designed as practice with JavaScript.",
    tools: "HTML · CSS · JavaScript",
    projectLink: "https://lauraehiller.github.io/WebStyleProject/",
    githubLink: "https://github.com/lauraehiller/WebStyleProject",
  },
  {
    name: "3D World: Fireflies",
    imgUrl: firefliesImg,
    imgAlt: "A wood cabin in a swamp at night",
    description:
      "A beautiful 3D world I designed for Computer Graphics. " +
      "Fun Fact: There are about 12,000 fireflies in this world.",
    tools: "Three.js · WebGL · Blender · HTML · CSS",
    projectLink:
      "https://people.ucsc.edu/~lhiller/index.html/Assignment%205/World.html",
    githubLink: "",
  },
  {
    name: "3D World: Sunrise",
    imgUrl: sunriseImg,
    imgAlt: "A sunrise over a distant city",
    description:
      "A project for Computer Graphics in which " +
      "I wrote custom shaders to create the lighting effects and to " +
      "interpolate the sky color (creating the sunrise/sunset aesthetic).",
    tools: "WebGL · HTML · CSS · JavaScript.",
    projectLink:
      "https://people.ucsc.edu/~lhiller/index.html/Assignment4/World.html",
    githubLink: "",
  },
  {
    name: "Portfolio V1",
    imgUrl: websiteImg,
    imgAlt: "Large text that says Laura Hiller",
    description: "The very first version of my portfolio website.",
    tools: "Bootstrap · HTML · CSS · Javascript",
    projectLink: "https://lauraehiller.github.io/Portfolio_v1/",
    githubLink: "https://github.com/lauraehiller/Portfolio_v1",
  },
  {
    name: "EmpoweredU",
    imgUrl: empoweredImg,
    imgAlt: "A person sitting with a laptop and cup of coffee",
    description:
      "A user friendly and responsive website made for a client.  Designed to be accessible to non tech-savvy contributors.",
    tools: "WordPress · HTML",
    projectLink: "https://myempoweredu.com/",
    githubLink: "",
  },
];
