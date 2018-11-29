import React from 'react'
import { shallow, mount } from 'enzyme'
import Consultation from '../../../../../../components/pages/Medic/Consultation/index'
import { testsConstants } from '../../../../../../utils/constants'

describe('Consultation', () => {
  it('renders', () => {
    const component = shallow(<Consultation date=""/>)
    expect(component).toMatchSnapshot()
  })

  it('adds medication', () => {
    const wrapper = mount(<Consultation date=""/>)
    wrapper.instance().addMedication(testsConstants.newMedication)
    expect(wrapper.state('treatment')).toHaveLength(1)
  })

  it('deletes medication', () => {
    const wrapper = mount(<Consultation date=""/>)
    wrapper.setState({treatment: [testsConstants.newMedication]})
    wrapper.instance().deleteMedication(0)
    expect(wrapper.state('treatment')).toHaveLength(0)
  })

  it('saves labs reports', () => {
    const wrapper = mount(<Consultation date=""/>)
    wrapper.instance().saveLabReports([], 1, '')
    expect(wrapper.state('labReports')).toEqual([])
    expect(wrapper.state('labReportsPriority')).toBe(1)
    expect(wrapper.state('labReportsObservations')).toEqual('')
  })

  it('opens modal', () => {
    const wrapper = mount(<Consultation date=""/>)
    wrapper.find('.lab-studies i.pencil').simulate('click')
    expect(wrapper.state('open')).toBeTruthy
    wrapper.find('.button.basic').simulate('click')
    expect(wrapper.state('open')).toBeFalsy
  })

  it('updates state', () => {
    const updateState = jest.fn()
    const wrapper = mount(<Consultation date=""/>)
    wrapper.find('textarea[name="motive"]').simulate('change')
    expect(updateState).toHaveBeenCalled
  })
})