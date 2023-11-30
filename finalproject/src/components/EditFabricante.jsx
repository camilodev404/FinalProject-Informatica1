import React, { Component } from "react";
import FabricanteService from '../services/FabricanteService';

class EditFabricante extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_fab: this.props.match.params.id,
            nombre: '',
            pais: ''
        };

        this.changeNombreHandler = this.changeNombreHandler.bind(this);
        this.changePaisHandler = this.changePaisHandler.bind(this);
        this.saveFabricante = this.saveFabricante.bind(this);
    }

    componentDidMount() {
        FabricanteService.getFabricanteById(this.state.id_fab)
            .then((res) => {
                let fabricante = res.data.fabricante;
                this.setState({
                    id_fab: fabricante.id_fab,
                    nombre: fabricante.nombre,
                    pais: fabricante.pais
                });
            })
            .catch((error) => {
                console.log("Error al obtener el fabricante:", error);
            });
    }
    

    saveFabricante = (e) => {
        e.preventDefault();
        let fabricante = {
            id_fab: this.state.id_fab,
            nombre: this.state.nombre,
            pais: this.state.pais
        }

        FabricanteService.updateFabricante(fabricante.id_fab, fabricante)
            .then((res) => {
                this.props.history.push('/fabricantes');
            })
            .catch((error) => {
                console.error("Error al guardar el fabricante:", error);
            });
    }

    changeNombreHandler(event) {
        this.setState({ nombre: event.target.value });
    }

    changePaisHandler(event){
        this.setState({ pais: event.target.value });
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
                            <h3 style={{"marginTop": "20px"}} className="text-center">Editar Fabricante</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input placeholder="Nombre" name="Nombre" className="form-control" value={this.state.nombre} onChange={this.changeNombreHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Pais</label>
                                        <input placeholder="Pais" name="Pais" className="form-control" value={this.state.pais} onChange={this.changePaisHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveFabricante} style={{marginTop: "10px", marginRight: "10px"}} >Save</button>
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

export default EditFabricante;
