import React from 'react'
import { shallow } from 'enzyme'
import Consultation from '../../../../../../components/pages/Medic/Consultation/index'

describe('Consultation', () => {
  it('renders', () => {
    const component = shallow(<Consultation />)
    expect(component).toMatchSnapshot()
  })
})