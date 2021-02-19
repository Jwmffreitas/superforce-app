import React, { Fragment } from 'react'
import Modal from './Modal'
import CardChar from './CardChar'

import imagemAce from './img/ace.png'
import imagemOnePiece from './img/onepiece.png'

import imagemVegeta from './img/vegeta.png'
import imagemDragonBall from './img/dragonball.png'

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
              },
             
              char2: {
                nome: 'Vegeta SSGSS',
                imagem: imagemVegeta,
                descricao: 'Régio, egoísta e cheio de orgulho, Vegeta já foi um guerreiro implacável de sangue frio e um assassino, mas depois abandona seu papel na Força Frieza, ao invés de optar por permanecer e viver na Terra. Seu personagem evolui de vilão para anti-herói e depois para herói ao longo da série, lutando repetidamente ao lado dos guerreiros mais poderosos do universo para proteger sua nova casa e superar Goku em poder.',
                id: 'vegeta',
                universo: {
                  imagemUniverso: imagemDragonBall,
                  fontUniverso: 'SuperSmash'
                }
              },
        }

        return(
            <Fragment>
                <Modal char1={personagens.char1.id} char2={personagens.char2.id}/>
                <div className="lista">
                    <CardChar char={personagens.char1}/>
                    <CardChar char={personagens.char2}/>
                </div>
            </Fragment>
        )
    }
}