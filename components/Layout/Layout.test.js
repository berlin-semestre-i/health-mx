import React from 'react'
import { shallow, mount } from 'enzyme'
import Layout from './index'
import SearchBar from '../shared/SearchBar/SearchBar'
import SideBar from '../shared/SideBar/SideBar'
import { medic, beneficiary, nurse, admin, error } from './rolesProperties.json'
import 'jest-styled-components'

const defaultRole = 'medic'

describe('Layout', () => {
  it('renders', () => {
    const component = shallow(<Layout userRole={defaultRole}/>)
    expect(component).toMatchSnapshot()
  })

  it('should contain a SearchBar and a SideBar', () => {
    const wrapper = mount(<Layout userRole={defaultRole}/>)
    expect(wrapper.contains(<SearchBar placeholder={medic.placeholder}/>)).toEqual(true)
    expect(wrapper.contains(<SideBar background={medic.background}/>)).toEqual(true)
    wrapper.unmount()
  })

  it('should have medic properties when medic role', () => {
    const wrapper = mount(<Layout userRole="medic"/>)
    expect(wrapper.contains(<SearchBar placeholder={medic.placeholder}/>)).toEqual(true)
    expect(wrapper.contains(<SideBar background={medic.background}/>)).toEqual(true)
    expect(wrapper).toHaveStyleRule(
      'background-color',
      medic.background,
      {
        modifier: '&&&&',
      }
    )
    wrapper.unmount()
  })

  it('should have beneficiary properties when beneficiary role', () => {
    const wrapper = mount(<Layout userRole="beneficiary"/>)
    expect(wrapper.contains(<SearchBar placeholder={beneficiary.placeholder}/>)).toEqual(true)
    expect(wrapper.contains(<SideBar background={beneficiary.background}/>)).toEqual(true)
    expect(wrapper).toHaveStyleRule(
      'background-color',
      beneficiary.background,
      {
        modifier: '&&&&',
      }
    )
    wrapper.unmount()
  })

  it('should have nurse properties when nurse role', () => {
    const wrapper = mount(<Layout userRole="nurse"/>)
    expect(wrapper.contains(<SearchBar placeholder={nurse.placeholder}/>)).toEqual(true)
    expect(wrapper.contains(<SideBar background={nurse.background}/>)).toEqual(true)
    expect(wrapper).toHaveStyleRule(
      'background-color',
      nurse.background,
      {
        modifier: '&&&&',
      }
    )
    wrapper.unmount()
  })

  it('should have admin properties when admin role', () => {
    const wrapper = mount(<Layout userRole="admin"/>)
    expect(wrapper.contains(<SearchBar placeholder={admin.placeholder}/>)).toEqual(true)
    expect(wrapper.contains(<SideBar background={admin.background}/>)).toEqual(true)
    expect(wrapper).toHaveStyleRule(
      'background-color',
      admin.background,
      {
        modifier: '&&&&',
      }
    )
    wrapper.unmount()
  })

  it('should have error properties when no existing role', () => {
    const wrapper = mount(<Layout userRole="nonExistingRole"/>)
    expect(wrapper.contains(<SearchBar placeholder={error.placeholder}/>)).toEqual(true)
    expect(wrapper.contains(<SideBar background={error.background}/>)).toEqual(true)
    expect(wrapper).toHaveStyleRule(
      'background-color',
      error.background,
      {
        modifier: '&&&&',
      }
    )
    wrapper.unmount()
  })
})