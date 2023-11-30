import React, { Component } from "react";
import VehiculoService from '../services/VehiculoService';

class ViewVehiculo extends Component{

    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            vehiculo: {},
        }

    }

    componentDidMount(){
        VehiculoService.getVehiculoById(this.state.id)
            .then((res) => {
                this.setState({ vehiculo: res.data.vehiculo }, () => {
                });
            })
            .catch((error) => {
                console.error("Error fetching vehicle:", error);
            }
        );
    }

    cancel() {
        this.props.history.push('/vehiculos'); 
    }

    render(){

        return(
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Vehiculo Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Vehiculo Id:</label>
                            <div>{this.state.vehiculo.id}</div>
                        </div>
                        <div className="row">
                            <label>Fabricante:</label>
                            <div>{this.state.vehiculo.id_fab}</div>
                        </div>
                        <div className="row">
                            <label>Modelo:</label>
                            <div>{this.state.vehiculo.modelo}</div>
                        </div>
                        <div className="row">
                            <label>Color:</label>
                            <div>{this.state.vehiculo.color}</div>
                        </div>
                        <div className="row">
                            <label>Precio:</label>
                            <div>{this.state.vehiculo.precio}</div>
                        </div>
                        <div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop:"10px" }}>Return</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ViewVehiculo;