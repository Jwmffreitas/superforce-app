import React from 'react'
import Logo from './img/SuperForce.png'

export default class Menu extends React.Component {
    render(){
        return(
            <header>
                <img src={Logo}></img>
            </header>
        )
    }
}