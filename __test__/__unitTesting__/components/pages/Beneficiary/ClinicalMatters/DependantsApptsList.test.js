import React from 'react'
import { shallow, mount } from 'enzyme'
// eslint-disable-next-line max-len
import AppointmentsList from '../../../../../../components/pages/Beneficiary/ClinicalMatters/AppointmentsList/index'

const testAppt = {
  nss: '1',
  date: '10 Oct, 2018',
  specialty: 'Medicina familiar',
  clinic: 'General 2',
}

describe('Dependants past appointments', () => {
  it('renders', () => {
    const component = shallow(<AppointmentsList appointment={testAppt} />)
    expect(component).toMatchSnapshot()
  })
})