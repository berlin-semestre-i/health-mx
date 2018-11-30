import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../../../components/Layout'

const defaultRole = 'medic'

describe('Layout', () => {
  it('renders', () => {
    const component = shallow(<Layout userRole={defaultRole}/>)
    expect(component).toMatchSnapshot()
  })
})