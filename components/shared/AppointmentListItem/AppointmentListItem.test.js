import React from 'react'
import { shallow } from 'enzyme'
import AppointmentListItem from './index'

describe('AppointmentListItem', () => {
  it('renders', () => {
    const component = shallow(<AppointmentListItem appointment="{}" />)
    expect(component).toMatchSnapshot()
  })
})