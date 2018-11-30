import React from 'react'
import { shallow, mount } from 'enzyme'
import BeneficiaryDashboard from '../../../../../../components/pages/Beneficiary/Dashboard/index'
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
        <BeneficiaryDashboard />
      </MockedProvider>
    )
    expect(component).toMatchSnapshot()
  })

  it('has three cards', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <BeneficiaryDashboard />
      </MockedProvider>
    )
    expect(component.find('div.card').length).toBe(3)
    component.unmount()
  })
})