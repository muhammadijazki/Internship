import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <AppBar position="static">
            <Container maxWidth='xl'>
                <Toolbar>
                    <Typography variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr:150,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',                   
                   
                    }}
                    >
                    LOGO
                </Typography>
                <Button ><Link to={'/'} style={{color:"white",textDecoration:"none"}}><b>Home</b></Link></Button>
                <Button ><Link to={'/basic'} style={{color:"white",textDecoration:"none"}}><b>signin</b></Link></Button>
                <Button ><Link to={'/details'} style={{color:"white",textDecoration:"none"}}><b>Data</b></Link></Button>

                </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
}

export default Navigation