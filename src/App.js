import React from 'react';
import { Front } from './styles';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Front>
      <Header />
      <Home />
    </Front>
  );
}

export default App;
