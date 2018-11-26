import React from 'react'
import { shallow, mount } from 'enzyme'
import PageHeader from '../../../../../components/shared/PageHeader'
import moment from 'moment-timezone'

const date  = moment('2013-07-18T17:00:00', 'YYYY-MM-DD HH:mm', 'Indian/Reunion')
const date1 = moment('2013-07-18T18:00:00', 'YYYY-MM-DD HH:mm', 'Indian/Reunion')
Date.now    = jest.fn(() => date)

describe('PageHeader', () => {
  it('renders', () => {
    const component = shallow(<PageHeader title="" subtitle="" />)
    expect(component).toMatchSnapshot()
  })

  it('should call updateTime function', () => {
    const component = mount(<PageHeader title="" subtitle="" />)
    const updateTime = component.instance().updateTime
    expect(component.state('date')).toBe('18 de julio de 2013')
    expect(component.state('time')).toBe('05:00 pm')

    Date.now = jest.fn(() => date1)
    updateTime()
    expect(component.state('time')).toBe('06:00 pm')
  })
})