import React, { Fragment } from 'react'
import Pop from './Pop'

export default class Button extends React.Component {
    render() {
        function openPop() {
            const modal = document.querySelector('.modal')  
            modal.style.display = "block"
            
            document.querySelector('.pop').style.display = "block"
        }

        return(
            <Fragment>
                <button onClick={openPop}>{this.props.personagem.nome}</button>
                <Pop personagem={this.props.personagem}/>
            </Fragment>
        )
    }
}