import React from 'react'
import { shallow, mount } from 'enzyme'
// eslint-disable-next-line max-len
import VirtualDeskCard from '../../../../../../components/pages/Beneficiary/VirtualDesk/VirtualDeskCard/index'
import { MockedProvider } from 'react-apollo/test-utils'
import {
  graphQLMocks,
  graphQLErrorMocks,
} from '../../../../__mocks__/requests/articles'

describe('Default table', () => {
  it('renders', () => {
    const component = shallow(<VirtualDeskCard />)
    expect(component).toMatchSnapshot()
  })

  it('has add icon', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <VirtualDeskCard />
      </MockedProvider>
    )
    expect(component.find('i.plus').length).toBe(1)
    component.unmount()
  })

  it('has move icon', () => {
    const component = mount(
      <MockedProvider mocks={graphQLMocks} >
        <VirtualDeskCard iconName="move"/>
      </MockedProvider>
    )
    expect(component.find('i.move').length).toBe(1)
    component.unmount()
  })
})

