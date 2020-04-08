import React from "react";
import '../App.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import CasinoIcon from '@material-ui/icons/Casino';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#E78327',
    },
    grow: {
        flexGrow: 1,
    },
}));

function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.offset}/>
            <AppBar position="fixed" background-color="#E78327" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <CasinoIcon/>
                            <Typography variant={"body2"}>
                                Games
                            </Typography>
                        </Grid>
                    </IconButton>
                    <IconButton color="inherit">
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <HomeIcon/>
                            <Typography variant={"body2"}>
                                Game spaces
                            </Typography>
                        </Grid>
                    </IconButton>
                    <IconButton color="inherit">
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <PeopleIcon/>
                            <Typography variant={"body2"}>
                                Players
                            </Typography>
                        </Grid>
                    </IconButton>
                    <div className={classes.grow}/>
                    <Fab edge="end" color="default" aria-label="add" className={classes.fab}>
                        <AddIcon/>
                    </Fab>
                    <div/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer;
