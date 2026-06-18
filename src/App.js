import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep } from './redux/resumeSlice';
import { Profile, Education, Skills, Projects, SocialMedia } from './components/FormPages';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const step = useSelector(state => state.resume.step);
  const dispatch = useDispatch();
  const stepsList = ["Profile Section", "Education Section", "Skills Sector", "Mini Project", "Social"];

  return (
    <div className="App">
      {/* FIX 1: EXACT MATCH HEADING */}
      <h1>RESUME GENERATOR</h1> 
      
      {step < 6 && (
        <div className="stepper">
          {stepsList.map((s, i) => (
            <React.Fragment key={i}>
              <span className={step >= i + 1 ? 'step-item active' : 'step-item'}>
                <div className="step-circle">{i + 1}</div> {s}
              </span>
              {i < 4 && <div className="step-line"></div>}
            </React.Fragment>
          ))}
        </div>
      )}

      {step === 1 && <Profile />}
      {step === 2 && <Education />}
      {step === 3 && <Skills />}
      {step === 4 && <Projects />}
      {step === 5 && <SocialMedia />}
      {step === 6 && <Preview />}

      {/* FIX 2 & 3: PERSISTENT FOOTER WITH MUI CLASSES */}
      {step < 6 && (
        <div className="makeStyles-footer-15" style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {step > 1 && <button id="back" className="MuiButton-contained" onClick={() => dispatch(prevStep())}>Back</button>}
          {step < 5 && <button id="next" className="MuiButton-contained" onClick={() => dispatch(nextStep())}>Next</button>}
          {step === 5 && <button id="save_continue" className="MuiButton-contained" onClick={() => dispatch(nextStep())}>Save and Continue</button>}
        </div>
      )}
    </div>
  );
};

export default App;