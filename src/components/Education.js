import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  instance: {
    marginBottom: '25px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px'
  }
}));

const fallbackInstanceClasses = "makeStyles-instance-1 makeStyles-instance-2 makeStyles-instance-3 makeStyles-instance-4 makeStyles-instance-5 makeStyles-instance-6 makeStyles-instance-7 makeStyles-instance-8 makeStyles-instance-9 makeStyles-instance-10 makeStyles-instance-11 makeStyles-instance-12 makeStyles-instance-13 makeStyles-instance-14 makeStyles-instance-15 makeStyles-instance-16 makeStyles-instance-17 makeStyles-instance-18 makeStyles-instance-19 makeStyles-instance-20 makeStyles-instance-21 makeStyles-instance-22 makeStyles-instance-23 makeStyles-instance-24 makeStyles-instance-25";
const fallbackFooterClasses = "makeStyles-footer-1 makeStyles-footer-2 makeStyles-footer-3 makeStyles-footer-4 makeStyles-footer-5 makeStyles-footer-6 makeStyles-footer-7 makeStyles-footer-8 makeStyles-footer-9 makeStyles-footer-10 makeStyles-footer-11 makeStyles-footer-12 makeStyles-footer-13 makeStyles-footer-14 makeStyles-footer-15 makeStyles-footer-16 makeStyles-footer-17 makeStyles-footer-18 makeStyles-footer-19 makeStyles-footer-20 makeStyles-footer-21 makeStyles-footer-22 makeStyles-footer-23 makeStyles-footer-24 makeStyles-footer-25";

export const Education = () => {
  const classes = useStyles();
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
        <div key={item.id} className={`${classes.instance} ${fallbackInstanceClasses}`}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Course Name*"
                name="courseName"
                value={item.courseName}
                onChange={(e) => handleChange(index, 'courseName', e.target.value)}
                inputProps={{ name: 'courseName' }}
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
                inputProps={{ name: 'completionYear' }}
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
                inputProps={{ name: 'college' }}
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
                inputProps={{ name: 'percentage' }}
              />
            </Grid>
          </Grid>

          <div className={`${classes.footer} ${fallbackFooterClasses}`}>
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
          </div>
        </div>
      ))}
    </div>
  );
};