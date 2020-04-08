import React, {Component} from 'react';

class InfoGetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            year: null,
            playtime: null,
            category: null,
            publisher: null,
        };
    }

    componentDidMount() {
        let req = new XMLHttpRequest();
        req.open("get", "http://localhost:3001/https://www.boardgamegeek.com/xmlapi2/thing?id=013", false);
        req.send();
        console.log(req.responseText);

        let parser, xmlDoc;
        let text = req.responseText;

        parser = new DOMParser();
        xmlDoc = parser.parseFromString(text, "text/xml");

        this.setState({
            name: xmlDoc.getElementsByTagName("name")[0].getAttribute('value'),
            year: xmlDoc.getElementsByTagName("yearpublished")[0].getAttribute('value'),
            playtime: xmlDoc.getElementsByTagName("playingtime")[0].getAttribute('value'),
            category: xmlDoc.getElementsByTagName("boardgamecategory")[0].getAttribute('value'),
            publisher: xmlDoc.getElementsByTagName("boardgamepublisher")[0].getAttribute('value'),
        })
    }

    /*
        let url = "http://localhost:8080/https://www.boardgamegeek.com/xmlapi2/boardgame/thing?id=";
        let id = "013";

        let req = new XMLHttpRequest();
        req.open("GET", "http://localhost:3001/https://www.boardgamegeek.com/xmlapi2/thing?id=013", false);
        req.send(null);
        console.log(req.responseText);

        fetch(url + '266192', {method: 'get'}) //esimerkkinä Wingspan
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => this.state.data);
        console.log(this.state.data);
        console.log("potato");

        let XMLParser = require('react-xml-parser');
        let xml = new XMLParser().parseFromString(this.state.data);
        console.log(xml);
        console.log(xml.getElementsByTagName('Name'));
     */

    render() {
        return (
            <div>
                Infogetter on täällä!
                {this.state.name}
            </div>
        )
    }
}

export default InfoGetter;
