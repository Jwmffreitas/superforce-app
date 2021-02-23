import React from 'react'
import Logo from './img/SuperForce.png'

export default class Menu extends React.Component {
    render(){
        return(
            <header>
                <img src={Logo}></img>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Story</li>
                        <li>Characters</li>
                    </ul>
                </div>
            </header>
        )
    }
}