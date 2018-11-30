import React from 'react'
import { shallow, mount } from 'enzyme'
import VirtualDesk from '../../../../../../components/pages/Beneficiary/VirtualDesk/index'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import {
  graphQLMocks,
  graphQLErrorMocks,
} from '../../../../__mocks__/requests/articles'

describe('BeneficiaryDashboard', () => {
  it('renders', () => {
    const component = shallow(
      <MockedProvider mocks={graphQLMocks} >
        <VirtualDesk />
      </MockedProvider>
    )
    expect(component).toMatchSnapshot()
  })

  it('has five cards', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <VirtualDesk />
      </MockedProvider>
    )
    expect(component.find('div.card').length).toBe(5)
    component.unmount()
  })
})