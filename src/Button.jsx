import React, { Fragment } from 'react'
import Pop from './Pop'

export default class Button extends React.Component {
    render() {
        function openPop() {
            const modal = document.querySelector('.modal')  
            modal.style.display = "block"
            
            document.querySelector('#Raditz').style.display = "block"
        }

        return(
            <Fragment>
                <button onClick={openPop}>Visualizar</button>
                <Pop id={this.props.personagem.nome} personagem={this.props.personagem}/>
            </Fragment>
        )
    }
}