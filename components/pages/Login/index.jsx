import React from 'react'
import { Grid, Form, Button, Container, Image } from 'semantic-ui-react'
import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'

const Login = () => (
  <React.Fragment>
    <LoginGrid>
      <ImageColumn className="image-container" width={9}/>
      <LoginColumn mobile={16} tablet={7} computer={7}>
        <LoginContainer>
          <Image src="../../static/images/login-logo.png" />
          <Form>
            <Form.Input
              label="NSS o correo electrónico"
              icon="user"
              iconPosition="left"
              placeholder="NSS o jorge@ejemplo.com"
              required
            />
            <Form.Input
              label="Contraseña"
              icon="lock"
              iconPosition="left"
              placeholder="••••••••••"
              autoComplete="off"
              type="password"
              required
            />
            <Link href="/medic">
              <LoginButton small="true" primary type="submit">Ingresar</LoginButton>
            </Link>
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
        </LoginContainer>
      </LoginColumn>
    </LoginGrid>
  </React.Fragment>
)

export default Login

const LoginGrid = styled(Grid)`
  && {
    height: 100vh;
    margin: 0;
    margin-left: -84px;
  }
`
const ImageColumn = styled(Grid.Column)`
  ${media.greaterThan('large')`
    &&&.image-container {
      padding: 0;
      background-image: url("../../static/images/enfermera.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  `}

  ${media.lessThan('large')`
    &&&.image-container {
      display: none;
    }
  `}
`
const LoginColumn = styled(Grid.Column)`
  & {
    margin: auto;
  }
`
const LoginContainer = styled(Container)`
  ${media.lessThan('large')`
    & {
      padding: 0 1rem;
    }
  `}

  ${media.greaterThan('large')`
    & {
      padding: 0 4.5rem;
    }
  `}

  &&& .field, &&& .button {
    margin-bottom: 2em;
  }

  &&& .field label {
    font-size: 16px;
    font-weight: normal;
  }

  &&& .field label:after {
    display: none;
  }

  &&& img {
    max-width: 65%;
    margin-bottom: 3rem;
  }
`
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
