import React, { useEffect, useState } from 'react';

import Head from './Components/Head/Head';
import List from './Components/List/List';
import Map from './Components/Map/Map';

import { CssBaseline, Grid } from '@material-ui/core';

import { fetchPlaces } from './Fetch';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [placeClicked, setPlaceClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchPlaces(bounds.ne, bounds.sw).then(data => {
      setPlaces(data.data);
      setIsLoading(false);
    });
  }, [bounds, coords]);
  return (
    <>
      <CssBaseline />
      <Head />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            placeClicked={placeClicked}
            isLoading={isLoading}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={places}
            setPlaceClicked={setPlaceClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
