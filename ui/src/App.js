import React, {Component} from 'react';
import 'whatwg-fetch';

import './App.css';

const COLOUR = Object.freeze({
    GREEN: "green-bg",
    RED: "red-bg",
    ORANGE: "orange-bg",
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        };

        this.interval = 2000;
        this.hostname = "http://localhost:3000/check";
        this.pageToCheckUrl = "https://www.npmjs.com/package/cors";

        this.url = `${this.hostname}/${this.pageToCheckUrl}`;

        this.checkUrl = this.checkUrl.bind(this);
    }

    componentDidMount() {
        setInterval(this.checkUrl, this.interval);
    }

    checkUrl() {
        fetch(this.url)
            .then(value => value.json())
            .then(json => json.isSuccessful ? COLOUR.GREEN : COLOUR.RED)
            .then(bgColor => this.setState({bgColor}))
            .catch(reason => {
                console.log(reason);
                this.setState({bgColor: COLOUR.ORANGE});
            });
    }

    render() {
        let classes = ["App", this.state.bgColor];

        return (
            <div className={classes.join(" ")}>

            </div>
        );
    }
}

export default App;
