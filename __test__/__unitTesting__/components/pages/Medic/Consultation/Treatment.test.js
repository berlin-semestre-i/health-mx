import React from 'react'
import { shallow, mount } from 'enzyme'
import Treatment from '../../../../../../components/pages/Medic/Consultation/Treatment'
import { newMedication, errorMessage } from '../../../../testData/Consultation'

describe('Treatment', () => {
  it('renders', () => {
    const component = shallow(<Treatment treatment={[]} />)
    expect(component).toMatchSnapshot()
  })

  it('toggle delete button', () => {
    const add = jest.fn()
    const wrapper = mount(<Treatment
      treatment={[newMedication]}
      addMedication={add} />)
    const tableRow = wrapper.find('tr')
    tableRow.simulate('mouseenter')
    expect(wrapper.state('isMouseOnRow')).toBe(0)
    tableRow.simulate('mouseleave')
    expect(wrapper.state('isMouseOnRow')).toBe(-1)
    wrapper.unmount()
  })

  it('adds medication', () => {
    const add = jest.fn()
    const wrapper = mount(<Treatment
      treatment={[]}
      addMedication={add} />)
    wrapper.setState(newMedication)
    wrapper.find('i.plus').simulate('click')
    expect(add).toHaveBeenCalled
  })

  it('updates state', () => {
    const updateState =  jest.fn()
    const wrapper = mount(<Treatment treatment={[]} />)
    wrapper.find('input[name="dose"]').simulate('change')
    expect(updateState).toHaveBeenCalled
  })

  it('deletes medication', () => {
    const deleteMed = jest.fn()
    const wrapper = mount(<Treatment
      treatment={[newMedication]}
      deleteMedication={deleteMed} />)
    wrapper.setState({isMouseOnRow: 0})
    wrapper.find('i.trash').simulate('click')
    expect(deleteMed).toHaveBeenCalled
  })

  it('shows error message', () => {
    const wrapper = mount(<Treatment treatment={[]} />)
    wrapper.find('i.plus').simulate('click')
    expect(wrapper.state('error')).toBe(errorMessage)
  })
})