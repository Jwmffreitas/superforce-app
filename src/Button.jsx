import React, { Fragment } from 'react'
import Pop from './Pop'

export default class Button extends React.Component {
    render() {
        var personagemID = this.props.personagem.id
        console.log(personagemID)

        function openPop() {
            const modal = document.querySelector('.modal')  
            modal.style.display = "block"
            
            document.querySelector(`#${personagemID}`).style.display = "grid"
        }

        return(
            <Fragment>
                <button onClick={openPop}>Visualizar</button>
                <Pop personagem={this.props.personagem}/>
            </Fragment>
        )
    }
}