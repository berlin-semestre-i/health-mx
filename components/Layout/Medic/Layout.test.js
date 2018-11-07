import React from 'react'
import { shallow } from 'enzyme'
import Layout from './index'

describe('Layout', () => {
  it('renders', () => {
    const component = shallow(<Layout />)
    expect(component).toMatchSnapshot()
  })
})