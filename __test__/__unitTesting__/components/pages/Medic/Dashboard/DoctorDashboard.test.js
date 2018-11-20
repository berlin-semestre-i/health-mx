import React from 'react'
import { shallow, mount } from 'enzyme'
import DoctorDashboard from '../../../../../../components/pages/Medic/Dashboard/index'

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
  //   const wrapper = await mount(<DoctorDashboard />)
  //   console.log(wrapper.find('[name="article"]').debug())
  //   expect(wrapper.find('div[name="article"]').length).toBe(4)
  //   wrapper.unmount()
  // })
})