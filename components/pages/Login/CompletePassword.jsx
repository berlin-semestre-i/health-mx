import React, { PureComponent } from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import AuthenticationLayout from '../../Layout/AuthenticationLayout'
import styled from 'styled-components'
import { Auth } from 'aws-amplify'
import { getCookie, removeCookie, setCookie } from '../../../utils/session'
import { redirectIfAuthenticated } from '../../../utils/auth'

class CompletePassword extends PureComponent {

  state = {
    username: '',
    name: '',
    familyName: '',
    phoneNumber:
      getCookie('cognito-phone-number')
        ? getCookie('cognito-phone-number')
        : ''
    ,
    email:
      getCookie('cognito-email')
        ? getCookie('cognito-email')
        : ''
    ,
    oldPassword: '',
    newPassword: '',
  }

  componentDidMount() {
    const username = getCookie('cognito-username')
    this.setState({
      username: username ? username : '',
    })
  }

  onChange = (e, { name, value }) => {
    this.setState({ [[name]]: value })
  }

  completePassword = async () => {
    const {
      name,
      familyName,
      phoneNumber,
      email,
      username,
      oldPassword,
      newPassword,
    } = this.state

    let attributes = {
      name: name,
      'family_name': familyName,
    }

    if (phoneNumber || phoneNumber !== '') {
      attributes['phone_number'] = `+52${phoneNumber}`
    }
    if (email || email !== '') {
      attributes.email = email
    }

    try {
      const user = await Auth.signIn(username, oldPassword)
      await Auth.completeNewPassword(user, newPassword, attributes)

      const session = await Auth.currentSession()
      setCookie('cognito-access-token', session.getAccessToken().getJwtToken())
      removeCookie('cognito-username')
      removeCookie('cognito-phone-number')
      removeCookie('cognito-email')
      redirectIfAuthenticated()
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const {
      name,
      familyName,
      phoneNumber,
      email,
      oldPassword,
      newPassword,
    } = this.state

    return (
      <AuthenticationLayout>
        <Form>
          <Grid>
            <Grid.Column width={8}>
              <Form.Input
                name="name"
                label="Nombre"
                icon="user"
                iconPosition="left"
                value={name}
                onChange={this.onChange}
                placeholder="Morty"
                required
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Input
                name="familyName"
                label="Apellido"
                icon="user"
                iconPosition="left"
                value={familyName}
                onChange={this.onChange}
                placeholder="Smith"
                required
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Form.Input
                name="phoneNumber"
                label="Teléfono Celular"
                icon="phone"
                iconPosition="left"
                value={phoneNumber}
                onChange={this.onChange}
                placeholder="3331112222"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Form.Input
                name="email"
                label="Correo Electrónico"
                icon="at"
                iconPosition="left"
                value={email}
                onChange={this.onChange}
                placeholder="morty.smith@email.com"
              />
            </Grid.Column>
            <Grid.Column width={16}>
              <Form.Input
                name="oldPassword"
                label="Contraseña Vieja"
                icon="lock"
                iconPosition="left"
                value={oldPassword}
                onChange={this.onChange}
                placeholder="••••••••••"
                autoComplete="off"
                type="password"
                required
              />
            </Grid.Column>
            <Grid.Column width={16}>
              <Form.Input
                name="newPassword"
                label="Contraseña Nueva"
                icon="lock"
                iconPosition="left"
                value={newPassword}
                onChange={this.onChange}
                placeholder="••••••••••"
                autoComplete="off"
                type="password"
                required
              />
            </Grid.Column>
          </Grid>
          <CompleteButton
            small="true"
            primary
            type="submit"
            onClick={this.completePassword}
          >
            Ingresar
          </CompleteButton>
        </Form>
      </AuthenticationLayout>
    )
  }

}

export default CompletePassword

const CompleteButton = styled(Button)`
  & {
    width: 100%;
  }
`
