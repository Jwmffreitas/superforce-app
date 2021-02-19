import React from 'react'

export default class Modal extends React.Component {
    render() {
        var personagemID1 = this.props.char1
        var personagemID2 = this.props.char2
        console.log(personagemID1)

        function closeModal() {
            const modal = document.querySelector('.modal')
            modal.style.display = "none"

            document.querySelector(`#${personagemID1}`).style.display = "none"
            document.querySelector(`#${personagemID2}`).style.display = "none"
        }

        return(
            <div className="modal" onClick={closeModal}></div>
        )
    }
}