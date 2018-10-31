import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders', () => {
    const component = shallow(<SearchBar />)
    expect(component).toMatchSnapshot()
  })
})