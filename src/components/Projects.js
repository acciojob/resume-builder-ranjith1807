import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Grid, Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px'
  },
  body: {
    marginBottom: '25px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  }
}));

export const Projects = () => {
  const classes = useStyles();
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    dispatch({ type: 'UPDATE_PROJECT', index, field, value });
  };

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom style={{ marginBottom: '20px', color: '#666' }}>
        Add your Mini Projects
      </Typography>

      {projects.map((item, index) => (
        <div key={item.id} className={classes.body}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Project Name*"
                name="projectName"
                value={item.projectName}
                onChange={(e) => handleChange(index, 'projectName', e.target.value)}
                inputProps={{ name: 'projectName' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Tech Stack"
                name="techStack"
                value={item.techStack}
                onChange={(e) => handleChange(index, 'techStack', e.target.value)}
                inputProps={{ name: 'techStack' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Description"
                name="description"
                multiline
                rows={3}
                value={item.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                inputProps={{ name: 'description' }}
              />
            </Grid>
          </Grid>

          <div className={classes.footer}>
            <Button
              id="delete"
              variant="outlined"
              onClick={() => dispatch({ type: 'DELETE_PROJECT', index })}
            >
              DELETE
            </Button>
            <Button
              id="add_project"
              variant="contained"
              style={{ backgroundColor: '#3f51b5', color: '#fff' }}
              onClick={() => dispatch({ type: 'ADD_PROJECT' })}
            >
              ADD PROJECT
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};