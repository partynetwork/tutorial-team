import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import TodoPage from "./TodoPage";

test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<TodoPage/>)).toBe(true)
});
