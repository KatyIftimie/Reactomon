import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Header from './components/header/Header';
import Types from './components/Types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <Route exact path='/' >
        <PokemonList />

      </Route>
      <Route path="/types" component={Types} />

    </Router>

    // <Types />
    // <Router>
    //     <div className="App">
    //     <Header />
    //     <Route exact path="/" render={props => (
    //       <React.Fragment>
    //         <Pokemons pokemons={this.state.pokemons} />
    //       </React.Fragment>
    //     )} />
    //   </div>
    // </Router>
  );
}



export default App;
