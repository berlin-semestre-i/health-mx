import React, { Fragment } from 'react'
import SideBar from '../../shared/SideBar/SideBar'
import SearchBar from '../../shared/SearchBar/SearchBar'
import { CustomContainer, MainContainer } from '../../../static/styledComponents'


const Layout = ({ children }) => (
  <Fragment>
    <SideBar className="standard"/>
    <CustomContainer>
        <SearchBar placeholder="Buscar derechohabiente o tarea"/>
        <MainContainer>
          { children }
        </MainContainer>
    </CustomContainer>
  </Fragment>
)

export default Layout