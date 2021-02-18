import React from 'react'
import './App.css';
import CardChar from './CardChar';
import Menu from './Menu'
import Pop from './Pop';
import Modal from './Modal'

import imagemLaw from './img/law.png'
import imagemHarley from './img/harley.png'
import imagemRaditz from './img/raditz.png'
import imagemOnePiece from './img/onepiece.png'
import imagemDC from './img/dc.png'
import imagemDragonBall from './img/dragonball.png'

export default class App extends React.Component {
  render() {
    var personagens = {
      char1: {
        nome: 'Trafalgar D. Water Law',
        imagem: imagemLaw,
        descricao: 'Trafalgar D. Water Law, mais comumente conhecido como apenas Trafalgar Law e por seu epíteto como o "Cirurgião da Morte", é um pirata do North Blue e capitão e médico dos Piratas Heart. Ele é um dos doze piratas que são referidos como a "Pior Geração". Ele se tornou um dos Shichibukai durante o timeskip, mas sua posição foi revogada por se aliar aos Piratas do Chapéu de Palha e derrubar Donquixote Doflamingo. Law, como muitos outros piratas, sonha em encontrar o One Piece.',
        universo: {
          imagemUniverso: imagemOnePiece,
          fontUniverso: 'OnePiece'
        }
      },

      char2: {
        nome: 'Harleen Quinzel',
        imagem: imagemHarley,
        descricao: 'Harley Quinn é uma mulher pequena com pele branca e olhos azuis. Ela tem cabelo loiro comprido, geralmente preso em um estilo rabo de cavalo, tingido na parte de baixo em tons de azul e rosa. Ela ocasionalmente vai usar para baixo quando ela se veste, como durante a festa Legion of Doom. Ela é freqüentemente vista usando batom vermelho escuro, sombra rosa e azul, rímel preto e um sorriso psicótico. Antes de sua transformação em Harley Quinn, ela é retratada com uma pele de cor normal, seu cabelo geralmente preso em um coque e menos maquiagem pesada.',
        universo: {
          imagemUniverso: imagemDC,
          fontUniverso: 'SuperSmash'
        }
      },

      char3: {
        nome: 'Raditz',
        imagem: imagemRaditz,
        descricao: 'Ao contrário de seu irmão Goku, Raditz é mau e brutal como muitos guerreiros Saiyajin. Ele dá, porém, a chance a seu irmão de participar do império de Freeza, e só atacando Goku quando ele recusa e protesta contra seus planos. Ele gosta de zombar de oponentes mais fracos, e de brincar com eles antes de finalmente os matarem; mostrado quando ele zomba de Piccolo, e tendo grande prazer de ver seu próprio irmão Goku e sobrinho Gohan com dor. Ele é incrivelmente manipulador, implorando a Goku que solte sua cauda quando Goku a aperta. Goku o faz e Raditz o ataca tremendamente, e começa a esmagar suas costelas enquanto ri.',
        universo: {
          imagemUniverso: imagemDragonBall,
          fontUniverso: 'SuperSmash'
        }
      }
    }

    return(
      <div>
        <Modal />
        <h1>NOvos Personagens:</h1>
        <div>
          <CardChar char={personagens.char1}/>
          <CardChar char={personagens.char2}/>
          <CardChar char={personagens.char3}/>
        </div>
      </div>
    )
  }
}
