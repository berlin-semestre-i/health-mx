import React, { Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import SideBar from '../../shared/SideBar/SideBar'
import SearchBar from '../../shared/SearchBar/SearchBar'

const Layout = ({ children }) => (
  <Fragment>
    <SideBar background="#3d5170"/>
    <GlobalContainer>
      <SearchBar placeholder="Buscar derechohabiente o tarea"/>
      <MainContainer>
        { children }
      </MainContainer>
    </GlobalContainer>
  </Fragment>
)

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
