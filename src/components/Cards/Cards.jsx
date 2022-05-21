import React from 'react'
import { Grid, Button, Stack } from '@mui/material'

import Cardnew from './Card/Card'
import './Cards.css'

const Cards = () => {

    return (
      <>
            <div className='do'>
                <div className='title'>
                    <h1>Album Layout</h1>
                </div>
                <span className='info'>Something short and leading about the collection <br/> below- its content, the creator , etc. Make it short <br /> and sweet , but not too short so folks don't simply <br /> skip over it entirely</span>
                 <div className='btn'>
                <Stack spacing={2} direction="row">
      <Button variant="contained">Main call to action</Button>
      <Button variant="outlined">Secondary call to action</Button>
                    </Stack>
                    </div>
            </div>
<div className='box'>
            
      <Grid container spacing={2} justify="center">
        <Grid item xs={6} md={4}>
          <Cardnew/>
        </Grid>
        <Grid item xs={6} md={4}>
          <Cardnew/>
        </Grid>
        <Grid item xs={6} md={4}>
          <Cardnew/>
        </Grid>
        <Grid item xs={6} md={4}>
          <Cardnew/>
                    </Grid>
                     <Grid item xs={6} md={4}>
          <Cardnew/>
                    </Grid>
                     <Grid item xs={6} md={4}>
          <Cardnew/>
                    </Grid>
                     <Grid item xs={6} md={4}>
          <Cardnew/>
                    </Grid>
                     <Grid item xs={6} md={4}>
          <Cardnew/>
                    </Grid>
                     <Grid item xs={6} md={4}>
          <Cardnew/>
                    </Grid>
                    
      </Grid>

            </div>
            </>
  )
}

export default Cards