import React from 'react'
import { shallow, mount } from 'enzyme'
import AdminMatters from '../../../../../../components/pages/Beneficiary/AdminMatters/index'
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
        <AdminMatters />
      </MockedProvider>
    )
    expect(component).toMatchSnapshot()
  })

  it('has one card', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <AdminMatters />
      </MockedProvider>
    )
    expect(component.find('div.card').length).toBe(1)
    component.unmount()
  })

  it('has a list of 12 services', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <AdminMatters />
      </MockedProvider>
    )
    expect(component.find('div.list').length).toBe(12)
    component.unmount()
  })
})