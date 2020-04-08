import React, {Component} from 'react';

class InfoGetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://www.boardgamegeek.com/xmlapi/game/266192') //esimerkkinä Wingspan
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => this.state.data);
        console.log(this.state.data);
    }

    render() {
        return (
            <div>
                Infogetter on täällä!
            </div>
        )
    }
}

export default InfoGetter;
