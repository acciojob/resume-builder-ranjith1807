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

          <div className={classes.footer}>
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