import React, { PureComponent } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const CustomMenu = styled(Menu)`
  &&&& {
    width: 6.25%;
    border: none;
    -webkit-box-shadow: 0 0 10px 1px #e7e9ed;
    box-shadow: 0 0 10px 1px #e7e9ed;
  }
`
class Sidebar extends PureComponent {
  render() {
    return (
      <CustomMenu
        vertical
        className="standard"
        fixed="left"
      >
      </CustomMenu>
    )
  }
}

export default Sidebar