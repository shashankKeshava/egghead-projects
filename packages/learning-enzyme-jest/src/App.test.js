import React from "react";
import ReactDOM from "react-dom";
import {App, Link} from "./App";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});

describe("<App/> shallow rendering", () => {
    const wrapper = shallow(<App />);
    it("should contain 1 p element", () => {
        expect(wrapper.find(".App-intro").exists()).toBe(true);
    });
    it("should contain 3 li element", () => {
        expect(wrapper.find("ul").children().length).toBe(3);
    });
    it("should match snapshot", () => {
        const tree = shallow(<App />);
        expect(toJson(tree)).toMatchSnapshot();
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
