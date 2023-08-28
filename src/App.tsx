import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Home } from './pages/home';
import { store } from './store';
import { FormProvider, useForm } from 'react-hook-form';

function App() {
  const methods = useForm();
  return (
    <Provider store={store}>
      <FormProvider {...methods}>
        <div className="App" style={{ width: '100%', height: '100%' }}>
          <Home />
        </div>
      </FormProvider>
    </Provider>
  );
}

export default App;
