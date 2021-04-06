import React from 'react'
import zoro from './img/zoro.png'

export default class Home extends React.Component {
    render() {
        return(
            <section className="home" id="home">
                <div>
                    <h1>Super FOrce X</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <a href="https://www.youtube.com/watch?v=auRkE7-atXo" style={{width: '50%'}}><button>Ver Trailer</button></a>
                        <a href="https://mega.nz/file/6GIVXSxa#jrMv89psqydK-fokHBfP64i0dU9xI9uyKVwWHdf9NTE" style={{width: '50%'}} target="_blank"><button className="download">Download</button></a>
                    </div>
                </div>
                <div>
                    <img src={zoro}/>
                </div>
            </section>
        )
    }
}