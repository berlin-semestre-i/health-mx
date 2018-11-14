import React from 'react'
import Link from 'next/link'
import { Menu, Image, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { getPropertiesFromRole } from '../../../utils/auth'

class SideBar extends React.PureComponent {
  state = {
    activeItem: 'home',
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { userRole } = this.props
    const { activeItem } = this.state
    const roleProperties = getPropertiesFromRole(userRole)

    return (
      <SideMenu
        name="sideMenu"
        vertical
        fixed="left"
        background={roleProperties.background}
        icon
      >
        <Link as={`/${roleProperties.name}`} href={`/${userRole}`}>
          <HealthImage src="../../../static/images/Health-Bar-Logo.png"/>
        </Link>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name="home" size="large"/>
        </Menu.Item>
        <Menu.Item
          name="user"
          active={activeItem === 'user'}
          onClick={this.handleItemClick}
        >
          <Icon name="user" size="large"/>
        </Menu.Item>
      </SideMenu>
    )
  }
}

export default SideBar

const HealthImage = styled(Image)`
  && {
    padding: 15px 21px 36px 21px;
    cursor: pointer;
  }
`

const SideMenu = styled(Menu)`
  &&&& {
    border: none;
    -webkit-box-shadow: 0 0 10px 1px #e7e9ed;
    box-shadow: 0 0 10px 1px #e7e9ed;
    background-color: ${props => props.background};
  }
`
