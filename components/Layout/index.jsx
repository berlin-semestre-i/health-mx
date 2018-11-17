import React, { Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import SideBar from '../shared/SideBar'
import SearchBar from '../shared/SearchBar'
import { getPropertiesFromRole } from '../../utils/auth'

const Layout = ({ children, userRole, userGender }) => {
  const layoutProperties = getPropertiesFromRole(userRole)
  return (
    <Fragment>
      <SideBar
        userRole={userRole}
        userGender={userGender}
      />
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
