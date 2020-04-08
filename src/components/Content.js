import React, {Component} from "react";
import Slider from './Slider';
import InfoGetterAlt from "./InfoGetterAlt";
import '../App.css';

class Content extends Component {

    render() {
        return (
            <>
                <Slider/>
                <InfoGetterAlt/>
            </>
        )
    }
}

export default Content;
