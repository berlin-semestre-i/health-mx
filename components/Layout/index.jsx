import React, { Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import SideBar from '../shared/SideBar/SideBar'
import SearchBar from '../shared/SearchBar/SearchBar'
import { medic, beneficiary, nurse, error, admin } from './rolesProperties.json'

const getPropertiesFromRole = (userRole) => {
  if ( userRole === 'medic' ) {
    return medic
  }
  else if ( userRole === 'beneficiary' ) {
    return beneficiary
  }
  else if ( userRole === 'nurse' ) {
    return nurse
  }
  else if ( userRole === 'admin' ) {
    return admin
  }
  else {
    return error
  }
}

const Layout = ({ children, userRole }) => {
  const layoutProperties = getPropertiesFromRole(userRole)
  return (
    <Fragment>
      <SideBar background={layoutProperties.background}/>
      <GlobalContainer>
        <SearchBar placeholder={layoutProperties.placeholder}/>
        <MainContainer>
          { children }
        </MainContainer>
      </GlobalContainer>
    </Fragment>
  )
}

export default Layout

const GlobalContainer = styled(Container)`
  &&& {
    margin: 0;
    width: 100%;
  }
`

const MainContainer = styled(Container)`
  &&& {
    margin: 0;
    width: 100%;
    padding: 3rem 3rem 0;
  }
`
