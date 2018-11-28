import React from 'react'
import { shallow } from 'enzyme'
import CsvList from '../../../../../../components/pages/Medic/MedicalReport/CsvList'

describe('CsvList', () => {
  it('renders', () => {
    const component = shallow(<CsvList array={[]} />)
    expect(component).toMatchSnapshot()
  })
})