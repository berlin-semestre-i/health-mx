import React, { PureComponent } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Menu, Image, Icon, Popup } from 'semantic-ui-react'
import styled from 'styled-components'
import { getPropertiesFromRole } from '../../../utils/authorization'
import { defaultManAvatar, defaultWomanAvatar } from '../../../utils/constants'
import { Auth } from 'aws-amplify'
import { signOut } from '../../../utils/auth'

class SideBar extends PureComponent {

  handleSignOut = async () => {
    try{
      await Auth.signOut()
      signOut()
    } catch (err) {
      console.log(err)
    }
  }

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
          <DynamicElement
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
          </DynamicElement>
        </Link>
        { roleProperties.menuItems.map(item => (
          <Link href={item.newTab ? item.address : `/${userRole}${item.address}`} key={item.id}>
            <a target={item.newTab ? '_blank' : ''}>
              <DynamicElement
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
              </DynamicElement>
            </a>
          </Link>
        ))}
        <Notifications name="notifications">
          <MenuItem>
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
          </MenuItem>
        </Notifications>
        <Tips name="tips">
          <MenuItem onClick={this.handleSignOut}>
            <Popup
              flowing
              inverted
              onClick={this.handleSignOut}
              size="tiny"
              position="top right"
              horizontalOffset={12}
              trigger = {
                <Icon name="sign out" size="large"/>
              }
              content="Cerrar sesión"
            />
          </MenuItem>
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

const DynamicElement = styled(Menu.Item)`
  &&&& {
    margin-left: 18px;
  }
`

const MenuItem = styled.div`
  && {
    padding: 0 20px 0 10px;
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
    cursor: pointer;
    margin-top: auto;
    align-self: flex-end;
  }
`

const Tips = styled(Menu.Item)`
  &&&& {
    cursor: pointer;
    margin-bottom: 0;
    align-self: flex-end;
  }
`