import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

const Test = ({text}) => <div>{text}</div>;
class App extends Component {
    componentDidMount() {
        this.setState({lifeCycle: "componentDidMount"});
    }
    componentWillReceiveProps() {
        this.setState({lifeCycle: "componentWillReceiveProps"});
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-intro">
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Test text={"Testing Components with Props"} />
                <ul>
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                </ul>
            </div>
        );
    }
}

class Link extends Component {
    render() {
        return <a href={this.props.address}>Click</a>;
    }
}

export {Link, App};
