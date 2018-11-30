import React from 'react'
import { shallow, mount } from 'enzyme'
import MedicalReport from '../../../../../../components/pages/Medic/MedicalReport/index'

describe('MedicalReport', () => {
  it('renders', () => {
    const component = shallow(<MedicalReport userRole="medic"/>)
    expect(component).toMatchSnapshot()
  })

  it('opens modal', () => {
    const wrapper = mount(<MedicalReport userRole="medic"/>)
    wrapper.instance().openConsultationModal(0)
    expect(wrapper.state('openConsultation')).toEqual(true)
  })

  it('closes modal', () => {
    const wrapper = mount(<MedicalReport userRole="medic"/>)
    wrapper.instance().close()
    expect(wrapper.state('openConsultation')).toEqual(false)
  })
})