import React from 'react'
import { shallow, mount } from 'enzyme'
import SideBar from './index'
import { testsConstants, defaultManAvatar, defaultWomanAvatar } from '../../../utils/constants'
import { medic, beneficiary, nurse, admin, error } from '../../Layout/rolesProperties.json'
import 'jest-styled-components'

describe('SideBar', () => {
  it('renders', () => {
    const wrapper = shallow(
      <SideBar userRole={testsConstants.userRole} userGender={testsConstants.userGender}/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should have medic properties when medic role', () => {
    const wrapper = mount(
      <SideBar userRole="medic" userGender={testsConstants.userGender} router={jest.fn()}/>
    )
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
    const wrapper = mount(
      <SideBar userRole="beneficiary" userGender={testsConstants.userGender} router={jest.fn()}/>
    )
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
    const wrapper = mount(
      <SideBar userRole="nurse" userGender={testsConstants.userGender} router={jest.fn()}/>
    )
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
    const wrapper = mount(
      <SideBar userRole="admin" userGender={testsConstants.userGender} router={jest.fn()}/>
    )
    expect(wrapper).toHaveStyleRule(
      'background-color',
      admin.background,
      {
        modifier: '&&&&',
      }
    )
    wrapper.unmount()
  })

  it('should have error properties when error', () => {
    const wrapper = mount(
      <SideBar userRole="error" userGender={testsConstants.userGender} router={jest.fn()}/>
    )
    expect(wrapper).toHaveStyleRule(
      'background-color',
      error.background,
      {
        modifier: '&&&&',
      }
    )
    wrapper.unmount()
  })

  it('should render userAvatar if provided', () => {
    const wrapper = mount(
      <SideBar userAvatar={defaultWomanAvatar} userRole="error" router={jest.fn()}/>
    )
    expect(wrapper.find('img[name="userAvatar"]').prop('src')).toEqual(defaultWomanAvatar)
  })

  it('should render default woman avatar when no userAvatar found and user is female', () => {
    const wrapper = mount(
      <SideBar userRole="error" userGender="female" router={jest.fn()}/>
    )
    expect(wrapper.find('img[name="userAvatar"]').prop('src')).toEqual(defaultWomanAvatar)
  })

  it('should render default man avatar when no userAvatar found and user male', () => {
    const wrapper = mount(
      <SideBar userRole="error" userGender="male" router={jest.fn()}/>
    )
    expect(wrapper.find('img[name="userAvatar"]').prop('src')).toEqual(defaultManAvatar)
  })
})