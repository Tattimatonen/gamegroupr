import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({});

class InfoGetterAlt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            year: null,
            playtime: null,
            description: null,
            categories: [],
            publisher: null,
            img: null,
            id: 266192,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        /*if (name === "wingspan") {
            this.setState({
                id: 299514,
            });
        }
        if (name === "catan") {
            this.setState({
                id: 13,
            });
        }*/
    }

    componentDidMount() {
        this.doFetch();
    }

    doFetch() {
        let self = this;
        const url = 'http://localhost:3001/https://www.boardgamegeek.com/xmlapi2/thing?id=';

        fetch(url + this.state.id, {method: 'GET'})
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                let parser = new DOMParser();
                let xml = parser.parseFromString(data, "text/xml");

                let descriptionText = xml.getElementsByTagName("description")[0].childNodes[0].nodeValue;
                descriptionText = descriptionText.replace(/&#10;/g, " ");
                descriptionText = descriptionText.replace(/&nbsp;/g, " ");
                descriptionText = descriptionText.replace(/&mdash;/g, " ");

                let unsorted = xml.getElementsByTagName("link");
                let categoriesArray = [], publisher, publisherSet = false;

                for (let i = 0; i < unsorted.length; i++) {
                    if (unsorted[i].getAttribute('type') === "boardgamecategory") {
                        categoriesArray.push(unsorted[i].getAttribute('value'));
                    } else if (unsorted[i].getAttribute('type') === "boardgamepublisher" && publisherSet === false) {
                        publisher = unsorted[i].getAttribute('value');
                        publisherSet = true;
                    }
                }

                let categories = "| ";

                for (let i = 0; i < categoriesArray.length; i++) {
                    categories += categoriesArray[i] + " | ";
                }

                self.setState({
                    name: xml.getElementsByTagName("name")[0].getAttribute('value'),
                    publisher: publisher,
                    categories: categories,
                    year: xml.getElementsByTagName("yearpublished")[0].getAttribute('value'),
                    playtime: xml.getElementsByTagName("playingtime")[0].getAttribute('value'),
                    description: descriptionText,
                    img: xml.getElementsByTagName("thumbnail")[0].childNodes[0].nodeValue,
                });
            })
    }

    render() {
        return (
            <div align={"left"} style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
                <p>
                    <b>Name:</b> {this.state.name}
                    <br/>
                    <b>Image:</b> <img src={this.state.img} alt={"Kuva pelistä."}/>
                    <br/>
                    <b>Publisher:</b> {this.state.publisher}
                    <br/>
                    <b>Year of publishing:</b> {this.state.year}
                    <br/>
                    <b>Categories:</b> {this.state.categories}
                    <br/>
                    <b>Avg. playtime:</b> {this.state.playtime} minutes
                    <br/>
                    <b>Description:</b> {this.state.description}
                </p>
                <Button variant="contained" onClick={this.handleClick("wingspan")}>Wingspan</Button>
                <Button variant="contained" onClick={this.handleClick("catan")}>Catan</Button>
            </div>

        );
    }
}

export default withStyles(useStyles)(InfoGetterAlt);
