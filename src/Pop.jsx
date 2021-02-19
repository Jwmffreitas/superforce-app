import React from 'react'
import CardNewChar from './CardNewChar'

export default class Pop extends React.Component {
    render() {
        return(
            <div id={this.props.personagem.id} className="pop">
                <CardNewChar char={this.props.personagem}/>
            </div>
        )
    }
}