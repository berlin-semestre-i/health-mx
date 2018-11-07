import React from 'react'
import { mount } from 'enzyme'
import SideBar from './SideBar'

describe('SideBar', () => {
  it('renders', () => {
    const component = mount(<SideBar/>)
    expect(component).toMatchSnapshot()
  })
})