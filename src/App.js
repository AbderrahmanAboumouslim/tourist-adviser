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
  const [type, setType] = useState('hotels');
  const [rate, setRate] = useState('');
  const [filteredArea, setFilteredArea] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchPlaces(type, bounds.ne, bounds.sw).then(data => {
      setPlaces(data.data);
      setFilteredArea([]);
      setIsLoading(false);
    });
  }, [type, bounds, coords]);

  useEffect(() => {
    const filtered = places.filter(
      place => Number(place.rating) >= Number(rate)
    );
    setFilteredArea(filtered);
  }, [places, rate]);

  return (
    <>
      <CssBaseline />
      <Head setCoords={setCoords} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredArea.length > 0 ? filteredArea : places}
            placeClicked={placeClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rate={rate}
            setRate={setRate}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={filteredArea.length > 0 ? filteredArea : places}
            setPlaceClicked={setPlaceClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
