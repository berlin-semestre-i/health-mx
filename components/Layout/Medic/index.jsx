import React from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import SideBar from '../../shared/SideBar/SideBar'
import SearchBar from '../../shared/SearchBar/SearchBar'

const CustomContainer = styled(Container)`
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

const Layout = ({ children }) => (
  <React.Fragment>
    <SideBar background="#3d5170"/>
    <CustomContainer>
      <SearchBar />
      <MainContainer>
        { children }
      </MainContainer>
    </CustomContainer>
  </React.Fragment>
)

export default Layout