import  imagesLogo  from "../assets/icons/imagesLogo.js"
import  batataImg from "../assets/images/workout/Batatabite/deploydesktop1.jpg"

const trabajos = [{
    id: 1,
    title: "Batatabit",
    description: "Landing page de una empresa de criptomonedas lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    dependencias: ["React", "Redux", "Firebase"],
    img: batataImg,
    links: [
        { url: "https://github.com/usuario/batatabit", logo: imagesLogo.github },
        { url: "https://batatabit-landing-page.netlify.app/", logo: imagesLogo.netlify },
      ],   
},
    {
    id: 2,
    title: "HookApp",
    description: "Aplicación de notas con React lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    dependencias: ["React", "Redux", "Firebase"],
    img: batataImg,
    imgLink: [imagesLogo.github, imagesLogo.netlify],
    links: [
        { url: "https://github.com/usuario/batatabit", logo: imagesLogo.github },
        { url: "https://batatabit-landing-page.netlify.app/", logo: imagesLogo.netlify },
      ],
    },
]
export default trabajos