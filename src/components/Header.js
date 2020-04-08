import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({
    offset: theme.mixins.toolbar,
    appBar: {
        backgroundColor: '#E78327',
    },
    grow: {
        flexGrow: 1,
    },
});

class Header extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit">
                            <FaceIcon/>
                        </IconButton>
                        <Typography variant={"h5"}>
                            gamegroupr.
                        </Typography>
                        <div className={classes.grow}/>
                        <IconButton color="inherit">
                            <NotificationsIcon/>
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <SearchIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.offset}/>
            </>
        )
    }
}

export default withStyles(useStyles)(Header);
