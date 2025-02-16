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
  workout61,
  workout71,
  workout81,
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
  {
    id: 5,
    title: "Guitarra LA - Next.js",
    descriptionEn:
      "GuitarraLA is a fictional e-commerce application specializing in the sale of guitars. Developed as a practical exercise, the platform utilizes Next.js technology to provide a seamless and dynamic user experience. The application features a custom API built on PostgreSQL to efficiently manage product information, inventory, and transactions. GuitarraLA is the perfect destination for music enthusiasts seeking the perfect guitar for their unique style. Although it's a fictional exercise, the application demonstrates how Next.js and PostgreSQL can be combined to create an efficient and engaging e-commerce platform.",
    descriptionEs:
      " GuitarraLA es una aplicación de eCommerce a especializada en la venta de guitarras. Desarrollada como ejercicio práctico, la plataforma utiliza la tecnología Next.js para ofrecer una experiencia de usuario fluida y dinámica. La aplicación cuenta con una API personalizada construida en PostgreSQL para gestionar eficientemente la información de productos, inventario y transacciones. GuitarraLA es el destino perfecto para los amantes de la música que buscan la guitarra perfecta para su estilo único. Aunque sea un ejercicio ficticio, la aplicación demuestra cómo Next.js y PostgreSQL pueden combinarse para crear una plataforma de eCommerce eficiente y atractiva.",
    dependencias: [
      imagesLogo.nextjs,
      imagesLogo.reactLogo2,
      imagesLogo.postgreSQL,
      imagesLogo.strapi,
    ],
    img: [workout61, workout61],
    imgLink: [imagesLogo.github, imagesLogo.vercel],
    links: [
      {
        url: "https://github.com/diegotoledo13/guitarla-next",
        logo: imagesLogo.github,
      },
      {
        url: "https://guitarla-next-coral.vercel.app/",
        logo: imagesLogo.vercel,
      },
    ],
  },
  {
    id: 6,
    title: "API Guitarra LA",
    descriptionEn:
      "In this project, I crafted an API using Strapi as the content management framework and PostgreSQL as the underlying database. The choice of Strapi facilitated efficient API development thanks to its intuitive interface, simplifying the setup and management of endpoints.",
    descriptionEs:
      "En este proyecto, diseñé una API utilizando Strapi como el marco de gestión de contenido y PostgreSQL como la base de datos subyacente. La elección de Strapi facilitó la creación eficiente de la API gracias a su interfaz intuitiva, simplificando la configuración y administración de los endpoints.",
    dependencias: [imagesLogo.postgreSQL, imagesLogo.strapi],
    img: [workout61, workout61],
    imgLink: [imagesLogo.github, imagesLogo.vercel],
    links: [
      {
        url: "https://github.com/diegotoledo13/GuitarraLAStrapi",
        logo: imagesLogo.github,
      },
      {
        url: "https://guitarla-next-coral.vercel.app/",
        logo: imagesLogo.vercel,
      },
    ],
  },
  {
    id: 7,
    title: "Pokedex - Redux",
    descriptionEn:
      "The Pokedex - Redux project is a Pokémon information application. It demonstrates the use of React, Redux, and external API calls to fetch Pokémon data. The application is built with a focus on functional components and hooks, showcasing the power and flexibility of React. The project also includes links to the GitHub repository and the deployed application on Netlify.",
    descriptionEs:
      "El proyecto Pokedex - Redux es una aplicación de información de Pokémon. Demuestra el uso de React, Redux y llamadas a API externas para obtener datos de Pokémon. La aplicación está construida con un enfoque en componentes funcionales y hooks, mostrando el poder y la flexibilidad de React. El proyecto también incluye enlaces al repositorio de GitHub y a la aplicación desplegada en Netlify.",
    dependencias: [imagesLogo.reactLogo2, imagesLogo.redux],
    img: [workout61, workout71],
    imgLink: [imagesLogo.github, imagesLogo.netlify],
    links: [
      {
        url: "https://github.com/diegotoledo13/pokedex-redux",
        logo: imagesLogo.github,
      },
      {
        url: "https://pokedex-redux-diego.netlify.app/",
        logo: imagesLogo.vercel,
      },
    ],
  },
  {
    id: 8,
    title: "Pokedex - Astro ",
    descriptionEn:
      "The Pokedex project in this Astro version is a Pokémon information application. It demonstrates the use of React, Astro, and external API calls to fetch Pokémon data. The application is built with a focus on functional components and hooks, showcasing the power and flexibility of React. The project also includes links to the GitHub repository and the deployed application on Netlify.",
    descriptionEs:
      "El proyecto Pokedex en esta version Astro es una aplicación de información de Pokémon. Demuestra el uso de React, Astro y llamadas a API externas para obtener datos de Pokémon. La aplicación está construida con un enfoque en componentes funcionales y hooks, mostrando el poder y la flexibilidad de React. El proyecto también incluye enlaces al repositorio de GitHub y a la aplicación desplegada en Netlify.",
    dependencias: [imagesLogo.solid, imagesLogo.astrodev],
    img: [workout81, workout81],
    imgLink: [imagesLogo.github, imagesLogo.netlify],
    links: [
      {
        url: "https://github.com/diegotoledo13/pokedex-astro",
        logo: imagesLogo.github,
      },
      {
        url: "https://pokedex-astro-v1.netlify.app/",
        logo: imagesLogo.netlify,
      },
    ],
  },
];

export default trabajos;
