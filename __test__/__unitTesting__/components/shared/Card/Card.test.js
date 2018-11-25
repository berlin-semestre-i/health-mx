import React from 'react'
import { shallow } from 'enzyme'
import Card from '../../../../../components/shared/Card/index'

describe('Card', () => {
  it('renders', () => {
    const component = shallow(<Card header="" />)
    expect(component).toMatchSnapshot()
  })
})