import React from 'react'
import { shallow, mount } from 'enzyme'
// eslint-disable-next-line max-len
import DefaultTable from '../../../../../../components/pages/Beneficiary/VirtualDesk/Table/index'

describe('Default table', () => {
  it('renders', () => {
    const component = shallow(<DefaultTable />)
    expect(component).toMatchSnapshot()
  })
})