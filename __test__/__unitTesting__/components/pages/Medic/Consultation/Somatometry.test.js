import React from 'react'
import { shallow } from 'enzyme'
import Somatometry from '../../../../../../components/pages/Medic/Consultation/Somatometry'
import { somatometry } from '../../../../testData/Consultation'

describe('Somatometry', () => {
  it('renders', () => {
    const component = shallow(<Somatometry somatometry={somatometry} />)
    expect(component).toMatchSnapshot()
  })
})