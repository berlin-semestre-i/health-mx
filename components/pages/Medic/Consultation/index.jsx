import React, { PureComponent } from 'react'
import { Grid, Dropdown, Form, Button, Icon, List, Table } from 'semantic-ui-react'
import Header from '../../../shared/PageHeader'
import Card from '../../../shared/Card'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

const incompleteErrorMsg = 'Llena todos los campos.'
const healthStatusOptions = [{
  text: 'Regular',
  value: 0,
}, {
  text: 'Crítico',
  value: 1,
}]
const somatometry = {
  nurse: 'Rodrigo Fernández',
  height: 169,
  weight: 63,
  pulse: 68,
  imc: 22.06,
  temperature: 36,
}

class Consultation extends PureComponent {

  state = {
    healthStatus: 0,
    indications: '',
    treatment: [],
    information: {
      motive: '',
      physicalExploration: '',
      conclusion: '',
    },
    newMedication: {
      dose: '',
      medicine: '',
      frequency: '',
      duration: '',
    },
    newMedicationError: '',
    labReports: ['Rayos X', 'Tomografía'],
    isMouseOnRow: -1,
  }

  updatedObject = (object, key, value) => {
    let copy = JSON.parse(JSON.stringify(this.state[object]))
    copy[key] = value
    return copy
  }

  updateState = (e, key) => {
    e.preventDefault()

    this.setState({
      [key]: e.target.value,
    })
  }

  updateStateObject = (e, key, parent) => {
    e.preventDefault()

    this.setState({
      [parent]: this.updatedObject(parent, key, e.target.value),
    })
  }

  addNewMedication = () => {
    let enabled =
      this.state.newMedication.dose.length > 0 &&
      this.state.newMedication.medicine.length > 0 &&
      this.state.newMedication.frequency.length > 0 &&
      this.state.newMedication.duration.length > 0

    if(enabled) {
      this.setState(prevState => ({
        treatment: [...prevState.treatment, this.state.newMedication],
      }))

      this.setState({
        newMedication: {
          dose: '',
          medicine: '',
          frequency: '',
          duration: '',
        },
        newMedicationError: '',
      })
    } else {
      this.setState({
        newMedicationError: incompleteErrorMsg,
      })
    }
  }

  deleteMedication = (index) => {
    let treatmentArray = [...this.state.treatment]
    treatmentArray.splice(index, 1)
    this.setState({
      treatment: treatmentArray,
    })
  }

  mouseEnter = (index) => {
    this.setState({ isMouseOnRow: index })
  }

  mouseLeave = () => {
    this.setState({ isMouseOnRow: -1 })
  }

  render() {

    const { healthStatus, treatment, newMedication, information,
      labReports, indications, newMedicationError, isMouseOnRow } = this.state
    const { date } = this.props

    return (
      <React.Fragment>
        <Grid>
          <Header title="Atrás" subtitle={`Consulta - ${date}`} goBack="true" />
          <Grid.Row>
            <Grid.Column mobile={16} computer={5}>
              <Card header="Somatometría Previa" iconName="print" label="Imprimir">
                <SomatometryData>
                  <p><b>Enfermero(a): </b></p> { somatometry.nurse }
                </SomatometryData>
                <SomatometryData>
                  <p><b>Estatura: </b></p> { somatometry.height } cm
                </SomatometryData>
                <SomatometryData>
                  <p><b>Peso: </b></p> { somatometry.weight } Kg
                </SomatometryData>
                <SomatometryData>
                  <p><b>Presión y pulso: </b></p> { somatometry.pulse } p/m
                </SomatometryData>
                <SomatometryData>
                  <p><b>IMC: </b></p> { somatometry.imc }
                </SomatometryData>
                <SomatometryData>
                  <p><b>Temperatura: </b></p> { somatometry.temperature } °C
                </SomatometryData>
              </Card>
              <Card header="Estado de Salud" iconName="pencil" iconColor="blue">
                <Dropdown
                  name="healthStatus"
                  value={healthStatus}
                  placeholder="Seleccionar Estado"
                  fluid selection
                  options={healthStatusOptions}
                  onChange={e => this.updateState(e, 'healthStatus')}
                />
              </Card>
              <Card header="Estudios Clínicos" iconName="pencil" iconColor="blue">
                {labReports.length > 0 ? (
                  <List>
                    {labReports.map((report, index) => (
                      <List.Item key={index}>
                        <List.Icon name="eye" />
                        <List.Content>{report}</List.Content>
                      </List.Item>
                    ))}
                  </List>
                ) : (
                  <p>No se ha añadido ninguna solicitud.</p>
                )}
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} computer={11}>
              <Card header="Información de Consulta" className="nth-col-first">
                <Form name="information">
                  <FormTextArea
                    name="motive"
                    label="Motivo de la consulta:"
                    placeholder="Escribe aquí el motivo de la consulta."
                    value={information.motive}
                    onChange={e => this.updateStateObject(e, 'motive', 'information')}
                  />
                  <FormTextArea
                    name="physicalExploration"
                    label="Exploración física:"
                    placeholder="En caso de aplicar,
                    ingresa las observaciones de la exploración física."
                    value={information.physicalExploration}
                    onChange={e => this.updateStateObject(e, 'physicalExploration', 'information')}
                  />
                  <FormTextArea
                    name="conclusion"
                    label="Observaciones y conclusiones de la consulta:"
                    placeholder="Escribe aquí las observaciones finales de la consulta."
                    value={information.conclusion}
                    onChange={e => this.updateStateObject(e, 'conclusion', 'information')}
                  />
                </Form>
              </Card>
              <Card header="Tratamiento">
                <Form>
                  <Form.Group>
                    <Form.Input
                      name="dose"
                      label="Dosis"
                      placeholder="Dosis"
                      width={2}
                      value={newMedication.dose}
                      onChange={e => this.updateStateObject(e, 'dose', 'newMedication')}
                    />
                    <Form.Input
                      name="medicine"
                      label="Medicamento"
                      placeholder="Medicamento"
                      width={6}
                      value={newMedication.medicine}
                      onChange={e => this.updateStateObject(e, 'medicine', 'newMedication')}
                    />
                    <Form.Input
                      name="frequency"
                      label="Frecuencia"
                      placeholder="Frecuencia"
                      width={4}
                      value={newMedication.frequency}
                      onChange={e => this.updateStateObject(e, 'frequency', 'newMedication')}
                    />
                    <Form.Input
                      name="duration"
                      label="Duración"
                      placeholder="Duración"
                      width={3}
                      value={newMedication.duration}
                      onChange={e => this.updateStateObject(e, 'duration', 'newMedication')}
                    />
                    <AddIconContainer>
                      <AddIcon
                        name="plus"
                        onClick={() => this.addNewMedication()}
                      />
                    </AddIconContainer>
                  </Form.Group>
                  <ErrorMessage name="error">{ newMedicationError }</ErrorMessage>
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
                    onChange={e => this.updateState(e, 'indications')}
                  />
                </Form>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <FinalizeButtonContiainer>
              <Link href="/medic/profile">
                <Button content="Finalizar Consulta" />
              </Link>
            </FinalizeButtonContiainer>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Consultation

const FormTextArea = styled(Form.TextArea)`
   & textarea {
    font-family: -apple-system,system-ui,BlinkMacSystemFont, 
    "Segoe UI",Roboto,'Helvetica Neue',Arial,Helvetica,sans-serif;
   }
`
const SomatometryData = styled.div`
  margin-bottom: 1rem;
`
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
const FinalizeButtonContiainer = styled(Grid.Column)`
  text-align: right;
`
const ErrorMessage = styled.span`
  color: red;
`