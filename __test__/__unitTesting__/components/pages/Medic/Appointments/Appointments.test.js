import React from 'react'
import { shallow, mount } from 'enzyme'
import Appointments from '../../../../../../components/pages/Medic/Appointments/index'

describe('Appointments', () => {
  it('renders', () => {
    const component = shallow(<Appointments />)
    expect(component).toMatchSnapshot()
  })

  it('has one card', () => {
    const wrapper = mount(<Appointments />)
    expect(wrapper.find('div.card').length).toBe(1)
    wrapper.unmount()
  })
})