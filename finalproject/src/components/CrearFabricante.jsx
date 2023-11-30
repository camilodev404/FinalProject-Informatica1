import React, { Component } from "react";
import FabricanteService from '../services/FabricanteService';

class CrearFabricante extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_fab: '',
            nombre: '',
            pais: '',
        }

        this.changeNombreHandler = this.changeNombreHandler.bind(this);
        this.changeIdFabHandler = this.changeIdFabHandler.bind(this);
        this.changePaisHandler = this.changePaisHandler.bind(this);
        this.saveFabricante = this.saveFabricante.bind(this);
    }

    saveFabricante = (e) => {
        e.preventDefault();
        let fabricante = {
            id_fab: parseInt(this.state.id_fab),
            nombre: this.state.nombre,
            pais:this.state.pais
        }

        FabricanteService.createFabricante(fabricante)
            .then((res) => {
                this.props.history.push('/fabricantes');
            })
            .catch((error) => {
                console.error("Error al guardar el fabricante:", error);
            });
    }

    changePaisHandler(event) {
        this.setState({ pais: event.target.value });
    }

    changeNombreHandler = (event) => {
        this.setState({ nombre: event.target.value });
    };

    changeIdFabHandler(event){
        const inputValue = event.target.value;
        if (!isNaN(inputValue) ) {
            this.setState({ id_fab: inputValue });
        }
    }

    cancel() {
        this.props.history.push('/fabricantes'); 
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div style={{"marginTop": "50px"}} className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 style={{"marginTop": "20px"}} className="text-center">Agregar Fabricante</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Id:</label>
                                        <input placeholder="Id" name="id" className="form-control" value={this.state.id_fab} onChange={this.changeIdFabHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input placeholder="Nombre" name="Nombre" className="form-control" value={this.state.nombre} onChange={this.changeNombreHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Pais</label>
                                        <input placeholder="Pais" name="Pais" className="form-control" value={this.state.pais} onChange={this.changePaisHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveFabricante} style={{marginTop: "10px"}} >Save</button>
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

export default CrearFabricante;
