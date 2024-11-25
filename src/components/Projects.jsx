import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';

const projects = [
    {
        title: 'Proyecto-Hotelero',
        description: 'Este es un proyecto que muestra cómo implementar un CRUD con React y Spring Boot.',
        image: '/hotel.jpg',
        github: 'https://github.com/RicardoGalarza/proyecto_final_hoteles',
        deployed: 'https://appealing-healing-production.up.railway.app',
        technologies: ['React', 'Spring Boot', 'Bootstrap', 'Google Cloud'],
    },
    {
        title: 'Clinica Odontologo',
        description: 'Este proyecto es una aplicación web para la gestión de una clínica odontológica, desarrollada con Spring Boot para el backend y utilizando HTML, CSS, y JavaScript para el frontend',
        image: '/odontologo.png',
        github: 'https://github.com/RicardoGalarza/proyecto_odontologo',
        technologies: ['React', 'Firebase', 'Material-UI'],
    },
    {
        title: 'Petshop',
        description: 'Petshop es un proyecto de diseño y desarrollo web enfocado en una tienda de productos para mascotas. Utiliza HTML y CSS para la estructura y el diseño del sitio',
        image: '/petshop.png',
        github: 'https://github.com/RicardoGalarza/petshop',
        technologies: ['Html', 'css', 'Figma'],
    },
];

const project = () => {
    return (
        <Container id="projects" maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h4" textAlign="center" sx={{ mb: 5 }}>
                Mis Proyectos
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            {/* Imagen del proyecto */}
                            <CardMedia component="img" height="140" image={project.image} alt={project.title} />
                            <CardContent>
                                {/* Título del proyecto */}
                                <Typography variant="h5">{project.title}</Typography>
                                {/* Descripción del proyecto */}
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {project.description}
                                </Typography>
                                {/* Tecnologías utilizadas */}
                                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                    Tecnologías Utilizadas:
                                </Typography>
                                <Grid container spacing={1}>
                                    {project.technologies.map((tech, techIndex) => (
                                        <Grid item key={techIndex}>
                                            <Chip label={tech} color="primary" variant="outlined" />
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                            <CardActions>
                                {/* Botón para ver en GitHub */}
                                <Button
                                    size="small"
                                    color="primary"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver en GitHub
                                </Button>

                                {/* Mostrar "VER PROYECTO" solo si no es el proyecto "Clínica Odontologo" */}
                                {project.title !== 'Clínica Odontologo' && (
                                    <Button
                                        size="small"
                                        color="secondary"
                                        href={project.deployed}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver Proyecto
                                    </Button>
                                )}
                            </CardActions>
                        </Card >
                    </Grid >
                ))}
            </Grid >
        </Container >
    );
};

export default project;
