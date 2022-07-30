import React from 'react';

import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Head = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typograghy variant="h5" className={classes.title}>
          Tourist Adviser
        </Typograghy>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Find your path
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search for ..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Head;
