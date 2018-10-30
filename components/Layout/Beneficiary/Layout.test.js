import React from 'react'
import { shallow, mount } from 'enzyme'
import Layout from './index'
import SearchBar from '../../shared/SearchBar/SearchBar'
import SideBar from '../../shared/SideBar/SideBar'

describe('Layout', () => {
  it('renders', () => {
    const component = shallow(<Layout />)
    expect(component).toMatchSnapshot()
  })


  it('should contain a SearchBar and a SideBar', () => {
    const wrapper = mount(<Layout />)
    expect(wrapper.contains(<SearchBar placeholder="Buscar tarea o servicio"/>)).toEqual(true)
    expect(wrapper.contains(<SideBar className="beneficiary"/>)).toEqual(true)
    wrapper.unmount()
  })
})