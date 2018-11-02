import React, { PureComponent } from 'react' 
import { Grid, Form, Button, Container, Image } from 'semantic-ui-react'
import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'

const CustomGrid = styled(Grid)`
  && {
    height: 100vh;
    margin: 0;
  }

  ${media.greaterThan('medium')`
    && .nine.column{
      background-image: url("../../static/assets/enfermera.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  `}

  ${media.lessThan('medium')`
    && .nine.column{
      display: none;
    }
  `}
  
`
const RightColumn = styled(Grid.Column)`
  ${media.lessThan('large')`
    margin: 2rem auto auto auto;
  `}

  ${media.greaterThan('large')`
    margin: auto;
  `}
`
const LoginContainer = styled(Container)`

  ${media.lessThan('large')`
    padding: 0 1rem;
  `}

  ${media.greaterThan('large')`
    padding: 0 4.5rem;
  `}

  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,'Helvetica Neue',Arial,Helvetica,sans-serif;

  &&& .field, &&& .button {
    margin-bottom: 2em;
  }

  &&& .field label {
    font-size: 14px;
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
const SecondaryContent = styled.div`
  & {
    text-align: center;
    font-size: 13px;
    line-height: 1.5rem;
    color: #3d5170;
  }

  &.footer {
    margin-top: 5rem;
  }

  & a {
    color: #007bff;
    font-weight: 500;
    text-decoration: none;
  }
`

const LoginButton = styled(Button)`
  width: 100%;
`

class Login extends PureComponent {
  render() {
    return(
      <CustomGrid>
        <Grid.Column width={9}/>
        <RightColumn mobile={16} tablet={7} computer={7}>
          <LoginContainer>
            <Image src="../../static/assets/login-logo.png" />  
            <Form>
              <Form.Input
                label="NSS o correo electrónico"
                placeholder="NSS o jorge@ejemplo.com" 
                required
              />
              <Form.Input
                label="Contraseña"
                placeholder="••••••••••" 
                type="password"
                required
              />
              <LoginButton small="true" primary type="submit">Ingresar</LoginButton>
            </Form>
            <SecondaryContent>
              ¿Aún no tienes tu cuenta?
              <Link as={`/registro`} href={`/register`}>
                <a> Regístrate</a>
              </Link>
            </SecondaryContent>
            <SecondaryContent>
              <Link as={`/recuperar`} href={`/recovery`}>
                <a>Olvidé mi contraseña</a>
              </Link>
            </SecondaryContent>
            <SecondaryContent className="footer">
              © Instituto Mexicano del Seguro Social. Todos los derechos reservados.
            </SecondaryContent>
          </LoginContainer>
        </RightColumn>
      </CustomGrid>
    )
  }
}

export default Login