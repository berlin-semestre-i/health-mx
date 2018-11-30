import React from 'react'
import { shallow, mount } from 'enzyme'
// eslint-disable-next-line max-len
import BeneficiaryAppointmentItem from '../../../../../../components/pages/Beneficiary/Dashboard/BeneficiaryAppointmentItem/index'

const testAppt = {
  name: 'Yulia',
  date: '10 Oct, 2018',
  time: '10:32am',
  clinic: 'General 2',
}

describe('Beneficiary Appointments', () => {
  it('renders', () => {
    const component = shallow(<BeneficiaryAppointmentItem appointment={testAppt} />)
    expect(component).toMatchSnapshot()
  })
})