import React from 'react'
import { shallow, mount } from 'enzyme'
import PageHeader from '../../../../../components/shared/PageHeader'
import wait from 'waait'

Date.now = jest.fn(() => 1487076719000)

describe('Header', () => {
  it('renders', () => {
    const component = shallow(<PageHeader title="" subtitle="" />)
    expect(component).toMatchSnapshot()
  })
})