import React from 'react'
import { shallow, mount } from 'enzyme'
import DoctorDashboard from '../../../../../../components/pages/Medic/Dashboard/index'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import {
  graphQLMocks,
  graphQLErrorMocks,
} from '../../../../__mocks__/requests/articles'

describe('DoctorDashboard', () => {
  it('renders', () => {
    const component = shallow(
      <MockedProvider mocks={graphQLMocks} >
        <DoctorDashboard />
      </MockedProvider>
    )
    expect(component).toMatchSnapshot()
  })

  it('has three cards', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <DoctorDashboard />
      </MockedProvider>
    )
    expect(component.find('div.card').length).toBe(3)
    component.unmount()
  })

  it('has four articles', async () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <DoctorDashboard />
      </MockedProvider>
    )

    await wait(0)
    component.update()

    // Verify 4 articles exist
    const articles = component.find('div[name="article"]')
    expect(articles).toHaveLength(4)

    component.unmount()
  })

  it('should show error UI', async () => {
    const component = mount(
      <MockedProvider mocks={graphQLErrorMocks} >
        <DoctorDashboard />
      </MockedProvider>
    )

    await wait(0)
    component.update()

    expect(component.find('div[name="errorMessage"]')).toHaveLength(1)
  })
})