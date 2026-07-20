import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Stepper, Step, StepLabel, Container, Paper, Typography, Box } from '@material-ui/core';
import { Profile } from './components/Profile';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { SocialMedia } from './components/SocialMedia';
import { FinalResume } from './components/FinalResume';

const steps = ['Profile Section', 'Education Section', 'Skills Sector', 'Mini Project', 'Social'];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, 5));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  const handleSaveToDatabase = () => {
    localStorage.setItem('saved_resume', JSON.stringify(state));
    alert('Resume saved successfully!');
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingBottom: '40px' }}>
      {/* Magenta Header Banner */}
      <Box style={{ backgroundColor: '#ff0055', padding: '15px 0', textAlign: 'center', color: '#fff' }}>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>RESUME GENERATOR</Typography>
      </Box>

      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Paper style={{ padding: '20px' }}>
          {/* Progress Stepper */}
          {activeStep < 5 && (
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}

          {/* Page Views */}
          <Box style={{ margin: '30px 0' }}>
            {activeStep === 0 && <Profile />}
            {activeStep === 1 && <Education />}
            {activeStep === 2 && <Skills />}
            {activeStep === 3 && <Projects />}
            {activeStep === 4 && <SocialMedia />}
            {activeStep === 5 && <FinalResume />}
          </Box>

          {/* Navigation Buttons (Screenshots 189-193) */}
          {activeStep < 5 && (
            <Box display="flex" justifyContent="center" gridGap="10px" marginTop="30px">
              <Button
                id="back"
                variant="text"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                BACK
              </Button>
              <Button
                id="next"
                variant="contained"
                style={{ backgroundColor: '#ff0055', color: '#fff' }}
                onClick={handleNext}
              >
                NEXT
              </Button>
              <Button
                id="save_continue"
                variant="contained"
                style={{ backgroundColor: '#ff0055', color: '#fff' }}
                onClick={handleSaveToDatabase}
              >
                SAVE AND CONTINUE
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </div>
  );
}