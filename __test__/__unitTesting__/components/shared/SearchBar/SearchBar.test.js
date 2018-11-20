import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from '../../../../../components/shared/SearchBar/index'

describe('SearchBar', () => {
  it('renders', () => {
    const component = shallow(<SearchBar placeholder="test"/>)
    expect(component).toMatchSnapshot()
  })
})