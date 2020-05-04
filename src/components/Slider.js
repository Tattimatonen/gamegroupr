import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {withStyles} from '@material-ui/core/styles';
import tileData from './data/tileData';
import InfoGetter from "./InfoGetter";

const useStyles = (theme) => ({
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
});

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: 66356,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(tileId) {
        this.setState({
                currentId: tileId
            }, () => console.log("Current ID: " + this.state.currentId)
        )
    };

    render() {
        const {classes} = this.props;

        return (
            <>
                <div className={classes.root}>
                    <GridList className={classes.gridList} cols={2.5}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.id}>
                                <img src={tile.img} alt={tile.title}/>
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={tile.author}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton onClick={() => this.handleClick(tile.id)} color="secondary">
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </>
        );
    }
}

export default withStyles(useStyles)(Slider);
