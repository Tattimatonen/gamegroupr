import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Content from "./components/Content";

class App extends Component {
    render() {
        return (
            <Paper className={"wrapper"}>
                <Header/>
                <Content/>
                <Footer/>
            </Paper>
        );
    }
}

export default App;
