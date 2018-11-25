import React from 'react'
import { shallow, mount } from 'enzyme'
import Consultation from '../../../../../../components/pages/Medic/Consultation/index'

const medication = {
  dose: '20ml',
  medicine: 'Dramamine',
  frequency: '8 hrs',
  duration: '4 días',
}

function simulateChange({wrapper, parentKey, node}) {
  let name = node.prop('name')
  node.simulate('change', {target: {value: 'New Value'}})
  parentKey?
    expect(wrapper.state(parentKey)[name]).toBe('New Value') :
    expect(wrapper.state(name)).toBe('New Value')
}

function simulateAddMedication(wrapper) {
  wrapper.setState({
    newMedication: medication,
  })
  let addButton = wrapper.find('i.plus')
  addButton.simulate('click')
}

describe('Consultation', () => {
  it('renders', () => {
    const component = shallow(<Consultation date=""/>)
    expect(component).toMatchSnapshot()
  })

  it('add new medication', () => {
    const wrapper = mount(<Consultation date="" />)
    simulateAddMedication(wrapper)
    expect(wrapper.find('tr[name="medication"]')).toHaveLength(1)
    wrapper.unmount()
  })

  it('delete medication', () => {
    const wrapper = mount(<Consultation date="" />)
    simulateAddMedication(wrapper)
    const tableRow = wrapper.find('tr[name="medication"]')
    tableRow.simulate('mouseenter')
    const deleteButton = wrapper.find('i.trash')
    deleteButton.simulate('click')
    expect(wrapper.find('tr[name="medication"]')).toHaveLength(0)
    wrapper.unmount()
  })

  it('check medication fields are filled', () => {
    const wrapper = mount(<Consultation date="" />)
    const addButton = wrapper.find('i.plus')
    addButton.simulate('click')
    expect(wrapper.find('span[name="error"]')).toHaveLength(1)
    wrapper.unmount()
  })

  it('show/hide trash icon', () => {
    const wrapper = mount(<Consultation date="" />)
    simulateAddMedication(wrapper)
    const tableRow = wrapper.find('tr[name="medication"]')
    tableRow.simulate('mouseenter')
    expect(wrapper.find('i.trash')).toHaveLength(1)
    tableRow.simulate('mouseleave')
    expect(wrapper.find('i.trash')).toHaveLength(0)
    wrapper.unmount()
  })

  it('should call onChange prop with medication input value', () => {
    const wrapper = mount(<Consultation date="" />)
    wrapper.find('input[type="text"]').forEach((node) => {
      simulateChange({ wrapper, parentKey: 'newMedication', node })
    })
    const indications = wrapper.find('textarea[name="indications"]')
    simulateChange({ wrapper, node: indications })
  })

  it('should call onChange prop with information input value', () => {
    const wrapper = mount(<Consultation date="" />)
    wrapper.find('form[name="information"] textarea').forEach((node) => {
      simulateChange({ wrapper, parentKey: 'information', node })
    })
  })

  it('should call onChange prop on status select', () => {
    const wrapper = mount(<Consultation date="" />)
    const dropdown = wrapper.find('div[name="healthStatus"]')
    simulateChange({ wrapper, node: dropdown })
  })
})