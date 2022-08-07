import React from 'react';
import GoogleMapReact from 'google-map-react';
import Rating from '@material-ui/lab';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './style';

const Map = ({ coords, setCoords, setBounds, places }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 768px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        marging={[50, 50, 50, 50]}
        options={''}
        onChange={e => {
          console.log(e);
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
        }}
        onChildClick={''}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {place.name}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
