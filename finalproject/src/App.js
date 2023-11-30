import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListaVehiculos from './components/ListaVehiculos';
import CrearVehiculo from './components/CrearVehiculo';
import ViewVehiculo from './components/ViewVehiculo';
import EditVehiculo from './components/EditVehiculo';
import Home from './components/Home';
import ListaFabricantes from './components/ListaFabricantes';
import ViewFabricante from './components/ViewFabricante';
import CrearFabricante from './components/CrearFabricante';
import EditFabricante from './components/EditFabricante';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <div className='container'>
          <Switch>
          <Route path="/" exact component={Home}></Route>
            <Route path="/vehiculos" exact component={ListaVehiculos}></Route>
            <Route path="/crearvehiculo" exact component={CrearVehiculo}></Route>
            <Route path="/vervehiculo/:id" exact component={ViewVehiculo}></Route>
            <Route path="/editarvehiculo/:id" exact component={EditVehiculo}></Route>
            <Route path="/fabricantes" exact component={ListaFabricantes}></Route>
            <Route path="/verfabricante/:id" exact component={ViewFabricante}></Route>
            <Route path="/crearfabricante" exact component={CrearFabricante}></Route>
            <Route path="/editarfabricante/:id" exact component={EditFabricante}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
