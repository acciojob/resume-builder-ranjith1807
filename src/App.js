import React from 'react';
import { useSelector } from 'react-redux';
import { Profile, Education, Skills, Projects, SocialMedia } from './components/FormPages';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const step = useSelector(state => state.resume.step);
  const stepsList = ["Profile Section", "Education Section", "Skills Sector", "Mini Project", "Social"];

  return (
    <div className="App">
      <h1>Resume Generator</h1>
      
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
    </div>
  );
};

export default App;