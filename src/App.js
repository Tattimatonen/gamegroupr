import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Content from "./components/Content";

class App extends Component {
    render() {
        return (
            <div className={"wrapper"}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
