import React from 'react'
import { useSelector } from 'react-redux';
import './App.css'
import { LandingPage } from './features/landingPage/LandingPage'
import { choseToProceed as choseToProceedSelector } from './features/workflow/workflowSlice'
import { WorkflowStepper } from './features/workflow/WorkflowStepper';

function App() {
  const choseToProceed = useSelector(choseToProceedSelector)
  return (
    <div className="App">
      <header className="App-header">
        {
          choseToProceed
            ? <WorkflowStepper />
            : <LandingPage />
        }
        
      </header>
    </div>
  );
}

export default App;
