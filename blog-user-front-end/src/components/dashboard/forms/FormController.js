import { useState } from 'react';
import BlogForm from './BlogForm';

import React from 'react';

const FormController = () => {
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = () => setStep(step + 1);
  // Go back to prev step
  const prevStep = () => setStep(step - 1);

  return <div>FormController</div>;
};

export default FormController;
