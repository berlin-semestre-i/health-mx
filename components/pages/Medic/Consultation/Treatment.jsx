import React, { PureComponent } from 'react'
import { Form, Table, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Card from '../../../shared/Card'

const errorMsg = 'Llena todos los campos.'

class Treatment extends PureComponent {

  state = {
    dose: '',
    medicine: '',
    frequency: '',
    duration: '',
    error: '',
    isMouseOnRow: -1,
  }

  updateState = (e, {name, value}) => this.setState({ [name]: value })

  deleteMedication = index => this.props.deleteMedication(index)

  addNewMedication = () => {
    const { dose, medicine, frequency, duration } = this.state

    let enabled =
      dose.length > 0 &&
      medicine.length > 0 &&
      frequency.length > 0 &&
      duration.length > 0

    if(enabled) {
      this.props.addMedication({ dose, medicine, frequency, duration })
      this.setState({
        dose: '',
        medicine: '',
        frequency: '',
        duration: '',
        error: '',
      })
    } else {
      this.setState({ error: errorMsg })
    }
  }

  mouseEnter = index => this.setState({ isMouseOnRow: index })

  mouseLeave = () => this.setState({ isMouseOnRow: -1 })

  render () {

    const { dose, medicine, frequency, duration, error,
      indications, isMouseOnRow } = this.state

    const { treatment, onChange } = this.props

    return (
      <React.Fragment>
        <Card header="Tratamiento">
          <Form>
            <Form.Group name="newMedication">
              <Form.Input
                name="dose"
                label="Dosis"
                placeholder="Dosis"
                width={2}
                value={dose}
                onChange={this.updateState}
              />
              <Form.Input
                name="medicine"
                label="Medicamento"
                placeholder="Medicamento"
                width={6}
                value={medicine}
                onChange={this.updateState}
              />
              <Form.Input
                name="frequency"
                label="Frecuencia"
                placeholder="Frecuencia"
                width={4}
                value={frequency}
                onChange={this.updateState}
              />
              <Form.Input
                name="duration"
                label="Duración"
                placeholder="Duración"
                width={3}
                value={duration}
                onChange={this.updateState}
              />
              <AddIconContainer>
                <AddIcon
                  name="plus"
                  onClick={() => this.addNewMedication()}
                />
              </AddIconContainer>
            </Form.Group>
            <ErrorMessage name="error">{ error }</ErrorMessage>
            <Table basic="very">
              <Table.Body>
                {treatment.map((med, index) => (
                  <Table.Row
                    name="medication"
                    key={index}
                    onMouseEnter={() => this.mouseEnter(index)}
                    onMouseLeave={() => this.mouseLeave()}
                  >
                    <Table.Cell width={2}>{med.dose}</Table.Cell>
                    <Table.Cell width={6}>{med.medicine}</Table.Cell>
                    <Table.Cell width={4}>{med.frequency}</Table.Cell>
                    <Table.Cell width={3}>{med.duration}</Table.Cell>
                    <Table.Cell width={1}>
                      {isMouseOnRow === index ?
                        <DeleteIcon
                          name="trash"
                          onClick={() => this.deleteMedication(index)}
                        /> : null
                      }
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <FormTextArea
              name="indications"
              label="Indicaciones del tratamiento:"
              placeholder="Escribe aquí las indicaciones del tratamiento."
              value={indications}
              onChange={onChange}
            />
          </Form>
        </Card>
      </React.Fragment>
    )
  }
}

export default Treatment

const AddIcon = styled(Icon)`
  && {
    color: #3d5170;
    cursor: pointer;
  }

  &&:hover {
    color: #818ea3;
  }

  ${media.greaterThan('small')`
    &&, &&:hover {
      position: absolute;
      bottom: 15px;
    }
  `}
`
const DeleteIcon = styled(Icon)`
    && {
      color: #3d5170;
      cursor: pointer;
    }

    &&:hover {
      color: #818ea3;
    }
`
const AddIconContainer = styled(Form.Field)`
  position: relative;

  ${media.lessThan('small')`
    &&&.field {
      margin-bottom: 1em;
    }
  `}
`
const ErrorMessage = styled.span`
  color: red;
`
const FormTextArea = styled(Form.TextArea)`
   & textarea {
    font-family: -apple-system,system-ui,BlinkMacSystemFont, 
    "Segoe UI",Roboto,'Helvetica Neue',Arial,Helvetica,sans-serif;
   }
`