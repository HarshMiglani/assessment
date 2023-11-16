import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { updateAnswer, nextStep, prevStep, submitData } from './redux/actions';

const App = () => {
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();

  const handleAnswerChange = (field, value) => {
    dispatch(updateAnswer(step, field, value));
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  
  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleSubmit = () => {
    // Dispatch an action to submit data to the server
    dispatch(submitData());
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      <div>
        <button onClick={handlePrev} disabled={step === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={step === 3}>
          Next
        </button>
        {step === 3 && (
          <button onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
      <div>
        {step}/3
      </div>
    </div>
  );
};

export default App;