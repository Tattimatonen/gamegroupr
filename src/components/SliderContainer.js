import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Slider from "./Slider";
import InfoGetter from "./InfoGetter";

const useStyles = (theme) => ({
    root: {},
});

class SliderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes} = this.props;

        return (
            <>
                <div className={classes.root}>
                    <Slider/>
                </div>
                <InfoGetter tileId={this.state.currentId}/>
            </>
        );
    }
}

export default withStyles(useStyles)(SliderContainer);
