import React from 'react';
import stl from './App.module.css';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className={stl.App}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
