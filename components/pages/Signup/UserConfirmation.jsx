import React from 'react'
import { Grid, List, Button, Container, Icon, Step, Checkbox } from 'semantic-ui-react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export class UserConfirmation extends React.Component {
    continue = e => {
      e.preventDefault()
      this.props.nextStep()
    }

    back = e => {
      e.preventDefault()
      this.props.prevStep()
    }

    render(){
      const {
        values: { curp, nss, email },
      } = this.props

      return(
        <React.Fragment>
          <LoginBody />
          <LoginGrid>
            <ImageColumn className="image-container" width={9}/>
            <LoginColumn mobile={16} tablet={7} computer={7}>
              <LoginContainer>
                <Link href="">
                  <h3 className="ui header" onClick={this.back}>
                    <Icon fitted name="angle left" /> Atrás
                  </h3>
                </Link>
                <StepGroup size="mini">
                  <Step>
                    <Step.Title>Inicio</Step.Title>
                  </Step>
                  <Step>
                    <Step.Title>Validación</Step.Title>
                  </Step>
                  <Step>
                    <Step.Title>Fotografía</Step.Title>
                  </Step>
                  <Step active>
                    <Step.Title>Confirmación</Step.Title>
                  </Step>
                </StepGroup>
                <div className="instructions">
                  <p>
                Revisa que tus datos sean correctos y haz clic en <strong>Enviar solicitud </strong>
                para finalizar tu registro a Health-MX.
                  </p>
                </div>
                <List>
                  <ListItem>
                    <List.Content>
                      <List.Header>CURP</List.Header>
                      <List.Description>{curp}</List.Description>
                    </List.Content>
                  </ListItem>
                  <ListItem>
                    <List.Content>
                      <List.Header>NSS</List.Header>
                      <List.Description>{nss}</List.Description>
                    </List.Content>
                  </ListItem>
                  <ListItem>
                    <List.Content>
                      <List.Header>Correo electrónico</List.Header>
                      <List.Description>{email}</List.Description>
                    </List.Content>
                  </ListItem>
                </List>
                <InfoContent>
                  <Checkbox label={<label>He leído y acepto el
                    <Link href=""> aviso de privacidad</Link> y
                    <Link href=""> términos y condiciones</Link>.</label>}
                  />
                </InfoContent>
                <Link href="#">
                  <FinishButton
                    small="true"
                    primary type="submit"
                    onClick={this.continue}
                  >
                      Enviar solicitud
                  </FinishButton>
                </Link>
              </LoginContainer>
            </LoginColumn>
          </LoginGrid>
        </React.Fragment>
      )
    }
}

export default UserConfirmation

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
    margin-top: 9rem;
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
const FinishButton = styled(Button)`
  & {
    width: 100%;
  }
`
const ListItem = styled(List.Item)`
  & {
      margin-bottom: 1rem;
  }
`
const InfoContent = styled.div`
  & {
    text-align: left;
    font-size: 14px;
    line-height: 3rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }

  &.footer {
    margin-top: 5rem;
  }

  & a {
    font-weight: 500;
  }
`
const StepGroup = styled(Step.Group)`
  &.steps {
      border: none;
  }
  &.steps .step{
      border-right: none;
      color: #818EA3;
  }
  &.steps .step.active {
      background: transparent;
  }
  &.steps .step.active:after {
    background: transparent;
}
`