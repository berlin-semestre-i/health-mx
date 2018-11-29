import React from 'react'
import { shallow } from 'enzyme'
import Somatometry from '../../../../../../components/pages/Medic/Consultation/Somatometry'
import { testsConstants } from '../../../../../../utils/constants'

describe('Somatometry', () => {
  it('renders', () => {
    const component = shallow(<Somatometry somatometry={testsConstants.somatometry} />)
    expect(component).toMatchSnapshot()
  })
})