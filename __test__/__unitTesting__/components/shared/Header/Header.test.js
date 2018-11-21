import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../../../components/shared/Header/index'

describe('Header', () => {
  it('renders', () => {
    const component = shallow(<Header title="" subtitle="" />)
    expect(component).toMatchSnapshot()
  })
})