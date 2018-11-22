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
})