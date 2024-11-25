import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">
                        Acerca de mí
                    </Button>
                    <Button color="inherit" component={Link} to="/projects">
                        Proyectos
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contacto
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
