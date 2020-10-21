import React from 'react'
import { shallow } from 'enzyme'
import Header from './header'

const wrapper = shallow(<Header title="Test title" subtitle="Test subtitle" />)

test("header can be customised with dynamic title and subtitle", () => {
    expect(wrapper.find("#headerTitle").text()).toBe("Test title");
    expect(wrapper.find("#headerSubtitle").text()).toBe("Test subtitle");
})