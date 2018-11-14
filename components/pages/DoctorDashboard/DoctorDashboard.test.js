import React from 'react'
import { shallow, mount } from 'enzyme'
import DoctorDashboard from './index'

describe('DoctorDashboard', () => {
  it('renders', () => {
    const component = shallow(<DoctorDashboard />)
    expect(component).toMatchSnapshot()
  })

  it('has three cards', () => {
    const wrapper = mount(<DoctorDashboard />)
    expect(wrapper.find('div.card').length).toBe(3)
    wrapper.unmount()
  })

  // it('has four articles', async () => {
  //  const wrapper = mount(<DoctorDashboard />)
  //  wait(5000)
  //  console.log(wrapper.find('[name="article"]').debug())
  //  expect(wrapper.find('div[name="article"]').length).toBe(4);
  //  wrapper.unmount();
  // })
})