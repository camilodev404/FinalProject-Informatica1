import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        return(
            <div>
                <div>
                    <h1 style={{"marginTop":"40px"}}>Bienvenido a la tienda de vehiculos</h1>
                </div>
                <div>
                    <img src='/carros.jpg' alt="" style={{ width: '600px', height: 'auto', marginTop: '20px', marginBottom: '20px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '18px' }}>
                        <strong>Seleccione la Gestion que desea realizar</strong>
                    </p>
                </div>
                <div>
                    <Link to="/vehiculos" className="btn btn-primary">Vehiculos</Link>
                    <Link to="/fabricantes" className="btn btn-primary" style={{ marginLeft: '10px' }}>Fabricantes</Link>
                </div>
            </div>
        )
    }

}

export default Home