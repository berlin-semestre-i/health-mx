import React from 'react'
import { shallow, mount } from 'enzyme'
import Tabs from '../../../../../../components/pages/Medic/MedicalReport/Tabs'
import { studies,
  treatments,
  beneficiary,
  consultations,
  tabsValues }
  from '../../../../testData/MedicalReport'

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