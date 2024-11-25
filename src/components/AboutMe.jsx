import { Avatar, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const AboutMe = () => {
    return (
        <Container id="about-me" maxWidth="lg" sx={{ mt: 5 }}>
            {/* Título de la Sección */}
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #1976D2, #FF4081)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 5,
                }}
            >
                Ricardo Galarza
            </Typography>

            {/* Contenido Centrado */}
            <Grid
                container
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                {/* Imagen del Usuario */}
                <Grid item>
                    <Avatar
                        src="/foto.jpg" // Asegúrate de que el archivo está correctamente referenciado
                        alt="Mi foto"
                        sx={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                </Grid>

                {/* Información Personal */}
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, maxWidth: '600px' }}>
                        Acabo de completar un bootcamp intensivo donde aprendí los fundamentos del desarrollo web y
                        estoy emocionado por las oportunidades que me permitan crecer y aprender en este apasionante mundo.
                        Aunque soy nuevo en el sector, tengo muchas ganas de seguir adquiriendo conocimientos, enfrentar desafíos y
                        aportar lo mejor de mí en cada proyecto. Estoy listo para dar mis primeros pasos y demostrar mi compromiso
                        con el aprendizaje continuo y el trabajo en equipo.
                    </Typography>
                </Grid>

                {/* Botones de Acción */}
                <Grid item>
                    {/* Botón Descargar CV */}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mr: 2 }}
                        href="/curriculum ricardo galarza.pdf" // Cambia esta ruta por la de tu archivo CV
                        download
                    >
                        Descargar CV
                    </Button>

                    {/* Botón Hablemos */}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        href="https://wa.me/+56988433931?text=Hola,%20Ricardo.%20Me%20gustaría%20hablar%20contigo."
                        target="_blank"
                    >
                        Hablemos
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutMe;
