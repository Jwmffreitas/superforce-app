import React from 'react'
import prologoIMG from './img/SxG.png'

export default class Story extends React.Component {
    render() {
        return(
            <section className="story">
                <h1>STORY</h1>
                <div>
                    <h2>Prólogo</h2>
                    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Lacus luctus accumsan tortor posuere ac ut. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Vulputate enim nulla aliquet porttitor. At urna condimentum mattis pellentesque id nibh tortor id. A cras semper auctor neque vitae tempus. Senectus et netus et malesuada fames ac turpis egestas integer. Mattis vulputate enim nulla aliquet porttitor lacus. Pellentesque massa placerat duis ultricies. Proin sed libero enim sed. Fringilla urna porttitor rhoncus dolor purus non enim. Diam vulputate ut pharetra sit amet aliquam id diam. Egestas pretium aenean pharetra magna ac placerat vestibulum. Purus gravida quis blandit turpis cursus in. Erat velit scelerisque in dictum non consectetur a erat. Arcu ac tortor dignissim convallis aenean et tortor at. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Odio ut sem nulla pharetra diam.Ac tortor vitae purus faucibus ornare suspendisse. Scelerisque in dictum non consectetur a erat nam. Aenean vel elit scelerisque mauris pellentesque pulvinar. Massa tincidunt nunc pulvinar sapien et ligula. Tincidunt arcu non sodales neque sodales ut etiam sit. Orci sagittis eu volutpat odio facilisis mauris. Cursus in hac habitasse platea. Aliquet eget sit amet tellus cras adipiscing enim. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Felis bibendum ut tristique et.</p>
                        <img src={prologoIMG} alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}