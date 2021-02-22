import React from 'react'
import CardNewChar from './CardNewChar'

export default class Pop extends React.Component {
    render() {
        var especial1 = this.props.personagem.especiais.especial1
        var especial2 = this.props.personagem.especiais.especial2
        var especial3 = this.props.personagem.especiais.especial3

        var idVideo = `${this.props.personagem.id}video`

        function trocarSRC(x) {
            if(x==1) {
                document.querySelector(idVideo).setAttribute('src', especial1)
            }
            else if(x==2) {
                document.querySelector(idVideo).setAttribute('src', especial2)
            }
        }
        return(
            <div id={this.props.personagem.id} className="pop">
                <div style={{boxShadow: 'gray 5px 0px 5px'}}>
                <iframe id={idVideo} width="560" height="315" src={especial1} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <ul>
                        <li>Especial 1</li>
                        <li onClick={trocarSRC}>Especial 2</li>
                        <li>Especial 3</li>
                    </ul>
                </div>
                {/*<CardNewChar char={this.props.personagem}/>*/}
            </div>
        )
    }
}