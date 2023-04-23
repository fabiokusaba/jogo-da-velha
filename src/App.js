import React from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import Hashtag from './components/Hashtag';
import Header from './components/Header';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />
  </main>
);

export default App;
