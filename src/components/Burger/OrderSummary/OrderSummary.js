import React, { Component } from 'react';

import Aux from '../../../hoc/Aux-Win/Aux-win';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentDidUpdate(){
    //     console.log('[Order Summary] will Update');
    // }

    render() { 
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            //Esta Seccion es mia propia donde busco el nombre y lo cambio a español
            let name;
            switch (igKey) {
                case "salad":
                    name = 'ensalada'
                    break;
                case "bacon":
                    name = 'tocino'
                    break;
                case "cheese":
                    name = 'queso'
                    break;
                case "meat":
                    name = 'carne'
                    break;
                default:
                    break;
            }
            //fin de mi seccion. abajo la variable name fue puesta en lugar de igKey.
            return (<li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{name}</span>: {this.props.ingredients[igKey]}
            </li>);
        })

        return (
            <Aux>
                <h3>Tu Orden</h3>
                <p>Una Hamburgesa deliciosa con los Ingredientes: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continuar a Pago</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUAR</Button>
            </Aux>
        );
    }
}; 

export default OrderSummary;