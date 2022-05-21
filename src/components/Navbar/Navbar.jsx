import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, CssBaseline } from '@mui/material'
import { AiFillCamera} from 'react-icons/ai'

const Navbar = () => {
  return (
      <div>
          <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AiFillCamera />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Album Layout
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar