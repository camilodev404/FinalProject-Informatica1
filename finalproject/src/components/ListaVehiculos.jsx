import React, { Component } from "react";
import VehiculoService from '../services/VehiculoService';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ListaVehiculos extends Component{

    constructor(props){
        super(props)
        this.state = {
            vehiculos:[],
            fabricantes:[]
        }

        this.deleteVehiculo = this.deleteVehiculo.bind(this)
        this.viewVehiculo = this.viewVehiculo.bind(this)
        this.editVehiculo = this.editVehiculo.bind(this)
        this.addVehiculo = this.addVehiculo.bind(this)

    }

    componentDidMount(){
        VehiculoService.getVehiculos()
        .then((res) => {
            // Procesa la respuesta exitosa
            if (res.status === 200 && res.data) {
                this.setState({ vehiculos: Array.isArray(res.data.vehiculos) ? res.data.vehiculos : [] });
            } else {
                throw new Error('Respuesta no válida del servidor');
            }
        })
        .catch((error) => {
            // Maneja el error de red
            console.error("Error de red:", error);
        });

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

    getNombreFabricante(idFab) {
        const fabricante = this.state.fabricantes.find((fab) => fab.id_fab === idFab);
        return fabricante ? fabricante.nombre : 'Desconocido';
    }

    deleteVehiculo(id){
        VehiculoService.deletVehiculo(id)
        .then((res)=>{
            this.setState({vehiculos:this.state.vehiculos.filter(vehiculo => vehiculo.id !== id)})
        })
    }
    addVehiculo() {
        this.props.history.push('/crearvehiculo');
    }           

    editVehiculo(id) {
        this.props.history.push(`/editarvehiculo/${id}`);
    }
    viewVehiculo(id) {
        this.props.history.push(`/vervehiculo/${id}`);
    }

    render(){

        return (
            <div>
                <h2 className="text-center" style={{"marginTop": "50px"}}>Lista de Vehiculos <Link to="/" className="btn btn-primary bg-black float-right">Regresar</Link></h2>
                <div className="row">
                    <button onClick={this.addVehiculo} className="btn btn-primary bg-black" style={{"marginTop": "20px"}}>Add Vehiculo</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    Fabricante
                                </th>
                                <th>
                                    Modelo
                                </th>
                                <th>
                                    Precio $
                                </th>
                                <th>
                                    Color
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.vehiculos.map((vehiculo) => (
                                    <tr key={vehiculo.id}>
                                        <td>{this.getNombreFabricante(vehiculo.id_fab)}</td>
                                        <td>{vehiculo.modelo}</td>
                                        <td>{vehiculo.precio}</td>
                                        <td>{vehiculo.color}</td>
                                        <td>
                                            <button style={{ marginLeft: "10px" }} onClick={()=> this.viewVehiculo(vehiculo.id)} className="btn btn-primary bg-black" >View</button>
                                            <button style={{ marginLeft: "10px" }} onClick={()=> this.editVehiculo(vehiculo.id)} className="btn btn-primary" >Editar</button>
                                            <button style={{ marginLeft: "10px" }} onClick={()=> this.deleteVehiculo(vehiculo.id)} className="btn btn-danger" >Delete</button>
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

export default ListaVehiculos