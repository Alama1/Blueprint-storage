import {Component} from "react";
import './BlueprintsList.css'
import { saveAs } from 'file-saver'

class BlueprintsList extends Component {

    downloadImg = clickEvent => {
        const imgLink = clickEvent.target.src
        saveAs(imgLink, 'image.png')
    }

    render() {
        const images = this.importAll(require.context('../../assets/blueprints/', false, /\.(png|jpe?g|svg)$/))
        return (
            <div className='blueprint-list'>
                {images.map((image) => {
                    return (
                        <div>
                            <img className={`blueprint ${this.props.className}`} src={image.src} alt={image.name} key={image.name} onClickCapture={this.downloadImg}/>
                            <h2>{image.name.replace('./', '').replace('.png', '')} </h2>
                        </div>
                    )
                })}
            </div>
        )
    }

    importAll(r) {
        let images = [];
        r.keys().forEach((item, index) => {
            images.push({
                name: item,
                src: r(item)
            })
        });
        return images
    }
}

export default BlueprintsList
