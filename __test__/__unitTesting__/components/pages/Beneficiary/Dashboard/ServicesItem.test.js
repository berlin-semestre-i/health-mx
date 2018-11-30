import React from 'react'
import { shallow, mount } from 'enzyme'
// eslint-disable-next-line max-len
import ServicesItem from '../../../../../../components/pages/Beneficiary/Dashboard/ServicesItem/index'

const testService = {
  name: 'Número de Seguro Social',
  icon: '../../../../../../static/images/NSSIcon.png',
  link: 'http://bit.ly/imssNSS',
}

describe('Beneficiary Services', () => {
  it('renders', () => {
    const component = shallow(<ServicesItem service={testService} />)
    expect(component).toMatchSnapshot()
  })
})

it('has an icon', () => {
  const wrapper = mount(<ServicesItem service={testService} />)
  expect(wrapper.find(`img[src="${testService.icon}"]`).length).toBe(1)
  wrapper.unmount()
})

it('has a link', () => {
  const wrapper = mount(<ServicesItem service={testService} />)
  expect(wrapper.find(`a[href="${testService.link}"]`).length).toBe(2)
  wrapper.unmount()
})