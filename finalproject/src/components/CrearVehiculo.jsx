import React, { Component } from "react";
import VehiculoService from '../services/VehiculoService';

class CrearVehiculo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fabricantes: [],
            id: '',
            id_fab: 0,
            color: '',
            precio: '',
            modelo: ''
        }

        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.changeFabricanteoHandler = this.changeFabricanteoHandler.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeModeloHandler = this.changeModeloHandler.bind(this);
        this.changePrecioHandler = this.changePrecioHandler.bind(this);
        this.saveVehiculo = this.saveVehiculo.bind(this);
    }

    saveVehiculo = (e) => {
        e.preventDefault();
        let vehiculo = {
            id: parseInt(this.state.id),
            id_fab: parseInt(this.state.id_fab),
            modelo: this.state.modelo,
            color:this.state.color,
            precio: parseInt(this.state.precio)
        }

        VehiculoService.createVehiculo(vehiculo)
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

    changeFabricanteoHandler = (event) => {
        this.setState({ [event.target.name]: parseInt(event.target.value) });
    };

    changeIdHandler(event){
        const inputValue = event.target.value;
        if (!isNaN(inputValue) ) {
            this.setState({ id: inputValue });
        }
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

    componentDidMount() {

        VehiculoService.getFabricantes()
            .then((res) => {
                if (res.status === 200 && res.data) {
                    this.setState({ fabricantes: Array.isArray(res.data.fabricantes) ? res.data.fabricantes : [] });
                } else {
                    throw new Error('Respuesta no válida del servidor para fabricantes');
                }
            })
            .catch((error) => {
                console.error("Error de red al obtener fabricantes:", error);
            });

    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div style={{"marginTop": "50px"}} className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 style={{"marginTop": "20px"}} className="text-center">Agregar Vehiculo</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Id:</label>
                                        <input placeholder="Id" name="id" className="form-control" value={this.state.id} onChange={this.changeIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Fabricante</label>
                                        <select
                                            name="id_fab"
                                            className="form-control"
                                            value={this.state.id_fab}
                                            onChange={this.changeFabricanteoHandler}
                                        >
                                            <option key="default" value="">Seleccione un fabricante</option>
                                            {this.state.fabricantes.map((fabricante, index) => (
                                                <option key={index} value={fabricante.id_fab}>
                                                    {fabricante.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
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
                                    <button className="btn btn-success" onClick={this.saveVehiculo} style={{marginTop: "10px"}} >Save</button>
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

export default CrearVehiculo;
