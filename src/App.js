import React from 'react';
import './App.css';
import Label from './objects/Label';
import Hashtag from './components/Hashtag';
import Header from './components/Header';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Label content="Mostrar eventos"/>
  </main>
);

export default App;
