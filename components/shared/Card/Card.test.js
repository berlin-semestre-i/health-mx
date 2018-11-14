import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'

describe('Card', () => {
  it('renders', () => {
    const component = shallow(<Card header="test" />)
    expect(component).toMatchSnapshot()
  })
})