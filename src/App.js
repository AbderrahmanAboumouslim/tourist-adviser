import React, { useEffect, useState } from 'react';

import Head from './Components/Head/Head';
import List from './Components/List/List';
import Map from './Components/Map/Map';

import { CssBaseline, Grid } from '@material-ui/core';

import { fetchPlaces } from './Fetch';

const App = () => {
  const [places, setPlaces] = useState();
  const [coords, setCoords] = useState({ lat: 33, lng: 22 });
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    fetchPlaces().then(data => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  return (
    <>
      <CssBaseline />
      <Head />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map setCoords={setCoords} setBounds={setBounds} coords={coords} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
