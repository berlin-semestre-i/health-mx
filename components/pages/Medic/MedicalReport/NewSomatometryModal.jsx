import React, { PureComponent } from 'react'
import { Modal, Icon, Form, Button, Input } from 'semantic-ui-react'
import styled from 'styled-components'

function getIMC(weight, height) {
  return weight/(height*height)
}

class NewSomatometry extends PureComponent {

  state = {
    pulse: '',
    weight: '',
    height: '',
    temperature: '',
    imc: 'N/A',
    error: '',
  }

  updateState = (e, {name, value}) => {
    this.setState({
      [name]: value,
    })

    if(name === 'weight' || name === 'height'){
      this.updateIMC(name, value)
    }
  }

  updateIMC = (name, value) => {
    let imc = 0
    if(name === 'weight')
      imc = getIMC(value, this.height/100)
    else
      imc = getIMC(this.state.weight, value/100)

    this.setState({imc: imc? imc.toFixed(1): 'N/A'})
  }

  save = () => {
    const { pulse, weight, height, temperature } = this.state
    let enabled = pulse.length>0 && weight.length>0 && height.length>0
    && temperature.length>0

    if(enabled) {
      //save data
      this.close()
    } else {
      this.setState({ error: 'Llena todos los campos.'})
    }
  }

  close = () => {
    this.setState({
      pulse: '',
      weight: '',
      height: '',
      temperature: '',
      imc: 'N/A',
      error: '',
    })
    this.props.close()
  }

  render() {
    const { open } = this.props
    const { pulse, weight, height, temperature, imc, error } = this.state

    return (
      <React.Fragment>
        <NewSomatometryModal open={open} onClose={this.close}>
          <ModalHeader>
            <h1>Nueva somatometría</h1>
            <CloseModal name="times" onClick={this.close} />
          </ModalHeader>
          <Modal.Content>
            <Form>
              <Form.Group>
                <Form.Field width={3}>
                  <label>Presión y pulso:</label>
                  <Input type="number" value={pulse} name="pulse" onChange={this.updateState} />
                  <span>p/m</span>
                </Form.Field>
                <Form.Field width={3}>
                  <label>Peso:</label>
                  <Input type="number" value={weight} name="weight" onChange={this.updateState} />
                  <span>kg</span>
                </Form.Field>
                <Form.Field width={3}>
                  <label>Estatura:</label>
                  <Input type="number" value={height} name="height" onChange={this.updateState} />
                  <span>cm</span>
                </Form.Field>
                <Form.Field width={3}>
                  <label>Temperatura:</label>
                  <Input
                    type="number"
                    value={temperature}
                    name="temperature"
                    onChange={this.updateState}
                  />
                  <span>°C</span>
                </Form.Field>
                <Form.Field name="imc" width={3} >
                  <label>IMC:</label>
                  <p>{imc}</p>
                </Form.Field>
              </Form.Group>
              <ErrorMsg>{error}</ErrorMsg>
            </Form>
          </Modal.Content>
          <ModalFooter>
            <Button content="Cerrar" basic color="blue" onClick={this.close} />
            <Button content="Guardar" onClick={this.save} name="save-somatometry" />
          </ModalFooter>
        </NewSomatometryModal>
      </React.Fragment>
    )
  }
}

export default NewSomatometry

const ModalHeader = styled(Modal.Header)`
  &&.header {
    border-bottom: none;
    position: relative;
  }
`
const ModalFooter = styled(Modal.Actions)`
  &&.actions {
    border-top: none;
    background-color: #FFFF;
  }
`
const NewSomatometryModal = styled(Modal)`
  & {
    padding: 1em;
  }

  & h3.ui.header {
    font-size: 12px;
  }

  & div.field span {
    margin-left: 1em;
  }

  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
      display: none;
      margin: 0;
  }

  & .ui.form .field .ui.input {
    width: 70%;
  }
`
const CloseModal = styled(Icon)`
  & {
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
    color: #3d5170;
  }
`
const ErrorMsg = styled.span`
  color: red;
`