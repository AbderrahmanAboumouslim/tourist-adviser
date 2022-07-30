import React from 'react';
import GoogleMapReact from 'google-map-react';
import Rating from '@material-ui/lab';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './style';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 768px)');
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        marging={[50, 50, 50, 50]}
        options=""
        onChange=""
        onChildClick=""
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
