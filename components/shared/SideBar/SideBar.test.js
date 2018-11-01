import React from 'react'
import { shallow } from 'enzyme'
import SideBar from './SideBar'

describe('SideBar', () => {
  it('renders', () => {
    const component = shallow(<SideBar />)
    expect(component).toMatchSnapshot()
  })
})