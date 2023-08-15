import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'

export const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Bank of Banking
                        </Typography>
                    </Container>

                </Toolbar>
            </AppBar>
        </div>
    )
}
