import React, { PureComponent } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const SideMenu = styled(Menu)`
  &&&& {
    border: none;
    -webkit-box-shadow: 0 0 10px 1px #e7e9ed;
    box-shadow: 0 0 10px 1px #e7e9ed;
    background-color: ${props => props.background};
  }
`
class SideBar extends PureComponent {
  render() {
    const {background} = this.props
    return (
      <SideMenu
        name="sideMenu"
        vertical
        fixed="left"
        background={background}
      />
    )
  }
}

export default SideBar