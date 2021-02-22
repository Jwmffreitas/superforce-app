import React from 'react'
import CardNewChar from './CardNewChar'

export default class Pop extends React.Component {
    render() {
        return(
            <div id={this.props.personagem.id} className="pop">
                <h1>{this.props.personagem.nome}</h1>
                {/*<CardNewChar char={this.props.personagem}/>*/}
            </div>
        )
    }
}