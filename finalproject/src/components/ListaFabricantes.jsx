import React, { Component } from "react";
import FabricanteService from '../services/FabricanteService';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ListaFabricantes extends Component{

    constructor(props){
        super(props)
        this.state = {
            fabricantes:[],
        }

        this.viewFabricante = this.viewFabricante.bind(this)
        this.editFabricante = this.editFabricante.bind(this)
        this.addFabricante = this.addFabricante.bind(this)

    }

    componentDidMount(){

        FabricanteService.getFabricantes()
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

    addFabricante() {
        this.props.history.push('/crearfabricante');
    }           

    editFabricante(id) {
        this.props.history.push(`/editarfabricante/${id}`);
    }
    viewFabricante(id) {
        this.props.history.push(`/verfabricante/${id}`);
    }

    render(){

        return (
            <div>
                <h2 className="text-center" style={{"marginTop": "50px"}}>Lista de Fabricantes <Link to="/" className="btn btn-primary bg-black float-right">Regresar</Link></h2>
                <div className="row">
                    <button onClick={this.addFabricante} className="btn btn-primary bg-black" style={{"marginTop": "20px"}}>Add Fabricante</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    Nombre
                                </th>
                                <th>
                                    Pais
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.fabricantes.map((fabricante) => (
                                    <tr key={fabricante.id_fab}>
                                        <td>{fabricante.nombre}</td>
                                        <td>{fabricante.pais}</td>
                                        <td>
                                            <button style={{ marginLeft: "10px" }} onClick={()=> this.viewFabricante(fabricante.id_fab)} className="btn btn-primary bg-black" >View</button>
                                            <button style={{ marginLeft: "10px" }} onClick={()=> this.editFabricante(fabricante.id_fab)} className="btn btn-primary" >Editar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListaFabricantes