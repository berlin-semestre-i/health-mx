import React, { PureComponent } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Modal, Form, Icon, Table, Button } from 'semantic-ui-react'
import Link from 'next/link'

const priorityOptions = [{
  text: 'Baja', value: 0,
}, {
  text: 'Regular', value: 1,
}, {
  text: 'Alta', value: 2,
}]

const errorMsg = 'Llena todos los campos.'

class LabReportModal extends PureComponent {

  state = {
    studies: [],
    study: '',
    indications: '',
    error: '',
    isMouseOnRow: -1,
    observations: '',
    priority: '',
  }

  updateState = (e, {name, value}) => this.setState({ [name]: value })

  mouseEnter = index => this.setState({ isMouseOnRow: index })

  mouseLeave = () => this.setState({ isMouseOnRow: -1 })

  deleteStudy = index => {
    let arrayCopy = [...this.state.studies]
    arrayCopy.splice(index, 1)
    this.setState({ studies: arrayCopy })
  }

  addStudy = () => {
    const { study, indications } = this.state

    let enabled =
      study.length > 0 &&
      indications.length > 0

    if(enabled) {
      this.setState(prevState => ({
        studies: [...prevState.studies, { study, indications }],
        study: '',
        indications: '',
        error: '',
      }))
    } else {
      this.setState({ error: errorMsg })
    }
  }

  saveStudies = () => {
    const { studies, priority, observations } = this.state
    this.props.save(studies, priority, observations)
  }

  close = () => {
    this.setState({
      study: '',
      indications: '',
      error: '',
    })
    this.props.close()
  }

  render () {

    const { study, indications, error, isMouseOnRow, studies,
      observations, priority } = this.state

    const { open } = this.props

    return (
      <React.Fragment>
        <StudiesModal open={open} onClose={this.close}>
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
                  value={study}
                  onChange={this.updateState}
                />
                <Form.Input
                  name="indications"
                  label="Indicaciones del estudio:"
                  placeholder="Escribe las indicaciones para el estudio"
                  width={9}
                  value={indications}
                  onChange={this.updateState}
                />
                <AddIconContainer>
                  <AddIcon
                    name="plus"
                    onClick={() => this.addStudy()}
                  />
                </AddIconContainer>
              </Form.Group>
              <ErrorMessage name="error">{ error }</ErrorMessage>
              <Table basic="very">
                <Table.Body>
                  {studies.map((report, index) => (
                    <Table.Row
                      key={index}
                      onMouseEnter={() => this.mouseEnter(index)}
                      onMouseLeave={() => this.mouseLeave()}
                    >
                      <Table.Cell width={6}>{report.study}</Table.Cell>
                      <Table.Cell width={9}>
                        {report.indications.length > 0?
                          report.indications : 'Sin indicaciones'
                        }
                      </Table.Cell>
                      <Table.Cell width={1}>
                        {isMouseOnRow === index ?
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
                onChange={this.updateState}
              />
              <Form.TextArea
                name="observations"
                label="Observaciones generales:"
                placeholder="Observaciones para realización de estudio"
                value={observations}
                onChange={this.updateState}
              />
            </Form>
          </Modal.Content>
          <ModalFooter>
            <Link href="">
              <Print href="">Imprimir orden</Print>
            </Link>
            <Button basic color="blue" content="Cancelar" onClick={this.close} />
            <Button name="save-study" content="Guardar" onClick={this.saveStudies} />
          </ModalFooter>
        </StudiesModal>
      </React.Fragment>
    )
  }
}

export default LabReportModal

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
const StudiesModal = styled(Modal)`
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
const AddIconContainer = styled(Form.Field)`
position: relative;

${media.lessThan('small')`
  &&&.field {
    margin-bottom: 1em;
  }
`}
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
const ErrorMessage = styled.span`
  color: red;
`