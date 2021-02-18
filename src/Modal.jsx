import React from 'react'

export default class Modal extends React.Component {
    render() {
        function closeModal() {
            const modal = document.querySelector('.modal')
            modal.style.display = "none"

            document.querySelector('#Raditz').remove()
        }

        return(
            <div className="modal" onClick={closeModal}></div>
        )
    }
}