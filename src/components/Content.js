import React, {Component} from "react";
import Slider from './Slider';
import SliderAlt from './SliderAlt';
import InfoGetter from "./InfoGetter";

class Content extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {};
    }

    handleChange(e) {

    }

    render() {
        return (
            <>
                <Slider/>
                <SliderAlt/>
                <InfoGetter/>
            </>
        )
    }
}

export default Content;
