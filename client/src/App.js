import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import Detail from './components/Detail.jsx';
import PokemonCreated from './components/PokemonCreated.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={LandingPage} />
      <Route exact path={'/pokemons'} component={Home} />
      <Route exact path={'/pokemons/:id'} component={Detail} />
      <Route path={'/created'} component={PokemonCreated} />
    </div>
  );
}

export default App;
