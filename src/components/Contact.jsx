import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Card, CardContent, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <Container id="contact" maxWidth="lg" sx={{ mt: 10}}>

            <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold', mb: 5 }}>
                Contáctame
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {/* Tarjeta de Teléfono */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <IconButton sx={{ color: '#007bff', mb: 1 }}>
                                <PhoneIcon fontSize="large" />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Teléfono
                            </Typography>
                            <Typography>+56988433931</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tarjeta de Correo */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <IconButton sx={{ color: '#007bff', mb: 1 }}>
                                <EmailIcon fontSize="large" />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Correo
                            </Typography>
                            <Typography>ricardogalarza1723@gmail.com</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tarjeta de Dirección */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <IconButton sx={{ color: '#007bff', mb: 1 }}>
                                <LocationOnIcon fontSize="large" />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Dirección
                            </Typography>
                            <Typography>Talca, Chile</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tarjeta de LinkedIn */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <IconButton
                                sx={{ color: '#007bff', mb: 1 }}
                                href="https://www.linkedin.com/in/ricardo-galarza-torres-389617252/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                LinkedIn
                            </Typography>
                            <Typography>Visita mi perfil</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
