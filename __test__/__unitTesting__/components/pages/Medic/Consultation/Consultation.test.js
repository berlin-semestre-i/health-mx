import React from 'react'
import { shallow, mount } from 'enzyme'
import Consultation from '../../../../../../components/pages/Medic/Consultation/index'

const medication = {
  dose: '20ml',
  medicine: 'Dramamine',
  frequency: '8 hrs',
  duration: '4 días',
}
const study = {
  study: 'Rayos X',
  indications: 'Sin indicaciones',
}

function simulateChange({wrapper, parentKey, node}) {
  let name = node.prop('name')
  node.simulate('change', {target: {value: 'New Value'}})
  parentKey?
    expect(wrapper.state(parentKey)[name]).toBe('New Value') :
    expect(wrapper.state(name)).toBe('New Value')
}

function simulateAddition(wrapper, key, newState) {
  wrapper.setState({
    [key]: newState,
  })
  let addButton = wrapper.find(`div[name="${key}"] i.plus`)
  addButton.simulate('click')
}

function simulateAddMedication(wrapper) {
  simulateAddition(wrapper, 'newMedication', medication)
}

function simulateAddStudy(wrapper) {
  simulateAddition(wrapper, 'newStudy', study)
}

function openModal(wrapper) {
  const openModal = wrapper.find('div.lab-studies i.pencil')
  openModal.simulate('click')
}

function simulateMouse(wrapper, name) {
  const tableRow = wrapper.find(`tr[name="${name}"]`)
  tableRow.simulate('mouseenter')
  expect(wrapper.find('i.trash')).toHaveLength(1)
  tableRow.simulate('mouseleave')
  expect(wrapper.find('i.trash')).toHaveLength(0)
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
    simulateMouse(wrapper, 'medication')
    openModal(wrapper)
    simulateAddStudy(wrapper)
    simulateMouse(wrapper, 'report')
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

  it('should call onChange prop with newStudy input value', () => {
    const wrapper = mount(<Consultation date="" />)
    openModal(wrapper)
    wrapper.find('div[name="newStudy"] input').forEach((node) => {
      simulateChange({ wrapper, parentKey: 'newStudy', node })
    })
    const input = wrapper.find('textarea[name="observations"]')
    simulateChange({wrapper, node: input})
    wrapper.unmount()
  })

  it('should call onChange prop on status select', () => {
    const wrapper = mount(<Consultation date="" />)
    const dropdown = wrapper.find('div[name="healthStatus"]')
    simulateChange({ wrapper, node: dropdown })
  })

  it('should call onChange prop on priority select', () => {
    const wrapper = mount(<Consultation date="" />)
    openModal(wrapper)
    const dropdown = wrapper.find('div[name="priority"]')
    simulateChange({ wrapper, node: dropdown })
  })

  it('delete medication', () => {
    const wrapper = mount(<Consultation date="" />)
    openModal(wrapper)
    simulateAddStudy(wrapper)
    const tableRow = wrapper.find('tr[name="report"]')
    tableRow.simulate('mouseenter')
    const deleteButton = wrapper.find('i.trash')
    deleteButton.simulate('click')
    expect(wrapper.find('tr[name="report"]')).toHaveLength(0)
    wrapper.unmount()
  })

  it('it saves studies', () => {
    const wrapper = mount(<Consultation date="" />)
    openModal(wrapper)
    simulateAddStudy(wrapper)
    const saveButton = wrapper.find('button[name="save-study"]')
    saveButton.simulate('click')
    expect(wrapper.find('div.list .item')).toHaveLength(1)
    wrapper.unmount()
  })
})