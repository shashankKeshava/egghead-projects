import React from "react";
import ReactDOM from "react-dom";
import {App, Link} from "./App";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});

describe("<App/> shallow rendering", () => {
    it("should contain 1 p element", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".App-intro").exists()).toBe(true);
    });
    it("should contain 3 li element", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("ul").children().length).toBe(3);
    });
    it("should match snapshot", () => {
        const tree = shallow(<App />);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it("on button click changes p text", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".button-state").text()).toBe("No!");
        const button = wrapper.find("button");
        button.simulate("click");
        expect(wrapper.find(".button-state").text()).toBe("Yes!");
    });
    it("should update on local state change", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".blue").exists()).toBe(true);
        expect(wrapper.find(".red").exists()).toBe(false);
        wrapper.setState({color: "red"});
        expect(wrapper.find(".blue").exists()).toBe(false);
        expect(wrapper.find(".red").exists()).toBe(true);
    });
    it("on input change ,title changes text", () => {
        const wrapper = shallow(<App />);
        const input = wrapper.find("input");
        expect(wrapper.find("h2").text()).toBe("");
        input.simulate("change", {currentTarget: {value: "Shashank"}});
        expect(wrapper.find("h2").text()).toBe("Shashank");
    });
    it("call componentDidMount, updates p tag", () => {
        jest.spyOn(App.prototype, "componentDidMount");
        const wrapper = shallow(<App />);
        expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
        expect(wrapper.find(".lifeCycle").text()).toBe("componentDidMount");
    });
    it("setProps calls componentWillReceiveProps", () => {
        jest.spyOn(App.prototype, "componentWillReceiveProps");
        const wrapper = shallow(<App />);
        wrapper.setProps({hide: true});
        expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(
            1
        );
    });
    it("handleStrings return function call", () => {
        const wrapper = shallow(<App />);
        const trueReturn = wrapper.instance().handleString("Hi Shashank");
        expect(trueReturn).toBe(true);
        const falseReturn = wrapper.instance().handleString("");
        expect(falseReturn).toBe(false);
    });
});

describe("<App/> mount rendering", () => {
    it("should contain 1 p element", () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(".App-intro").exists()).toBe(true);
        wrapper.unmount();
    });
    it("should contain 3 li element", () => {
        const wrapper = mount(<App />);
        expect(wrapper.find("ul").children().length).toBe(3);
        wrapper.unmount();
    });
    it("should match snapshot", () => {
        const tree = mount(<App />);
        expect(toJson(tree)).toMatchSnapshot();
        tree.unmount();
    });
});

describe("<Link/>", () => {
    it("link component accepts address props", () => {
        const wrapper = shallow(<Link address="www.google.com" />);
        expect(wrapper.instance().props.address).toBe("www.google.com");
    });
    it("a tag renders href correctly", () => {
        const wrapper = shallow(<Link address="www.facebook.com" />);
        expect(wrapper.props().href).toBe("www.facebook.com");
    });
});
