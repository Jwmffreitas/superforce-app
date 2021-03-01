import React from 'react'
import Logo from './img/SuperForce.png'

export default class Menu extends React.Component {
    render(){
        return(
            <header>
                <img src={Logo}></img>
                <div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li>Story</li>
                        <li><a href="#NewChars">Characters</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}