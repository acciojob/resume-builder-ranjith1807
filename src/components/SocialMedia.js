import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Grid, Box, Typography } from '@material-ui/core';

export const SocialMedia = () => {
  const socialMedia = useSelector((state) => state.socialMedia);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom style={{ marginBottom: '20px', color: '#666' }}>
        Add social links like linkedin , github etc
      </Typography>

      {socialMedia.map((item, index) => (
        <Box key={item.id} style={{ marginBottom: '20px' }}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                variant="outlined"
                label="Social Links*"
                name="Social"
                value={item.Social}
                onChange={(e) => dispatch({ type: 'UPDATE_SOCIAL', index, value: e.target.value })}
              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="center" gridGap="15px" marginTop="15px">
            <Button
              id="delete_social"
              variant="outlined"
              onClick={() => dispatch({ type: 'DELETE_SOCIAL', index })}
            >
              DELETE SOCIAL
            </Button>
            <Button
              id="add_social"
              variant="contained"
              style={{ backgroundColor: '#3f51b5', color: '#fff' }}
              onClick={() => dispatch({ type: 'ADD_SOCIAL' })}
            >
              ADD SOCIAL
            </Button>
          </Box>
        </Box>
      ))}
    </div>
  );
};