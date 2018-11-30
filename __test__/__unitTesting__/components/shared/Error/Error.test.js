import React from 'react'
import { shallow, mount } from 'enzyme'
import Error from '../../../../../components/shared/Error'

const errorMessageString = 'error'
const errorMessageNotString = 2

describe('Error', () => {
  it('renders', () => {
    const component = shallow(<Error error={errorMessageString}/>)
    expect(component).toMatchSnapshot()
  })

  it('renders not string error correctly', () => {
    const component = mount(<Error error={errorMessageNotString}/>)
    expect(component.find('div[name="errorMessage"]').text()).toBe('An error occurred')
  })
})