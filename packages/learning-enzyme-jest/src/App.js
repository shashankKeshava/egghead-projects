import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

const Test = ({text}) => <div>{text}</div>;
class App extends Component {
    state = {
        on: false,
        text: "",
        color: "blue",
        lifeCycle: "render"
    };
    componentDidMount() {
        this.setState({lifeCycle: "componentDidMount"});
    }
    componentWillReceiveProps() {
        this.setState({lifeCycle: "componentWillReceiveProps"});
    }
    handleString(data) {
        return data.length ? true : false;
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
                <h3 className={this.state.color}>
                    Welcome to Local state Test
                </h3>
                <ul>
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                </ul>
                <p className="button-state">{this.state.on ? "Yes!" : "No!"}</p>
                <button onClick={() => this.setState({on: true})}>
                    Click Me
                </button>
                <h2>{this.state.text}</h2>
                <input
                    onChange={e => this.setState({text: e.currentTarget.value})}
                    type="text"
                />
                <p className="lifeCycle">{this.state.lifeCycle}</p>
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
