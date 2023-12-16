import imagesLogo from "../assets/icons/imagesLogo.js";
import {
  workout11,
  workout12,
  workout21,
  workout22,
  workout31,
  workout32,
  workout41,
  workout42,
} from "../assets/images/workout/workout.js";

const trabajos = [
  {
    id: 1,
    title: "Citas-React",
    descriptionEn:
      "The Citas-React project is an interactive application built using React.js and Tailwind CSS. It showcases various examples of using hooks and functional components. The codebase is powered by React.js, demonstrating the flexibility and efficiency of functional components. The application uses carefully chosen dependencies, including React and Tailwind, to enhance its functionality and provide a seamless user experience. The project also includes links to the GitHub repository and the deployed application on Netlify.",
    descriptionEs:
      " El proyecto Citas-React es una aplicación interactiva construida utilizando React.js y Tailwind CSS. Muestra varios ejemplos de uso de hooks y componentes funcionales. La base de código está impulsada por React.js, demostrando la flexibilidad y eficiencia de los componentes funcionales. La aplicación utiliza dependencias cuidadosamente seleccionadas, incluyendo React y Tailwind, para mejorar su funcionalidad y proporcionar una experiencia de usuario fluida. El proyecto también incluye enlaces al repositorio de GitHub y a la aplicación desplegada en Netlify.",
    dependencias: [imagesLogo.reactLogo2, imagesLogo.vite, imagesLogo.tailwind],
    img: [workout11, workout12],
    links: [
      {
        url: "https://github.com/diegotoledo13/administrador_de_pacientes_react_vite",
        logo: imagesLogo.github,
      },
      {
        url: "https://seguimiento-pacientes-01.netlify.app/",
        logo: imagesLogo.netlify,
      },
    ],
  },
  {
    id: 2,
    title: "Presupuesto-React",
    descriptionEn:
      "The Presupuesto-React project is a budgeting application where you can set a budget and add expenses. It demonstrates the use of React and Local Storage to manage state and persist data across sessions. The application is built with a focus on functional components and hooks, showcasing the power and flexibility of React. The project also includes links to the GitHub repository and the deployed application on Netlify.",
    descriptionEs:
      "El proyecto Presupuesto-React es una aplicación de presupuesto donde puedes establecer un presupuesto y agregar gastos. Demuestra el uso de React y Local Storage para gestionar el estado y persistir datos a través de las sesiones. La aplicación está construida con un enfoque en componentes funcionales y hooks, mostrando el poder y la flexibilidad de React. El proyecto también incluye enlaces al repositorio de GitHub y a la aplicación desplegada en Netlify.",
    dependencias: [imagesLogo.reactLogo2, imagesLogo.vite],
    img: [workout21, workout22],
    imgLink: [imagesLogo.github, imagesLogo.netlify],
    links: [
      {
        url: "https://github.com/diegotoledo13/control_de_gasto_react",
        logo: imagesLogo.github,
      },
      {
        url: "https://control-presupuesto-02.netlify.app",
        logo: imagesLogo.netlify,
      },
    ],
  },
  {
    id: 3,
    title: "Cotizacion Crypto - React",
    descriptionEn:
      "The Cotizacion Crypto - React project is a cryptocurrency quotation application. It demonstrates the use of React, custom hooks, and external API calls to fetch real-time cryptocurrency data. The application is built with a focus on functional components and hooks, showcasing the power and flexibility of React. The project also includes links to the GitHub repository and the deployed application on Netlify.",
    descriptionEs:
      "El proyecto Cotizacion Crypto - React es una aplicación de cotización de criptomonedas. Demuestra el uso de React, hooks personalizados y llamadas a API externas para obtener datos de criptomonedas en tiempo real. La aplicación está construida con un enfoque en componentes funcionales y hooks, mostrando el poder y la flexibilidad de React. El proyecto también incluye enlaces al repositorio de GitHub y a la aplicación desplegada en Netlify.",
    dependencias: [
      imagesLogo.reactLogo2,
      imagesLogo.vite,
      imagesLogo.styledComponents,
    ],
    img: [workout31, workout32],
    imgLink: [imagesLogo.github, imagesLogo.netlify],
    links: [
      {
        url: "https://github.com/diegotoledo13/cotizaciocrypto",
        logo: imagesLogo.github,
      },
      {
        url: "https://cotizacion-cryptomoneda-03.netlify.app/",
        logo: imagesLogo.netlify,
      },
    ],
  },
  {
    id: 4,
    title: "CRM - React",
    descriptionEn:
      "The CRM - React project is a Customer Relationship Management application. It demonstrates the use of React, React Router, Styled-Components, Tailwind, and Json-Server to manage customer data and interactions. The application is built with a focus on functional components and hooks, showcasing the power and flexibility of React. The project also includes links to the GitHub repository and the deployed application on Netlify.",
    descriptionEs:
      " El proyecto CRM - React es una aplicación de Gestión de Relaciones con Clientes. Demuestra el uso de React, React Router, Styled-Components, Tailwind y Json-Server para gestionar los datos e interacciones de los clientes. La aplicación está construida con un enfoque en componentes funcionales y hooks, mostrando el poder y la flexibilidad de React. El proyecto también incluye enlaces al repositorio de GitHub y a la aplicación desplegada en Netlify.",
    dependencias: [imagesLogo.reactLogo2, imagesLogo.vite, imagesLogo.tailwind],
    img: [workout41, workout42],
    imgLink: [imagesLogo.github, imagesLogo.netlify],
    links: [
      {
        url: "https://github.com/diegotoledo13/CRM_React-router-dom",
        logo: imagesLogo.github,
      },
      {
        url: "https://crm-react-router-dom-04.netlify.app/",
        logo: imagesLogo.netlify,
      },
    ],
  },
];
export default trabajos;
