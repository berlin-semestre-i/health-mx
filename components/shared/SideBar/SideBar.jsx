import React, { PureComponent } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const CustomMenu = styled(Menu)`
  &&&& {
    width: 84px;
    border: none;
    -webkit-box-shadow: 0 0 10px 1px #e7e9ed;
    box-shadow: 0 0 10px 1px #e7e9ed;
  }

  &&&&.beneficiary {
    background-color: #1745a4;
  }
`
class Sidebar extends PureComponent {
  render() {
    const { className } = this.props
    return (
      <CustomMenu
        vertical
        className={ className }
        fixed="left"
      >
      </CustomMenu>
    )
  }
}

export default Sidebar