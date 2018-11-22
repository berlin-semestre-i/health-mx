import React from 'react'
import { shallow } from 'enzyme'
import Signup from '../../../../../components/pages/Signup/index'

describe('Signup', () => {
  it('renders', () => {
    const component = shallow(<Signup />)
    expect(component).toMatchSnapshot()
  })
})