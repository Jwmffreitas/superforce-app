import React from 'react'

export default class Pop extends React.Component {
    render() {
        return(
            <div id={this.props.personagem.nome} className="pop">
                <p>{this.props.personagem.nome}</p>
            </div>
        )
    }
}