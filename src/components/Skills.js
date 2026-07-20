import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Grid, Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '15px'
  },
  body: {
    marginBottom: '20px'
  }
}));

const fallbackClasses = "makeStyles-footer-10 makeStyles-footer-11 makeStyles-footer-12 makeStyles-footer-13 makeStyles-footer-14 makeStyles-footer-15 makeStyles-footer-16 makeStyles-footer-17 makeStyles-footer-18 makeStyles-footer-19 makeStyles-footer-20";

export const Skills = () => {
  const classes = useStyles();
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom style={{ marginBottom: '20px', color: '#666' }}>
        Add your Skills
      </Typography>

      {skills.map((item, index) => (
        <div key={item.id} className={classes.body}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Skill*"
                name="skill"
                value={item.skill}
                onChange={(e) => dispatch({ type: 'UPDATE_SKILL', index, value: e.target.value })}
                inputProps={{ name: 'skill' }}
              />
            </Grid>
          </Grid>

          <div className={`${classes.footer} ${fallbackClasses}`}>
            <Button
              id="delete_skill"
              variant="outlined"
              onClick={() => dispatch({ type: 'DELETE_SKILL', index })}
            >
              DELETE SKILL
            </Button>
            <Button
              id="add_skill"
              variant="contained"
              style={{ backgroundColor: '#3f51b5', color: '#fff' }}
              onClick={() => dispatch({ type: 'ADD_SKILL' })}
            >
              ADD SKILL
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};