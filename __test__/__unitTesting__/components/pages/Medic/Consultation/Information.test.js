import React from 'react'
import { shallow } from 'enzyme'
import Information from '../../../../../../components/pages/Medic/Consultation/Information'

describe('Information', () => {
  it('renders', () => {
    const component = shallow(<Information />)
    expect(component).toMatchSnapshot()
  })
})