import React from 'react'
import { shallow, mount } from 'enzyme'
import Tabs from '../../../../../../components/pages/Medic/MedicalReport/Tabs'

const beneficiary = {
  firstName: 'María del Carmen',
  fatherLastName: 'Hinojosa',
  motherLastName: 'Ramírez',
  nss: '8454321878',
  curp: 'JP0A170297SLMRH00',
  clinic: 'Zapopan 36',
  umf: 'Zapopan UMF2',
  dependents: 0,
  allergies: ['Penicilina'],
  ailment: [],
  ahd: ['Diabetes tipo 2 (padre)', 'Cáncer de colon (abuelo)'],
  doctor: 'César Rengiffo Pérez',
}
const studies = [{
  date: '12 Jul, 2018',
  area: 'Radiología',
  type: 'Rayos X',
  indications: 'Bla bla bla',
}]
const treatments = [{
  consultation: '03 Nov, 2017',
  startDate: '03 Nov, 2017',
  endDate: '11 Nov 2017',
  medication: ['Paracetamol', 'Diclofenaco sódico', 'Celebrex'],
}]
const consultations = [{
  date: '12 Jul, 2018',
  area: 'Medicina familiar',
  doctor: 'Luis Alfredo Ramírez',
  status: 'Regular',
}]
const tabsValues = [
  {name: 'prev-consultations', items: consultations},
  {name: 'lab-studies', items: studies},
  {name: 'treatments', items: treatments},
]

describe('TabsMedicalReport', () => {
  it('renders', () => {
    const component = shallow(<Tabs />)
    expect(component).toMatchSnapshot()
  })

  it('renders Studies tab', () => {
    const wrapper = mount(
      <Tabs
        studies={studies}
        beneficiary={beneficiary}
        treatments={treatments}
        consultations={consultations}
      />)
    tabsValues.forEach((item, index) => {
      let menuItem = wrapper.find('div.menu a').at(index+1)
      menuItem.simulate('click')
      expect(wrapper.find(`div[name="${item.name}"] tbody tr`)).toHaveLength(item.items.length)
    })
  })

  it('opens modal', () => {
    let callbackFn = jest.fn()
    const wrapper = mount(
      <Tabs
        studies={studies}
        beneficiary={beneficiary}
        treatments={treatments}
        consultations={consultations}
        callbackfn={callbackFn}
      />)
    wrapper.find('div.menu a').at(1).simulate('click')
    const detailButton = wrapper.find('div[name="prev-consultations"] tbody tr a')
    detailButton.simulate('click')
    expect(callbackFn).toBeCalled()
  })

})