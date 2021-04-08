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
                document.querySelector(`#${idVideo}`).setAttribute('src', especial1)
            }
            else if(x==2) {
                document.querySelector(`#${idVideo}`).setAttribute('src', especial2)
            }else {
                document.querySelector(`#${idVideo}`).setAttribute('src', especial3)
            }
        }
        return(
            <div id={this.props.personagem.id} className="pop">
                <div className="cabeca">
                    <img src={this.props.personagem.imagem} alt=""/>
                    <div>
                        <h1 style={{fontFamily: this.props.personagem.universo.fontUniverso}}>{this.props.personagem.nome}</h1>
                        <p>{this.props.personagem.descricao}</p>
                    </div>
                </div>
                <div style={{width: '60%', borderBottom: 'white solid 1px', margin: '0 auto'}}></div>
                <div className="boxDovideo">
                    <div>
                        <button onClick={() => trocarSRC(1)}>ESPECIAL 1</button>
                        <button onClick={() => trocarSRC(2)}>ESPECIAL 2</button>
                        <button onClick={() => trocarSRC(3)}>ESPECIAL 3</button>
                    </div>
                    <div>
                        <iframe id={idVideo} style={{width: '400px', height: '230px'}} src={especial1} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                {/*<div>
                    <iframe id={idVideo} style={{boxShadow: 'gray 0px 10px 10px'}} width="560" height="315" src={especial1} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <ul>
                        <li onClick={() => trocarSRC(1)}>Especial 1</li>
                        <li onClick={() => trocarSRC(2)}>Especial 2</li>
                        <li onClick={() => trocarSRC(3)}>Especial 3</li>
                    </ul>
                </div>*/}
                {/*<CardNewChar char={this.props.personagem}/>*/}
            </div>
        )
    }
}