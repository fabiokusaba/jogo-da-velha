import React from 'react';
import './App.css';

import Input from './objects/Input';
import Hashtag from './components/Hashtag';
import Header from './components/Header';


const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Input id="show" value="show" content="Mostrar eventos" />
  </main>
);

export default App;
