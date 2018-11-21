import React from 'react'
import { Grid, List, Button, Container, Icon, Step, Checkbox } from 'semantic-ui-react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const Success = () => (
  <React.Fragment>
    <LoginBody />
    <LoginGrid>
      <ImageColumn className="image-container" width={9}/>
      <LoginColumn mobile={16} tablet={7} computer={7}>
        <LoginContainer>
          <SuccessIcon name="check circle" size="massive" />
          <h1 className="ui header">Solicitud enviada</h1>
          <InfoContent>
            <p>
            Gracias por enviar tu solicitud. En las próximas horas
            recibirás un correo electrónico con la aprobación de
            tu cuenta y contraseña temporal.
            </p>
          </InfoContent>
          <Link href="/"><Button secondary>Volver a pantalla de inicio</Button></Link>
        </LoginContainer>
      </LoginColumn>
    </LoginGrid>
  </React.Fragment>
)

export default Success

const LoginBody = createGlobalStyle`
  body {
    background-color: #FFFFFF;
  }
`
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

  & {
      text-align: center;
  }

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

  &&& .greet {
      margin-bottom: 2rem;
  }

  &&& .instructions{
      margin-bottom: 2rem;
  }

  &&& .input p{
      font-weight: 500;
  }
`
const SuccessIcon = styled(Icon)`
  & {
      color: #6DC00C;
  }
`

const InfoContent = styled.div`
  & {
      margin-top: 3rem;
      margin-bottom: 3rem;
  }
`