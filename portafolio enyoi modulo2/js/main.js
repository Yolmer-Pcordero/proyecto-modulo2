// Array con los proyectos
const projects = [
    {
        title: "Proyecto Integrador",
        description: "Proyecto módulo #2 Enyoi",
        image: "./assets/img/imagen proyecto.png",
        link: "#",
        alt: "Descripción del proyecto integrador"
    },
    {
        title: "App de Gestión",
        description: "Aplicación para gestionar tareas en equipo.",
        image: "./assets/img/imagen proyecto.png",
        link: "#",
        alt: "Descripción del proyecto de gestión"
    },
    {
        title: "Sistema de Inventarios",
        description: "Sistema para la gestión de inventarios.",
        image: "./assets/img/imagen proyecto.png",
        link: "#",
        alt: "Descripción del sistema de inventarios"
    }
];

// Función para crear tarjetas dinámicamente
function createProjectCards() {
    const projectContainer = document.getElementById('project-container');

    // Iteramos sobre cada proyecto y creamos la estructura HTML
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${project.title}</h2>
            <img class="imagen-card" src="${project.image}" alt="${project.alt}">
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Conoce más</a>
        `;

        // Añadimos la tarjeta al contenedor
        projectContainer.appendChild(card);
    });
}

// Llamamos a la función cuando la ventana cargue
window.onload = createProjectCards;
