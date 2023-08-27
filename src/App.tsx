import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Home } from './pages/home';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ width: '100%', height: '100%' }}>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
