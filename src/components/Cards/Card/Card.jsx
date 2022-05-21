import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

const Cardnew = () => {
  return (
      <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../../assets/car.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Heading
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a media card and you can use this to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Cardnew