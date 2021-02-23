import React from 'react'
import './App.css';
import CardNewChar from './CardNewChar';
import Menu from './Menu'
import Modal from './Modal'
import Lista from './Lista'
import Home from './Home'

import imagemLaw from './img/law.png'
import imagemHarley from './img/harley.png'
import imagemStrange from './img/strange.png'
import imagemRaditz from './img/raditz.png'

import imagemOnePiece from './img/onepiece.png'
import imagemDC from './img/dc.png'
import imagemMarvel from './img/marvel.png'
import imagemDragonBall from './img/dragonball.png'

import imagemMugen from './img/mugen.png'

export default class App extends React.Component {
  render() {
    var personagens = {
      char1: {
        nome: 'Trafalgar D. Water Law',
        imagem: imagemLaw,
        descricao: 'Trafalgar D. Water Law, mais comumente conhecido como apenas Trafalgar Law e por seu epíteto como o "Cirurgião da Morte", é um pirata do North Blue e capitão e médico dos Piratas Heart. Ele é um dos doze piratas que são referidos como a "Pior Geração". Ele se tornou um dos Shichibukai durante o timeskip, mas sua posição foi revogada por se aliar aos Piratas do Chapéu de Palha e derrubar Donquixote Doflamingo. Law, como muitos outros piratas, sonha em encontrar o One Piece.',
        id: 'law',
        especiais: {
          especial1: 'https://www.youtube.com/embed/Oo5qcWp3TSo',
          especial2: 'https://www.youtube.com/embed/2EpMWAsVkrw',
          especial3: 'https://www.youtube.com/embed/jwdouLWnAXY',
        },
        universo: {
          imagemUniverso: imagemOnePiece,
          fontUniverso: 'OnePiece'
        }
      },

      char2: {
        nome: 'Harleen Quinzel',
        imagem: imagemHarley,
        descricao: 'Harley Quinn é uma mulher pequena com pele branca e olhos azuis. Ela tem cabelo loiro comprido, geralmente preso em um estilo rabo de cavalo, tingido na parte de baixo em tons de azul e rosa. Ela ocasionalmente vai usar para baixo quando ela se veste, como durante a festa Legion of Doom. Ela é freqüentemente vista usando batom vermelho escuro, sombra rosa e azul, rímel preto e um sorriso psicótico. Antes de sua transformação em Harley Quinn, ela é retratada com uma pele de cor normal, seu cabelo geralmente preso em um coque e menos maquiagem pesada.',
        id: 'harleen',
        especiais: {
          especial1: '',
          especial2: '',
          especial3: '',
        },
        universo: {
          imagemUniverso: imagemDC,
          fontUniverso: 'SuperSmash'
        }
      },

      char3: {
        nome: 'Stephen Strange',
        imagem: imagemStrange,
        descricao: 'Doutor Stephen Vincent Strange, mais conhecido como Doutor Estranho. Doutor Estranho serve como o Mago Supremo, o principal protetor da Terra contra ameaças mágicas e místicas. Inspirado por histórias de magia negra e o programa de rádio Chandu, the Magician, Strange foi criado durante a Era de Prata das histórias em quadrinhos americanas para trazer um tipo diferente de personagem e temas de misticismo para a Marvel Comics.',
        id: 'strange',
        especiais: {
          especial1: '',
          especial2: '',
          especial3: '',
        },
        universo: {
          imagemUniverso: imagemMarvel,
          fontUniverso: 'SuperSmash'
        }
      },

      char4: {
        nome: 'Raditz',
        imagem: imagemRaditz,
        descricao: 'Ao contrário de seu irmão Goku, Raditz é mau e brutal como muitos guerreiros Saiyajin. Ele dá, porém, a chance a seu irmão de participar do império de Freeza, e só atacando Goku quando ele recusa e protesta contra seus planos. Ele gosta de zombar de oponentes mais fracos, e de brincar com eles antes de finalmente os matarem; mostrado quando ele zomba de Piccolo, e tendo grande prazer de ver seu próprio irmão Goku e sobrinho Gohan com dor. Ele é incrivelmente manipulador, implorando a Goku que solte sua cauda quando Goku a aperta. Goku o faz e Raditz o ataca tremendamente, e começa a esmagar suas costelas enquanto ri.',
        id: 'raditz',
        especiais: {
          especial1: '',
          especial2: '',
          especial3: '',
        },
        universo: {
          imagemUniverso: imagemDragonBall,
          fontUniverso: 'SuperSmash'
        }
      }
    }

    return(
      <div>
        <Menu />
        <Home />
        {/*<section className="story">
            <div>
              <h1>Story</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus. Quis hendrerit dolor magna eget est lorem ipsum dolor. Semper auctor neque vitae tempus. Pellentesque habitant morbi tristique senectus et netus et. Aenean pharetra magna ac placerat. Et leo duis ut diam quam nulla porttitor massa. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eu mi bibendum neque egestas. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Enim nunc faucibus a pellentesque. Tristique senectus et netus et. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Amet dictum sit amet justo donec enim.</p>
            </div>
            <div>
              <img src={imagemMugen}/>
            </div>
    </section>*/}
        <Modal char1={personagens.char1.id} char2={personagens.char2.id} char3={personagens.char3.id} char4={personagens.char4.id}/>
        <Lista char1={personagens.char1} char2={personagens.char2} char3={personagens.char3} char4={personagens.char4}/>
      </div>
    )
  }
}
