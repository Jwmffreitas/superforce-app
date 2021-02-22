import React from 'react'
import Button from './Button'

export default class CardNewChar extends React.Component {
    render() {
        return (
            <div className="card-NewChar">
              <img src={this.props.char.imagem}></img>
              <div className="cardInformacoes-NewChar">
                <img src={this.props.char.universo.imagemUniverso}></img>
                <h1 style={{fontFamily: this.props.char.universo.fontUniverso}}>{this.props.char.nome}</h1>
                <div>
                  <p>{this.props.char.descricao}</p>
                  <Button personagem={this.props.char}/>
                </div>
              </div>
            </div>
        )
    }
}