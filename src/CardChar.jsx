import React from 'react'
import Button from './Button'

export default class CardChar extends React.Component {
    render(){
        return(
            <div className="cardChar">
                <img src={this.props.char.imagem}></img>
                <Button personagem={this.props.char}/>
            </div>
        )
    }
}