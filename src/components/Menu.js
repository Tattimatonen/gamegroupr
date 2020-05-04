import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({
    root: {},
});

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: 66356,
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                Valikko tähän
            </div>
        );
    }
}

export default withStyles(useStyles)(Menu);
