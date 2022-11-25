import {Component} from 'react'
import './App.css';
import Header from './components/Header/Header.component';
import BlueprintsList from "./components/BlueprintsList/BlueprintsList.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            blueprints: []
        }
    }

    render() {
        console.log('render')
        return (
            <div className={'App'}>
                <Header/>
                <BlueprintsList className='blueprintList'/>
            </div>
        )
    }

    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
        return images;
    }

    async componentDidMount() {
        const images = this.importAll(require.context('./assets/blueprints', false, /\.(png|jpe?g|svg)$/));
        let blueprints = []
        Object.keys(images).forEach((blueprintName) => {
            blueprints.push({
                name: blueprintName,
                src: images[blueprintName]
            })
        })
        this.setState(() => {
            return { blueprints: blueprints}
        })

    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }
}

export default App;
