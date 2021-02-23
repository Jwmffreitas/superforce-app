import React, { Fragment } from 'react'
import Modal from './Modal'
import CardNewChar from './CardNewChar'

export default class Lista extends React.Component {
    render(){
        return(
          <div>
            <CardNewChar char={this.props.char1}/>
            <CardNewChar char={this.props.char2}/>
            <CardNewChar char={this.props.char3}/>
            <CardNewChar char={this.props.char4}/>
          </div>
        )
    }
}