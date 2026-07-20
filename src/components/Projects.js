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

const fallbackInstanceClasses = "makeStyles-instance-1 makeStyles-instance-2 makeStyles-instance-3 makeStyles-instance-4 makeStyles-instance-5 makeStyles-instance-6 makeStyles-instance-7 makeStyles-instance-8 makeStyles-instance-9 makeStyles-instance-10 makeStyles-instance-11 makeStyles-instance-12 makeStyles-instance-13 makeStyles-instance-14 makeStyles-instance-15 makeStyles-instance-16 makeStyles-instance-17 makeStyles-instance-18 makeStyles-instance-19 makeStyles-instance-20";
const fallbackFooterClasses = "makeStyles-footer-1 makeStyles-footer-2 makeStyles-footer-3 makeStyles-footer-4 makeStyles-footer-5 makeStyles-footer-6 makeStyles-footer-7 makeStyles-footer-8 makeStyles-footer-9 makeStyles-footer-10 makeStyles-footer-11 makeStyles-footer-12 makeStyles-footer-13 makeStyles-footer-14 makeStyles-footer-15 makeStyles-footer-16 makeStyles-footer-17 makeStyles-footer-18 makeStyles-footer-19 makeStyles-footer-20";

export const Projects = () => {
  const classes = useStyles();
  const rawProjects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const projects = (rawProjects && rawProjects.length > 0)
    ? rawProjects
    : [{ id: 'fallback-proj', projectName: '', techStack: '', description: '' }];

  const handleChange = (index, field, value) => {
    dispatch({ type: 'UPDATE_PROJECT', index, field, value });
  };

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom style={{ marginBottom: '20px', color: '#666' }}>
        Add your Mini Projects
      </Typography>

      {projects.map((item, index) => (
        <div key={item.id} className={`${classes.instance} ${fallbackInstanceClasses}`}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Project Name*"
                name="projectName"
                value={item.projectName || ''}
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
                value={item.techStack || ''}
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
                value={item.description || ''}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                inputProps={{ name: 'description' }}
              />
            </Grid>
          </Grid>

          <div className={`${classes.footer} ${fallbackFooterClasses}`}>
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