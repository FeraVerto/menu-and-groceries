import React from 'react';
import stl from './App.module.css';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { Navigation } from './Navigation/Navigation';

function App() {
  return (
    <div className={stl.App}>
      <Header />
      <Content />
      <Navigation />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
