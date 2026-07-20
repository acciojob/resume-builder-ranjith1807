import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Grid, Box, Typography } from '@material-ui/core';

export const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch({ type: 'UPDATE_PROFILE', field, value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      handleChange('url', fileUrl);
    }
  };

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom style={{ marginBottom: '20px', color: '#666' }}>
        Add your profile details
      </Typography>

      <Box style={{ marginBottom: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              name="fname"
              value={profile.fname || ''}
              onChange={(e) => handleChange('fname', e.target.value)}
              inputProps={{ name: 'fname' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              name="lname"
              value={profile.lname || ''}
              onChange={(e) => handleChange('lname', e.target.value)}
              inputProps={{ name: 'lname' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone Number"
              name="phone"
              value={profile.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              inputProps={{ name: 'phone' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Address"
              name="address"
              value={profile.address || ''}
              onChange={(e) => handleChange('address', e.target.value)}
              inputProps={{ name: 'address' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom style={{ color: '#666' }}>
              Profile Image
            </Typography>
            <Box display="flex" alignItems="center" style={{ border: '1px solid #c4c4c4', borderRadius: '4px', padding: '10px', backgroundColor: '#fff' }}>
              <input
                type="file"
                name="url"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};