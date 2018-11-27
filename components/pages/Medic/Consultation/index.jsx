import React, { PureComponent } from 'react'
import { Grid, Dropdown, Form, Button, Icon, List, Table, Modal } from 'semantic-ui-react'
import Header from '../../../shared/PageHeader'
import Card from '../../../shared/Card'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

const incompleteErrorMsg = 'Llena todos los campos.'
const healthStatusOptions = [{
  text: 'Regular', value: 0,
}, {
  text: 'Crítico', value: 1,
}]
const priorityOptions = [{
  text: 'Baja', value: 0,
}, {
  text: 'Regular', value: 1,
}, {
  text: 'Alta', value: 2,
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
    newStudyError: '',
    labReports: [],
    labReportsCopy: [],
    isMouseOnRow: -1,
    open: false,
    priority: '',
    observations: '',
    newStudy: {
      study: '',
      indications: '',
    },
  }

  open = () => this.setState({ open: true })

  close = () => {
    this.setState({
      open: false,
      labReportsCopy: this.state.labReports,
      newStudy: { study: '', indications: '' },
      priority: '',
      observations: '',
    })
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

  addItem = ({enabled, arrayKey, newItem, trueState, falseState}) => {
    if(enabled) {
      this.setState(prevState => ({
        [arrayKey]: [...prevState[arrayKey], newItem],
      }))
      this.setState(trueState)
    } else {
      this.setState(falseState)
    }
  }

  addNewMedication = () => {
    let enabled =
      this.state.newMedication.dose.length > 0 &&
      this.state.newMedication.medicine.length > 0 &&
      this.state.newMedication.frequency.length > 0 &&
      this.state.newMedication.duration.length > 0

    this.addItem({
      enabled,
      arrayKey: 'treatment',
      newItem: this.state.newMedication,
      trueState: {
        newMedication: {
          dose: '',
          medicine: '',
          frequency: '',
          duration: '',
        },
        newMedicationError: '',
      },
      falseState: {
        newMedicationError: incompleteErrorMsg,
      },
    })
  }

  addStudy = () => {
    let enabled =
      this.state.newStudy.study.length > 0 &&
      this.state.newStudy.indications.length > 0

    this.addItem({
      enabled,
      arrayKey: 'labReportsCopy',
      newItem: this.state.newStudy,
      trueState: {
        newStudy: {
          study: '',
          indications: '',
        },
        newStudyError: '',
      },
      falseState: {
        newStudyError: incompleteErrorMsg,
      },
    })
  }

  deleteItem = (index, arrayKey) => {
    let arrayCopy = [...this.state[arrayKey]]
    arrayCopy.splice(index, 1)
    this.setState({
      [arrayKey]: arrayCopy,
    })
  }

  deleteMedication = (index) => {
    this.deleteItem(index, 'treatment')
  }

  deleteStudy = (index) => {
    this.deleteItem(index, 'labReportsCopy')
  }

  mouseEnter = (index) => {
    this.setState({ isMouseOnRow: index })
  }

  mouseLeave = () => {
    this.setState({ isMouseOnRow: -1 })
  }

  saveLabReports() {
    this.setState({
      labReports: this.state.labReportsCopy,
      open: false,
      newStudy: { study: '', indications: '' },
    })
  }

  render() {

    const { healthStatus, treatment, newMedication, information,
      labReports, labReportsCopy, indications, newMedicationError, isMouseOnRow,
      priority, observations, newStudy, newStudyError } = this.state
    const { date } = this.props

    return (
      <React.Fragment>
        <Grid>
          <Header title="Atrás" subtitle={`Consulta - ${date}`} goBack="true" />
          <Grid.Row>
            <Grid.Column mobile={16} computer={5}>
              <Card header="Somatometría Previa" iconName="pencil" iconColor="blue">
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
              <Card header="Estado de Salud">
                <Dropdown
                  name="healthStatus"
                  value={healthStatus}
                  placeholder="Seleccionar Estado"
                  fluid selection
                  options={healthStatusOptions}
                  onChange={e => this.updateState(e, 'healthStatus')}
                />
              </Card>
              <Card
                className="lab-studies"
                header="Estudios Clínicos"
                iconName="pencil"
                iconColor="blue"
                callbackFn={this.open}
              >
                {labReports.length > 0 ? (
                  <List>
                    {labReports.map((report, index) => (
                      <List.Item key={index}>
                        <List.Icon name="eye" />
                        <List.Content>{report.study}</List.Content>
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
                  <Form.Group name="newMedication">
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
        <LabReportModal open={this.state.open} onClose={this.close}>
          <ModalHeader>
            <h1 className="ui header">Nueva solicitud de estudios</h1>
            <CloseModal name="times" onClick={this.close} />
          </ModalHeader>
          <Modal.Content>
            <Form>
              <Form.Group name="newStudy">
                <Form.Input
                  name="study"
                  label="Estudio:"
                  placeholder="Escribe y selecciona el estudio"
                  width={6}
                  value={newStudy.study}
                  onChange={e => this.updateStateObject(e, 'study', 'newStudy')}
                />
                <Form.Input
                  name="indications"
                  label="Indicaciones del estudio:"
                  placeholder="Escribe las indicaciones para el estudio"
                  width={9}
                  value={newStudy.indications}
                  onChange={e => this.updateStateObject(e, 'indications', 'newStudy')}
                />
                <AddIconContainer>
                  <AddIcon
                    name="plus"
                    onClick={() => this.addStudy()}
                  />
                </AddIconContainer>
              </Form.Group>
              <ErrorMessage name="error">{ newStudyError }</ErrorMessage>
              <Table basic="very">
                <Table.Body>
                  {labReportsCopy.map((report, index) => (
                    <Table.Row
                      name="report"
                      key={index}
                      onMouseEnter={() => this.mouseEnter(index + treatment.length)}
                      onMouseLeave={() => this.mouseLeave()}
                    >
                      <Table.Cell width={6}>{report.study}</Table.Cell>
                      <Table.Cell width={9}>
                        {report.indications.length > 0?
                          report.indications : 'Sin indicaciones'
                        }
                      </Table.Cell>
                      <Table.Cell width={1}>
                        {isMouseOnRow === index + treatment.length ?
                          <DeleteIcon
                            name="trash"
                            onClick={() => this.deleteStudy(index)}
                          /> : null
                        }
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Form.Dropdown
                name="priority"
                value={priority}
                label="Prioridad"
                placeholder="Seleccionar Prioridad"
                fluid selection
                options={priorityOptions}
                width={6}
                onChange={e => this.updateState(e, 'priority')}
              />
              <Form.TextArea
                name="observations"
                label="Observaciones generales:"
                placeholder="Observaciones para realización de estudio"
                value={observations}
                onChange={e => this.updateState(e, 'observations')}
              />
            </Form>
          </Modal.Content>
          <ModalFooter>
            <Link href="">
              <Print href="">Imprimir orden</Print>
            </Link>
            <Button basic color="blue" content="Cancelar" onClick={this.close} />
            <Button name="save-study" content="Guardar" onClick={() => this.saveLabReports()} />
          </ModalFooter>
        </LabReportModal>
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
const LabReportModal = styled(Modal)`
  & {
    padding: 1em;
  }
`
const Print = styled.a`
  float: left;
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