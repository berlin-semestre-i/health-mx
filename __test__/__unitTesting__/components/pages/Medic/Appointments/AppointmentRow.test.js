import React from 'react'
import { shallow, mount } from 'enzyme'
import AppointmentRow from '../../../../../../components/pages/Medic/Appointments/AppointmentRow'

const testAppt = {
  profile: 'profile.png',
  date: '10 Oct, 2018',
}

describe('AppointmentRow', () => {
  it('renders', () => {
    const component = shallow(<AppointmentRow appointment={testAppt} />)
    expect(component).toMatchSnapshot()
  })

  it('has a profile image', () => {
    const wrapper = mount(<AppointmentRow appointment={testAppt} />)
    expect(wrapper.find(`img[src="${testAppt.profile}"]`).length).toBe(1)
    wrapper.unmount()
  })

})