import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { FormProvider, useForm } from 'react-hook-form';

function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="App" style={{ width: '100%', height: '100%' }}>
        <Home />
      </div>
    </FormProvider>
  );
}

export default App;
