import React from 'react'
import { shallow, mount } from 'enzyme'
import PageHeader from '../../../../../components/shared/PageHeader'

Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf())

describe('PageHeader', () => {
  it('renders', () => {
    const component = shallow(<PageHeader title="" subtitle="" />)
    expect(component).toMatchSnapshot()
  })

  it('should call updateTime function', () => {
    const component = mount(<PageHeader title="" subtitle="" />)
    const updateTime = component.instance().updateTime
    expect(component.state('date')).toBe('9 de agosto de 2017')
    expect(component.state('time')).toBe('03:00 am')

    Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 9)).valueOf())
    updateTime()
    expect(component.state('time')).toBe('04:00 am')
  })
})