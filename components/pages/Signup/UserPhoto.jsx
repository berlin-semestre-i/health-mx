import React from 'react'
import { Grid, Form, Button, Container, Icon, Step } from 'semantic-ui-react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'
import UploadcareUploader from './UploadcareUploader'

export class UserPhoto extends React.Component {
    continue = e => {
      e.preventDefault()
      this.props.nextStep()
    }

    back = e => {
      e.preventDefault()
      this.props.prevStep()
    }

    render(){
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
                  <Step active>
                    <Step.Title>Fotografía</Step.Title>
                  </Step>
                  <Step>
                    <Step.Title>Confirmación</Step.Title>
                  </Step>
                </StepGroup>
                <div className="instructions">
                  <p>
                A continuación, sube una fotografía tuya mostrando la identificación
                que utilizaste en el paso anterior. <strong>Es importante que la fotografía
                muestre tu rostro de una forma clara.</strong>
                  </p>
                </div>
                <div className="input">
                  <p>Fotografía personal</p>
                  <UploadcareUploader mini="true" label="Subir archivo" />
                  <UploadcareUploader mini="true" label="Tomar fotografía" />
                </div>
                <Link href="#">
                  <NextButton
                    small="true"
                    primary type="submit"
                    onClick={this.continue}
                  >
                      Siguiente
                  </NextButton>
                </Link>
              </LoginContainer>
            </LoginColumn>
          </LoginGrid>
        </React.Fragment>
      )
    }
}

export default UserPhoto

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
      font-size: 16px;
      font-weight: 500;
  }
`
const NextButton = styled(Button)`
  & {
    float: right;
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