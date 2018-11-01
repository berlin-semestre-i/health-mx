import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import SideBar from '../../shared/SideBar/SideBar'
import SearchBar from '../../shared/SearchBar/SearchBar'

const CustomContainer = styled(Container)`
  &&& {
    margin: 0;
    width: 100%;
    background-color: #f4f6f8;
    height: 100vh;
  }
`

const CustomGrid = styled(Grid)`
  &&& {
    margin: 0;
  }
`

const Column = styled(Grid.Column)`
  &&&& {
    padding: 0;
  }
`

const Layout = ({ children }) => (
  <CustomGrid columns={2}>
    <Column width={1}>
      <SideBar />
    </Column>
    <Column width={15}>
      <CustomContainer>
          <SearchBar />
          <Container className="main-container">
            { children }
          </Container>
      </CustomContainer>
    </Column>
  </CustomGrid>
)

export default Layout