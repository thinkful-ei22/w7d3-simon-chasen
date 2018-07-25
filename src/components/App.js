import React from 'react';
import Header from './header';
import ButtonClick from './buttonClick';
import './App.css';

export default function App(props) {
  return (
    <div className="app">
      <Header />
      <ButtonClick />
    </div>
  );
}
