import {Component} from 'react'
import './App.css';
import Header from './components/Header/Header.component';
import food from './food.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            foodsList: []
        }
    }

    render() {
        return (
            <div className={'App'}>
                <Header/>
                {food.map((dish) => {
                    return <h1>{dish.name}</h1>
            })}
            </div>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }
}

export default App;
