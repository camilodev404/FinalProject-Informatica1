import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class HeaderComponent extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        const titleStyle = {
            fontFamily: 'Gothic',
            fontSize: '6em',
            color: 'white',
        };

        return(
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-black">
                        <div className="mx-auto">
                            <h1 style={titleStyle} >Management Car Store</h1>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }

}

export default HeaderComponent