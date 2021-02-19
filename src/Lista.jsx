import React, { Fragment } from 'react'
import Modal from './Modal'
import CardChar from './CardChar'

import imagemAce from './img/ace.png'
import imagemOnePiece from './img/onepiece.png'

export default class Lista extends React.Component {
    render(){
        var personagens = {
            char1: {
                nome: 'Portugas D. Ace',
                imagem: imagemAce,
                descricao: 'Portgas D. Ace, nascido como Gol D. Ace e apelidado de Ace dos Punhos de Fogo, foi o irmão mais velho adotivo de Luffy e Sabo, e filho do falecido Rei dos Piratas, Gol D. Roger e sua amante, Portgas D. Rouge. Ace era o comandante da 2ª divisão dos Piratas do Barba Branca e capitão dos Piratas Spade.',
                id: 'ace',
                universo: {
                  imagemUniverso: imagemOnePiece,
                  fontUniverso: 'OnePiece'
                }
              }
        }

        return(
            <Fragment>
                <Modal char1={personagens.char1.id}/>
                <div className="lista">
                    <CardChar char={personagens.char1}/>
                </div>
            </Fragment>
        )
    }
}