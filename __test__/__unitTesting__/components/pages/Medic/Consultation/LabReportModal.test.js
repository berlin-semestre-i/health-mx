import React from 'react'
import { shallow, mount } from 'enzyme'
import LabReportModal from '../../../../../../components/pages/Medic/Consultation/LabReportModal'
import { errorMessage, newStudy } from '../../../../testData/Consultation'

describe('LabReportModal', () => {
  it('renders', () => {
    const component = shallow(<LabReportModal />)
    expect(component).toMatchSnapshot()
  })

  it('shows error message', () => {
    const wrapper = mount(<LabReportModal open />)
    wrapper.find('i.plus').simulate('click')
    expect(wrapper.state('error')).toBe(errorMessage)
  })

  it('toggle delete button', () => {
    const wrapper = mount(<LabReportModal open />)
    wrapper.setState(newStudy)
    wrapper.find('i.plus').simulate('click')
    const tableRow = wrapper.find('tr')
    tableRow.simulate('mouseenter')
    expect(wrapper.state('isMouseOnRow')).toBe(0)
    tableRow.simulate('mouseleave')
    expect(wrapper.state('isMouseOnRow')).toBe(-1)
    wrapper.unmount()
  })

  it('deletes study', () => {
    const wrapper = mount(<LabReportModal open />)
    wrapper.setState(newStudy)
    wrapper.find('i.plus').simulate('click')
    const tableRow = wrapper.find('tr')
    tableRow.simulate('mouseenter')
    wrapper.find('i.trash').simulate('click')
    expect(wrapper.state('studies')).toEqual([])
    wrapper.unmount()
  })

  it('saves reports', () => {
    const saveLabReports = jest.fn()
    const wrapper = mount(<LabReportModal open save={saveLabReports}/>)
    wrapper.find('.button[name="save-study"]').simulate('click')
    expect(saveLabReports).toHaveBeenCalled()
  })

  it('closes modal', () => {
    const closeModal = jest.fn()
    const wrapper = mount(<LabReportModal open close={closeModal}/>)
    wrapper.find('.button.basic').simulate('click')
    expect(closeModal).toHaveBeenCalled()
  })

  it('updates state', () => {
    const updateState =  jest.fn()
    const wrapper = mount(<LabReportModal open />)
    wrapper.find('input[name="study"]').simulate('change')
    expect(updateState).toHaveBeenCalled
  })
})