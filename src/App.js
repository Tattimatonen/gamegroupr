import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import SliderContainer from "./components/SliderContainer";
import Menu from "./components/Menu";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: 0,
        };
    }

    render() {
        return (
            <div className={"wrapper"}>
                <Header/>
                <Menu menuState={this.state.menuState}/>
                <>
                    <SliderContainer/>
                </>
                <Footer/>
            </div>
        );
    }
}

export default App;
