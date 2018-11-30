import React, { PureComponent } from 'react'
import { Form, Button, Image } from 'semantic-ui-react'
import AuthenticationLayout from '../../Layout/AuthenticationLayout'
import Link from 'next/link'
import styled from 'styled-components'
import { Auth } from 'aws-amplify'
import redirect from '../../../utils/redirect'
import { setCookie, removeCookie } from '../../../utils/session'
import { redirectIfAuthenticated } from '../../../utils/auth'

class Login extends PureComponent {

  state = {
    username: '',
    password: '',
  }

  onChange = (e, { name, value }) => {
    this.setState({ [[name]]: value })
  }

  signIn = async () => {
    try {
      const user = await Auth.signIn(this.state.username, this.state.password)
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setCookie('cognito-username', this.state.username)
        redirect('/auth/complete-password')
      }
      else {
        removeCookie('cognito-username')
        const session = await Auth.currentSession()
        setCookie('cognito-access-token', session.getAccessToken().getJwtToken())
        redirectIfAuthenticated()
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <AuthenticationLayout>
        <Image src="../../static/images/login-logo.png" />
        <Form>
          <Form.Input
            label="NSS o correo electrónico"
            icon="user"
            value={username}
            name="username"
            onChange={this.onChange}
            iconPosition="left"
            placeholder="NSS o jorge@ejemplo.com"
            required
          />
          <Form.Input
            label="Contraseña"
            icon="lock"
            value={password}
            onChange={this.onChange}
            iconPosition="left"
            placeholder="••••••••••"
            autoComplete="off"
            name="password"
            type="password"
            required
          />
          <LoginButton
            small="true"
            primary
            type="submit"
            onClick={this.signIn}
          >
            Ingresar
          </LoginButton>
        </Form>
        <InfoContent>
          ¿Aún no tienes tu cuenta?
          <Link href="/register">
            <a> Regístrate</a>
          </Link>
        </InfoContent>
        <InfoContent>
          <Link href="/recovery">
            <a>Olvidé mi contraseña</a>
          </Link>
        </InfoContent>
        <InfoContent className="footer">
                    © Instituto Mexicano del Seguro Social. Todos los derechos reservados.
        </InfoContent>
      </AuthenticationLayout>
    )
  }
}

export default Login

const InfoContent = styled.div`
  & {
    text-align: center;
    font-size: 13px;
    line-height: 1.5rem;
  }

  &.footer {
    margin-top: 5rem;
  }

  & a {
    font-weight: 500;
  }
`

const LoginButton = styled(Button)`
  & {
    width: 100%;
  }
`
