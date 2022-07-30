import React from 'react';

import Head from './Components/Head/Head';
import List from './Components/List/List';
import Map from './Components/Map/Map';

import { CssBaseline, Grid } from '@material-ui/core';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Head />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
