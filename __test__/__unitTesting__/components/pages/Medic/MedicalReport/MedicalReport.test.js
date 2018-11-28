import React from 'react'
import { shallow, mount } from 'enzyme'
import MedicalReport from '../../../../../../components/pages/Medic/MedicalReport/index'

describe('MedicalReport', () => {
  it('renders', () => {
    const component = shallow(<MedicalReport />)
    expect(component).toMatchSnapshot()
  })

  it('opens modal', () => {
    const wrapper = mount(<MedicalReport />)
    wrapper.instance().open(0)
    expect(wrapper.state('open')).toEqual(true)
  })

  it('closes modal', () => {
    const wrapper = mount(<MedicalReport />)
    wrapper.instance().close()
    expect(wrapper.state('open')).toEqual(false)
  })
})