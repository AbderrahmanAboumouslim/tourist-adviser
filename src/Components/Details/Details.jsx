import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

const altImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU';

const Details = ({ place }) => {
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 325 }}
        image={place.photo ? place.photo.images.large.url : altImg}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name ? place.name : 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
