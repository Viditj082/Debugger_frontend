import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <AppBar position="static" style={{background:'#070707'}}>
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CodeWiz
          </Typography>
          </Toolbar>
    </AppBar>
  )
}
