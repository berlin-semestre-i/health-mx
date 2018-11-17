import React from 'react'
import { shallow } from 'enzyme'
import Layout from './index'

const defaultRole = 'medic'

describe('Layout', () => {
  it('renders', () => {
    const component = shallow(<Layout userRole={defaultRole}/>)
    expect(component).toMatchSnapshot()
  })
})