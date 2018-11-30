import React from 'react'
import { shallow, mount } from 'enzyme'
import ClinicalMatters from '../../../../../../components/pages/Beneficiary/ClinicalMatters/index'
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
        <ClinicalMatters />
      </MockedProvider>
    )
    expect(component).toMatchSnapshot()
  })

  it('has two cards', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <ClinicalMatters />
      </MockedProvider>
    )
    expect(component.find('div.card').length).toBe(2)
    component.unmount()
  })

  it('has dropdown', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <ClinicalMatters />
      </MockedProvider>
    )
    expect(component.find('div.dropdown').length).toBe(1)
    component.unmount()
  })
})