import React from 'react'

export default class Modal extends React.Component {
    render() {
        var personagemID1 = this.props.char1
        console.log(personagemID1)

        function closeModal() {
            const modal = document.querySelector('.modal')
            modal.style.display = "none"

            document.querySelector(`#${personagemID1}`).style.display = "none"
        }

        return(
            <div className="modal" onClick={closeModal}></div>
        )
    }
}