import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";

configure({adapter: new Adapter()});

describe("<App/>", () => {
    const wrapper = shallow(<App />);
    it("should contain 1 p element", () => {
        expect(wrapper.find(".App-intro").exists()).toBe(true);
    });
    it("should contain 3 li element", () => {
        expect(wrapper.find("ul").children().length).toBe(3);
    });
});
