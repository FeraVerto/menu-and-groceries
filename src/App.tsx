//styles
import stl from './App.module.css';
//components
import { Content } from './Pages/Content/Content';
import { Navigation } from './Pages/Navigation/Navigation';
import { Tags } from './Pages/Tags/Tags';

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
