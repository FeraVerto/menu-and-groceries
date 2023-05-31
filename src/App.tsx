import React from 'react';
import stl from './App.module.css';
import { Content } from './Content/Content';
import { Navigation } from './Navigation/Navigation';
import { Tags } from './Tags/Tags';

function App() {
  return (
    <div className={stl.App}>
      <Navigation />
      <Content />
      <Tags />
    </div>
  );
}

export default App;
