import React from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './data/tileData';
import '../App.css'
import {makeStyles} from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        padding: '20px',
    },
    title: {
        color: theme.palette.primary.light,
    },
}));


function Slider() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <Card variant={"outlined"}>
                            <CardActionArea>
                                <CardContent>
                                    <img src={tile.img} alt={tile.title}/>
                                    <Typography gutterBottom variant="body2" component="h2">
                                        {tile.title}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" component="p">
                                        {tile.author}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default Slider;
