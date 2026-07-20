import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Grid, Box, Typography } from '@material-ui/core';

export const Education = () => {
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    dispatch({ type: 'UPDATE_EDUCATION', index, field, value });
  };

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom style={{ marginBottom: '20px', color: '#666' }}>
        Add your Education Details
      </Typography>

      {education.map((item, index) => (
        <Box key={item.id} style={{ marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Course Name*"
                name="courseName"
                value={item.courseName}
                onChange={(e) => handleChange(index, 'courseName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Completion Year*"
                name="completionYear"
                value={item.completionYear}
                onChange={(e) => handleChange(index, 'completionYear', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="College/School*"
                name="college"
                value={item.college}
                onChange={(e) => handleChange(index, 'college', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Percentage*"
                name="percentage"
                value={item.percentage}
                onChange={(e) => handleChange(index, 'percentage', e.target.value)}
              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="center" gridGap="15px" marginTop="20px">
            <Button
              id="delete"
              variant="outlined"
              onClick={() => dispatch({ type: 'DELETE_EDUCATION', index })}
            >
              DELETE
            </Button>
            <Button
              id="add_education"
              variant="contained"
              style={{ backgroundColor: '#3f51b5', color: '#fff' }}
              onClick={() => dispatch({ type: 'ADD_EDUCATION' })}
            >
              ADD EDUCATION
            </Button>
          </Box>
        </Box>
      ))}
    </div>
  );
};