import React from 'react'

export default class Modal extends React.Component {
    render() {
        function closeModal() {
            const modal = document.querySelector('.modal')
            modal.style.display = "none"

            document.querySelector('.pop').style.display = "none"
        }

        return(
            <div className="modal" onClick={closeModal}></div>
        )
    }
}