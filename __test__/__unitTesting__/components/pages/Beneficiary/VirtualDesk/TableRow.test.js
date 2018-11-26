import React from 'react'
import { shallow, mount } from 'enzyme'
// eslint-disable-next-line max-len
import TableBodyRow from '../../../../../../components/pages/Beneficiary/VirtualDesk/TableBodyRow/index'

const testDependant = {
  relationship: 'CÓNYUGUE',
  name: 'Maria Antonieta',
  curp: 'JHSA21092109201',
  sex: 'M',
  age: '23',
  situation: 'Vigente',
}

describe('Table Row', () => {
  it('renders', () => {
    const component = shallow(<TableBodyRow dependant={testDependant} />)
    expect(component).toMatchSnapshot()
  })
})