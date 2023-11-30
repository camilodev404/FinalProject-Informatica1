import React, { Component } from "react";
import FabricanteService from '../services/FabricanteService';

class ViewFabricante extends Component{

    constructor(props){
        super(props)

        this.state={
            id_fab: this.props.match.params.id,
            fabricante: {},
        }

    }

    componentDidMount(){
        FabricanteService.getFabricanteById(this.state.id_fab)
            .then((res) => {
                this.setState({ fabricante: res.data.fabricante }, () => {
                });
            })
            .catch((error) => {
                console.error("Error fetching fabricante:", error);
            }
        );
    }

    cancel() {
        this.props.history.push('/fabricantes'); 
    }

    render(){

        return(
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Fabricante Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Fabricante Id:</label>
                            <div>{this.state.fabricante.id_fab}</div>
                        </div>
                        <div className="row">
                            <label>Nombre:</label>
                            <div>{this.state.fabricante.nombre}</div>
                        </div>
                        <div className="row">
                            <label>Pais:</label>
                            <div>{this.state.fabricante.pais}</div>
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

export default ViewFabricante;