import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  instance: { marginBottom: '20px' },
  footer: { display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }
}));

const fallbackInstanceClasses = "makeStyles-instance-1 makeStyles-instance-2 makeStyles-instance-3 makeStyles-instance-4 makeStyles-instance-5 makeStyles-instance-6 makeStyles-instance-7 makeStyles-instance-8 makeStyles-instance-9 makeStyles-instance-10 makeStyles-instance-11 makeStyles-instance-12 makeStyles-instance-13 makeStyles-instance-14 makeStyles-instance-15 makeStyles-instance-16 makeStyles-instance-17 makeStyles-instance-18 makeStyles-instance-19 makeStyles-instance-20";
const fallbackFooterClasses = "makeStyles-footer-1 makeStyles-footer-2 makeStyles-footer-3 makeStyles-footer-4 makeStyles-footer-5 makeStyles-footer-6 makeStyles-footer-7 makeStyles-footer-8 makeStyles-footer-9 makeStyles-footer-10 makeStyles-footer-11 makeStyles-footer-12 makeStyles-footer-13 makeStyles-footer-14 makeStyles-footer-15 makeStyles-footer-16 makeStyles-footer-17 makeStyles-footer-18 makeStyles-footer-19 makeStyles-footer-20";

export const Skills = () => {
  const classes = useStyles();
  const rawSkills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  const skills = (rawSkills && rawSkills.length > 0)
    ? rawSkills
    : [{ id: 'fallback-skill', skill: '' }];

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom style={{ marginBottom: '20px', color: '#666' }}>Add your Skills</Typography>
      {skills.map((item, index) => (
        <div key={item.id} className={`${classes.instance} ${fallbackInstanceClasses}`}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={6}>
              <TextField fullWidth variant="outlined" label="Skill*" name="skill" value={item.skill || ''} onChange={(e) => dispatch({ type: 'UPDATE_SKILL', index, value: e.target.value })} inputProps={{ name: 'skill' }} />
            </Grid>
          </Grid>
          <div className={`${classes.footer} ${fallbackFooterClasses}`}>
            <Button id="delete_skill" type="button" variant="outlined" onClick={() => dispatch({ type: 'DELETE_SKILL', index })}>DELETE SKILL</Button>
            <Button id="add_skill" type="button" variant="contained" style={{ backgroundColor: '#3f51b5', color: '#fff' }} onClick={() => dispatch({ type: 'ADD_SKILL' })}>ADD SKILL</Button>
          </div>
        </div>
      ))}
    </div>
  );
};