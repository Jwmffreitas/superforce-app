import React from 'react'
import './App.css';
import Menu from './Menu'
import Modal from './Modal'
import Lista from './Lista'
import Home from './Home'
import Story from './Story'

import jason from './novosPersonagens'

import imagemLaw from './img/law.png'
import imagemHarley from './img/harley.png'
import imagemStrange from './img/strange.png'
import imagemRaditz from './img/raditz.png'

import imagemLaw2 from './img/law2.png'
import imagemHarley2 from './img/harley2.png'
import imagemStrange2 from './img/strange2.png'
import imagemRaditz2 from './img/raditz2.png'

import imagemOnePiece from './img/onepiece.png'
import imagemDC from './img/dc.png'
import imagemMarvel from './img/marvel.png'
import imagemDragonBall from './img/dragonball.png'

/*var requestURL = './personagens'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var personagens = request.response;
  populateHeader(personagens);
  showHeroes(personagens);
}

function populateHeader(jsonObj) {
  console.log(jsonObj)
}

function showHeroes(jsonObj) {

}*/

export default class App extends React.Component {

/*state = {
  personagens: {}
};*/

componentDidMount() {
    /*fetch('https://jsonplaceholder.typicode.com/todos/1', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
        .then(res => res.json())
        .then(res => {
            this.setState({
                personagens: res
            });
        });*/

        let personagens = {}

        fetch(jason, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:3000'
           }
        })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        personagens = json
        console.log(personagens)
        /*this.setState({
          personagens: json
        })*/
      })
}

  render() {

    var personagens = {
      char1: {
        nome: 'Trafalgar D. Water Law',
        imagem: imagemLaw,
        imagem2: imagemLaw2,
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
        imagem2: imagemHarley2,
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
        imagem2: imagemStrange2,
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
        imagem2: imagemRaditz2,
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
        {/*<Story />*/}
        <Modal char1={personagens.char1.id} char2={personagens.char2.id} char3={personagens.char3.id} char4={personagens.char4.id}/>
        <Lista char1={personagens.char1} char2={personagens.char2} char3={personagens.char3} char4={personagens.char4}/>
      </div>
    )
  }
}
