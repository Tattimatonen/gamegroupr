import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './data/tileData';

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
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

function Slider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={tile.author}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default Slider;
