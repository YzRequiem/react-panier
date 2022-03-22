import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Accueil from './pages/Accueil';
import Catalogue from './pages/Catalogue';
import Panier from './pages/Panier';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { produits: [] }
  }

  async componentDidMount(){
    const response = await fetch("datas/datas.json");
    const datas = await response.json();
    this.setState({produits: datas});
  }

  render() { 
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Catalogue' element={<Catalogue produits={this.state.produits} /> }  />
          <Route path='/Panier' element={ <Panier/> }  />
          <Route path='/' element={ <Accueil/> }  />
        </Routes>
      </BrowserRouter>
      );
  }
}
 
export default App;


