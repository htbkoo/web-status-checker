import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
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
            response: "Waiting for response",
            bgColour: "",
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
            .then(json => {
                let response = `Response received: ${json}`;
                let bgColour = json.isSuccessful ? COLOUR.GREEN : COLOUR.RED;
                return this.setState({bgColour, response});
            })
            .catch(reason => {
                let response = `Exception caught! Reason:\n ${reason}`;
                let bgColour = COLOUR.ORANGE;
                this.setState({bgColour, response});
            });
    }

    render() {
        let classes = ["App", this.state.bgColour];

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
                            />
                        </div>
                        <div className="withTopMargin">
                            <Divider/>
                        </div>

                        <div>
                            <TextField
                                floatingLabelText="Response"
                                fullWidth={true}
                                disabled={true}
                                multiLine={true}
                                value={this.state.response}
                            />
                        </div>
                        <div className="withTopMargin">
                            <Divider/>
                        </div>

                        <div className="withTopMargin">
                            <RaisedButton
                                label="Re-check"
                                primary={true}

                                onClick={this.checkUrl}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
