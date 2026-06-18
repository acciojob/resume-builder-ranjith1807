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

      {/* FIXED FOOTER: Shows Save/Continue on all pages, only ONE MuiButton-contained class */}
      {step < 6 && (
        <div className="makeStyles-footer-15">
          <button 
            id="back" 
            onClick={() => dispatch(prevStep())} 
            style={{ visibility: step > 1 ? 'visible' : 'hidden' }}
          >
            BACK
          </button>
          
          <button 
            id="next" 
            className="MuiButton-contained" 
            onClick={() => dispatch(nextStep())}
          >
            NEXT
          </button>
          
          <button 
            id="save_continue" 
            onClick={() => dispatch(nextStep())}
          >
            SAVE AND CONTINUE
          </button>
        </div>
      )}
    </div>
  );
};

export default App;