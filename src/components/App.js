import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../redux/resumeSlice'; // Adjust this if your redux folder is elsewhere
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Social from './Social';
import Preview from './Preview';
import '../styles/App.css'; // Adjust the CSS path depending on where App.css is

function App() {
  const step = useSelector((state) => state.resume.step);
  const dispatch = useDispatch();

  const renderStep = () => {
    switch (step) {
      case 1: return <Profile />;
      case 2: return <Education />;
      case 3: return <Skills />;
      case 4: return <Projects />;
      case 5: return <Social />;
      case 6: return <Preview />;
      default: return <Profile />;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>RESUME GENERATOR</h1>
      </header>
      
      <main className="form-wrapper">
        {renderStep()}
      </main>

      {step < 6 && (
        <div className="navigation-buttons">
          <button id="back" onClick={() => dispatch(prevStep())} disabled={step === 1}>BACK</button>
          <button id="next" onClick={() => dispatch(nextStep())}>NEXT</button>
          <button id="save_continue" onClick={() => dispatch(nextStep())}>SAVE AND CONTINUE</button>
        </div>
      )}
    </div>
  );
}

export default App;