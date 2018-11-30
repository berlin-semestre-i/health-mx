import React from 'react'
import { shallow } from 'enzyme'
import HealthStatus from '../../../../../../components/pages/Medic/Consultation/HealthStatus'

describe('HealthStatus', () => {
  it('renders', () => {
    const component = shallow(<HealthStatus />)
    expect(component).toMatchSnapshot()
  })
})