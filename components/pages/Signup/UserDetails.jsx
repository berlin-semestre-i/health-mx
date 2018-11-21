import React from 'react'
import { Grid, Form, Button, Container, Icon, Step } from 'semantic-ui-react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export class UserDetails extends React.Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render(){
    const { values, handleChange } = this.props
    return(
      <React.Fragment>
        <LoginBody />
        <LoginGrid>
          <ImageColumn className="image-container" width={9}/>
          <LoginColumn mobile={16} tablet={7} computer={7}>
            <LoginContainer>
              <Link href="/">
                <h3 className="ui header"><Icon fitted name="angle left" /> Iniciar sesión</h3>
              </Link>
              <StepGroup size="mini">
                <Step active>
                  <Step.Title>Inicio</Step.Title>
                </Step>
                <Step>
                  <Step.Title>Validación</Step.Title>
                </Step>
                <Step>
                  <Step.Title>Fotografía</Step.Title>
                </Step>
                <Step>
                  <Step.Title>Confirmación</Step.Title>
                </Step>
              </StepGroup>
              <div className="instructions">
                <p>
                    Para registrarte, es necesario contar con tu CURP, NSS, correo electrónico
                    e identificación oficial.
                </p>
              </div>
              <Form>
                <Form.Input
                  label="CURP"
                  placeholder="CURP"
                  required
                  maxLength="18"
                  onChange={handleChange('curp')}
                  defaultValue={values.curp}
                />
                <Form.Input
                  label="Número de Seguro Social (NSS)"
                  placeholder="NSS"
                  required
                  maxLength="11"
                  onChange={handleChange('nss')}
                  defaultValue={values.nss}
                />
                <Form.Input
                  label="Correo electrónico"
                  placeholder="john@ejemplo.com"
                  required
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                />
                <Link href="#">
                  <NextButton
                    small="true"
                    primary type="submit"
                    onClick={this.continue}
                  >
                      Siguiente
                  </NextButton>
                </Link>
              </Form>
            </LoginContainer>
          </LoginColumn>
        </LoginGrid>
      </React.Fragment>
    )
  }

}

export default UserDetails

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

  &&& .instructions {
      margin-bottom: 2rem;
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