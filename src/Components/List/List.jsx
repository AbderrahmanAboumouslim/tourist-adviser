import React, { useEffect, useState, createRef } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import useStyles from './style';
import Details from '../Details/Details';

const List = ({ places, placeClicked }) => {
  const classes = useStyles();
  const [type, setType] = useState('hotels');
  const [rate, setRate] = useState('');
  const [theRefs, setTheRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => theRefs[i] || createRef());
    console.log(refs);
    setTheRefs(refs);
  }, [places]);

  console.log(places);
  console.log(placeClicked);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Hotels, Restaurants and Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={e => setType(e.target.value)}>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="resturants">Resturants</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rate} onChange={e => setRate(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value="3">3.0+</MenuItem>
          <MenuItem value="4">4.0+</MenuItem>
          <MenuItem value="4.5">4.5+</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12} ref={theRefs[i]}>
            <Details
              place={place}
              selected={Number(placeClicked) === i}
              refProp={theRefs[i]}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
