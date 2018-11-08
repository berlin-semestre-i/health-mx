import React, { Fragment } from 'react'
import SideBar from '../../shared/SideBar/SideBar'
import SearchBar from '../../shared/SearchBar/SearchBar'
import { CustomContainer, MainContainer } from '../../../static/styledComponents'

const Layout = ({ children }) => (
  <Fragment>
    <SideBar className="beneficiary"/>
    <CustomContainer>
      <SearchBar placeholder="Buscar tarea o servicio"/>
      <MainContainer>
        { children }
      </MainContainer>
    </CustomContainer>
  </Fragment>
)

export default Layout