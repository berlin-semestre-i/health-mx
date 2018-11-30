import React, { PureComponent } from 'react'
import { Modal, Icon, Form, Button, Input } from 'semantic-ui-react'
import styled from 'styled-components'

class NewSomatometry extends PureComponent {

  state = {
    pulse: '',
    weight: '',
    height: '',
    temperature: '',
    imc: 'N/A',
  }

  updateState = (e, {name, value}) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { open, close } = this.props
    const { pulse, weight, height, temperature, imc } = this.state

    return (
      <React.Fragment>
        <NewSomatometryModal open={open} onClose={close}>
          <ModalHeader>
            <h1>Nueva somatometría</h1>
            <CloseModal name="times" onClick={close} />
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
            </Form>
          </Modal.Content>
          <ModalFooter>
            <Button content="Cerrar" basic color="blue" onClick={close} />
            <Button content="Guardar" />
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