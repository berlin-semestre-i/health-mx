import React from 'react'
import { shallow, mount } from 'enzyme'
import Beneficiaries from '../../../../../../components/pages/Nurse/Beneficiaries/index'

describe('Beneficiaries', () => {
  it('renders', () => {
    const component = shallow(<Beneficiaries />)
    expect(component).toMatchSnapshot()
  })

  it('updates state on input change', () => {
    const wrapper = mount(<Beneficiaries />)
    wrapper.find('input').forEach(node => {
      let name = node.prop('name')
      node.simulate('change', {target: {value: 'New Value'}})
      expect(wrapper.state(name)).toBe('New Value')
    })
  })
})