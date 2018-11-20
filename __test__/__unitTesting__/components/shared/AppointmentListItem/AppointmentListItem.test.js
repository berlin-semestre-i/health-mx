import React from 'react'
import { shallow, mount } from 'enzyme'
import AppointmentListItem from '../../../../../components/shared/AppointmentListItem/index'

const testAppt = {
  profile: 'profile.png',
  date: '10 Oct, 2018',
}

describe('AppointmentListItem', () => {
  it('renders', () => {
    const component = shallow(<AppointmentListItem appointment={testAppt} />)
    expect(component).toMatchSnapshot()
  })

  it('has a profile image', () => {
    const wrapper = mount(<AppointmentListItem appointment={testAppt} />)
    expect(wrapper.find(`img[src="${testAppt.profile}"]`).length).toBe(1)
    wrapper.unmount()
  })

})