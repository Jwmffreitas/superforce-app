import React from 'react'
import CardNewChar from './CardNewChar'

export default class Pop extends React.Component {
    render() {
        return(
            <div id={this.props.personagem.id} className="pop">
                <div style={{boxShadow: 'gray 5px 0px 5px'}}>
                    <img src={this.props.personagem.imagem}></img>
                </div>
                <div>
                    <ul>
                        <li>Especial 1</li>
                        <li>Especial 2</li>
                        <li>Especial 3</li>
                    </ul>
                </div>
                {/*<CardNewChar char={this.props.personagem}/>*/}
            </div>
        )
    }
}