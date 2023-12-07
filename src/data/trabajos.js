import  imagesLogo  from "../assets/icons/imagesLogo.js"
import  batataImg from "../assets/images/workout/Batatabite/deploydesktop1.jpg"

const trabajos = [{
    id: 1,
    title: "Batatabit",
    descriptionEn:"Explore the world of React.js with this interactive app built using hooks and showcasing various examples. Dive into the codebase, powered by React.js, and discover the flexibility and efficiency of functional components. The carefully chosen dependencies enhance the app's functionality, offering a seamless experience as you navigate through the different examples. Whether you're a React.js enthusiast or a beginner, this app provides a hands-on approach to understanding and implementing hooks in your projects.",
    descriptionEs: "Explora el mundo de React.js con esta aplicación interactiva construida utilizando hooks y mostrando diversos ejemplos. Sumérgete en el código, impulsado por React.js, y descubre la flexibilidad y eficiencia de los componentes funcionales. Las dependencias cuidadosamente seleccionadas mejoran la funcionalidad de la aplicación, ofreciendo una experiencia fluida mientras navegas por los diferentes ejemplos. Ya seas un entusiasta de React.js o un principiante, esta aplicación ofrece un enfoque práctico para comprender e implementar hooks en tus proyectos.",
    dependencias: ["React", "Redux", "Firebase", "Tailwind", "React Router", "React Hooks", "React Icons", "React Helmet", "React Scroll"],
    img: batataImg,
    links: [
        { url: "https://github.com/usuario/batatabit", logo: imagesLogo.github },
        { url: "https://batatabit-landing-page.netlify.app/", logo: imagesLogo.netlify },
      ],   
},
    {
    id: 2,
    title: "HookApp",
    descriptionEn:"Explore the world of React.js with this interactive app built using hooks and showcasing various examples. Dive into the codebase, powered by React.js, and discover the flexibility and efficiency of functional components. The carefully chosen dependencies enhance the app's functionality, offering a seamless experience as you navigate through the different examples. Whether you're a React.js enthusiast or a beginner, this app provides a hands-on approach to understanding and implementing hooks in your projects.",
    descriptionEs: "Explora el mundo de React.js con esta aplicación interactiva construida utilizando hooks y mostrando diversos ejemplos. Sumérgete en el código, impulsado por React.js, y descubre la flexibilidad y eficiencia de los componentes funcionales. Las dependencias cuidadosamente seleccionadas mejoran la funcionalidad de la aplicación, ofreciendo una experiencia fluida mientras navegas por los diferentes ejemplos. Ya seas un entusiasta de React.js o un principiante, esta aplicación ofrece un enfoque práctico para comprender e implementar hooks en tus proyectos.",
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