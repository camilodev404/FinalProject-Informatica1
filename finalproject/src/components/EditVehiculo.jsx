import React, { Component } from "react";
import VehiculoService from '../services/VehiculoService';

class EditVehiculo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            id_fab: 0,
            color: '',
            precio: 0,
            modelo: ''
        };

        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.changeModeloHandler = this.changeModeloHandler.bind(this);
        this.changePrecioHandler = this.changePrecioHandler.bind(this);
        this.saveVehiculo = this.saveVehiculo.bind(this);
    }

    componentDidMount() {
        VehiculoService.getVehiculoById(this.state.id)
            .then((res) => {
                let vehiculo = res.data.vehiculo;
                this.setState({
                    id: vehiculo.id,
                    id_fab: vehiculo.id_fab,
                    color: vehiculo.color,
                    precio: vehiculo.precio,
                    modelo: vehiculo.modelo
                });
            })
            .catch((error) => {
                console.log("Error al obtener el vehículo:", error);
            });
    }
    

    saveVehiculo = (e) => {
        e.preventDefault();
        let vehiculo = {
            id: this.state.id,
            id_fab: this.state.id_fab,
            color: this.state.color,
            modelo: this.state.modelo,
            precio: this.state.precio
        }

        VehiculoService.updateVehiculo(vehiculo.id, vehiculo)
            .then((res) => {
                this.props.history.push('/vehiculos');
            })
            .catch((error) => {
                console.error("Error al guardar el vehículo:", error);
            });
    }

    changeColorHandler(event) {
        this.setState({ color: event.target.value });
    }

    changeModeloHandler(event){
        this.setState({ modelo: event.target.value });
    }

    changePrecioHandler(event){
        const inputValue = event.target.value;
        if (!isNaN(inputValue) ) {
            this.setState({ precio: inputValue });
        }
    }

    cancel() {
        this.props.history.push('/vehiculos'); 
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div style={{"marginTop": "50px"}} className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 style={{"marginTop": "20px"}} className="text-center">Editar Vehiculo</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Modelo</label>
                                        <input placeholder="Modelo" name="Modelo" className="form-control" value={this.state.modelo} onChange={this.changeModeloHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Color</label>
                                        <input placeholder="Color" name="Color" className="form-control" value={this.state.color} onChange={this.changeColorHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio</label>
                                        <input placeholder="Precio" name="Precio" className="form-control" value={this.state.precio} onChange={this.changePrecioHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveVehiculo} style={{marginTop: "10px", marginRight: "10px"}} >Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop:"10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditVehiculo;
