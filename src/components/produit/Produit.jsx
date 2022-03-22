import React, { Component } from 'react';

class Produit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>

            <h3>{this.props.produit.nom}{this.props.produit.prix} €   </h3>
           
            <p> x0  </p>
            <button onClick={() => this.handleButtonClick("")}>-</button>
            <button onClick={() => this.handleButtonClick("")}>+</button>
            
            </>
         );
    }
}
 
export default Produit;