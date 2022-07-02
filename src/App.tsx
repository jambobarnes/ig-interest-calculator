import React from 'react';
import Header from './components/Header';
import { Nav } from './components/Nav';
import Calculator from './features/calculator/Calculator';

export default function App() {

  return (
    <>
      <Nav />
      <Header />
      <Calculator />
    </>
  );

}