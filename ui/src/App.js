import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
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
            bgColor: "",
            hostname: "http://localhost:3000/check",
            pageToCheckUrl: "https://www.npmjs.com/package/cors"
        };

        this.interval = 2000;

        this.checkUrl = this.checkUrl.bind(this);
        this.generateUrl = this.generateUrl.bind(this);
    }

    componentDidMount() {
        setInterval(this.checkUrl, this.interval);
    }

    generateUrl() {
        return `${this.state.hostname}/${this.state.pageToCheckUrl}`;
    }

    checkUrl() {
        let url = this.generateUrl();

        fetch(url)
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
                <div className="outer-container">
                    <div className="config-container">
                        <div>
                            <TextField
                                hintText="Enter the URL to check here"
                                floatingLabelText="URL to check"
                                fullWidth={true}

                                value={this.state.pageToCheckUrl}
                                onChange={(event) => {
                                    this.setState({
                                        pageToCheckUrl: event.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText="URL built"
                                fullWidth={true}
                                disabled={true}

                                value={this.generateUrl()}
                                onChange={(event) => {
                                    this.setState({
                                        pageToCheckUrl: event.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
