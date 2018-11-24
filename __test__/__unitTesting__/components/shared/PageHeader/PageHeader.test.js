import React from 'react'
import { shallow, mount } from 'enzyme'
import PageHeader from '../../../../../components/shared/PageHeader'

Date.now = jest.fn(() => '6/29/2011 4:52:48 PM UTC')

describe('PageHeader', () => {
  it('renders', () => {
    const component = shallow(<PageHeader title="" subtitle="" />)
    expect(component).toMatchSnapshot()
  })

  it('should call updateTime function', () => {
    const component = mount(<PageHeader title="" subtitle="" />)
    const updateTime = component.instance().updateTime
    expect(component.state('date')).toBe('29 de junio de 2011')
    expect(component.state('time')).toBe('11:52 am')

    Date.now = jest.fn(() => '6/29/2011 4:53:48 PM UTC')
    updateTime()
    expect(component.state('time')).toBe('11:53 am')
  })
})