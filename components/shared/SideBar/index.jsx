import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Menu, Image, Icon, Popup } from 'semantic-ui-react'
import styled from 'styled-components'
import { getPropertiesFromRole } from '../../../utils/auth'
import { defaultManAvatar, defaultWomanAvatar } from '../../../utils/constants'

class SideBar extends React.PureComponent {
  render() {
    const { userRole, router, userAvatar, userGender } = this.props
    const roleProperties = getPropertiesFromRole(userRole)
    const genderDefaultAvatar = userGender === 'male' ? defaultManAvatar : defaultWomanAvatar
    const route = router.route

    return (
      <SideMenu
        name="sideMenu"
        vertical
        fixed="left"
        background={roleProperties.background}
        icon
      >
        <Link href={`/${userRole}`}>
          <HealthImage src="../../../static/images/Health-Bar-Logo.png"/>
        </Link>
        <Link href={`/${userRole}`}>
          <Menu.Item
            name="home"
            active={`/${userRole}` === route}
          >
            <Popup
              flowing
              inverted
              size="tiny"
              position="top right"
              horizontalOffset={12}
              trigger = {
                <Icon name="home" size="large"/>
              }
              content="Inicio"
            />
          </Menu.Item>
        </Link>
        { roleProperties.menuItems.map(item => (
          <Link href={`/${userRole}${item.address}`} key={item.id}>
            <Menu.Item
              name={item.name}
              active={`/${userRole}${item.address}` === route}
            >
              <Popup
                flowing
                inverted
                size="tiny"
                position="top right"
                horizontalOffset={12}
                trigger = {
                  <Icon name={item.icon} size="large"/>
                }
                content={item.description}
              />
            </Menu.Item>
          </Link>
        ))}
        <Notifications name="notifications">
          <Popup
            flowing
            inverted
            size="tiny"
            position="top right"
            horizontalOffset={12}
            trigger = {
              <Icon name="bell" size="large"/>
            }
            content="Notificaciones"
          />
        </Notifications>
        <Tips name="tips">
          <Popup
            flowing
            inverted
            size="tiny"
            position="top right"
            horizontalOffset={12}
            trigger = {
              <Icon name="question circle" size="large"/>
            }
            content="Ayuda"
          />
        </Tips>
        <Avatar
          name="userAvatar"
          src={userAvatar ? userAvatar : genderDefaultAvatar}
          circular
        />
      </SideMenu>
    )
  }
}

export default withRouter(SideBar)

const HealthImage = styled(Image)`
  && {
    margin: 15px 21px 36px 21px;
    width: 42px;
    height: 40px;
    cursor: pointer;
  }
`

const SideMenu = styled(Menu)`
  &&&& {
    display: flex;
    border: none;
    -webkit-box-shadow: 0 0 10px 1px #e7e9ed;
    box-shadow: 0 0 10px 1px #e7e9ed;
    background-color: ${props => props.background};
  }
`

const Avatar = styled(Image)`
  &&&& {
    background-color: #FFFFFF;
    width: 48.8px;
    height: 48.8px;
    margin: 35.6px 18px 50.6px 21px;
    align-self: flex-end;
    border: solid 2px #FFFFFF;
  }
`

const Notifications = styled(Menu.Item)`
  &&&& {
    margin-top: auto;
    align-self: flex-end;
  }
`

const Tips = styled(Menu.Item)`
  &&&& {
    margin-bottom: 0;
    align-self: flex-end;
  }
`