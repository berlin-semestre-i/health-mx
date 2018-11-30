import React from 'react'
import { Modal, Grid, Label, Icon, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import ValueItem from '../../../shared/ValueItem'

const ConsultationModal = ({ open, consultation, somatometry, close }) => (
  <React.Fragment>
    <ConsultationReportModal size="large" open={open} onClose={close}>
      <ModalHeader>
        <h1 className="ui header">Consulta médica - {consultation.date}</h1>
        <CloseModal name="times" onClick={close} />
      </ModalHeader>
      <Modal.Content>
        <h3 className="ui header">Somatometría Previa</h3>
        <Grid>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <SomatometryValue>
              <ValueItem keyName="Enfermero(a)" value={somatometry.nurse}/>
            </SomatometryValue>
            <SomatometryValue>
              <ValueItem keyName="Temperatura" value={`${somatometry.temperature}°C`}/>
            </SomatometryValue>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <SomatometryValue>
              <ValueItem keyName="Estatura" value={`${somatometry.height} cm`}/>
            </SomatometryValue>
            <SomatometryValue>
              <ValueItem keyName="Médico" value={somatometry.doctor}/>
            </SomatometryValue>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <SomatometryValue>
              <ValueItem keyName="Peso" value={`${somatometry.weight} Kg`}/>
            </SomatometryValue>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <SomatometryValue>
              <ValueItem keyName="Presión y pulso" value={`${somatometry.pulse} p/m`}/>
            </SomatometryValue>
            <SomatometryValue>
              <ValueItem keyName="Estado" value={somatometry.status}/>
            </SomatometryValue>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <SomatometryValue>
              <ValueItem keyName="IMC" value={somatometry.imc}/>
            </SomatometryValue>
          </Grid.Column>
        </Grid>
        <h3 className="ui header">Información de Consulta</h3>
        <p>
          <b>Motivo de la consulta: </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris vel sollicitudin est, at varius nunc.
                Morbi ac quam at est viverra posuere. In porttitor
                tortor vulputate dolor semper egestas. Curabitur sit
                amet ante sed erat tempor pellentesque. Pellentesque ipsum
                lectus, condimentum a volutpat id, tincidunt
                vitae nunc. Ut sed dapibus mi, eu finibus arcu.
        </p>
        <p>
          <b>Exploración física: </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris vel sollicitudin est, at varius nunc.
                Morbi ac quam at est viverra posuere. In porttitor
                tortor vulputate dolor semper egestas. Curabitur sit
                amet ante sed erat tempor pellentesque. Pellentesque ipsum
                lectus, condimentum a volutpat id, tincidunt
                vitae nunc. Ut sed dapibus mi, eu finibus arcu.
        </p>
        <p>
          <b>Observaciones y conclusiones de la consulta: </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris vel sollicitudin est, at varius nunc.
                Morbi ac quam at est viverra posuere. In porttitor
                tortor vulputate dolor semper egestas. Curabitur sit
                amet ante sed erat tempor pellentesque. Pellentesque ipsum
                lectus, condimentum a volutpat id, tincidunt
                vitae nunc. Ut sed dapibus mi, eu finibus arcu.
        </p>
        <h3 className="ui header">Estudios</h3>
        <Grid>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <b>- Rayos X</b>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <b>Gilberto González Becerra</b>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
                  Radiografía columna vertebral baja
          </Grid.Column>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <ResultsLabel>Ver resultados</ResultsLabel>
          </Grid.Column>
        </Grid>
        <h3 className="ui header">Tratamiento</h3>
        <Grid>
          <Grid.Column mobile={16} computer={9}>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <b>- Paracetamol 100mg</b>
                </Grid.Column>
                <Grid.Column>
                  <b>1 cada 8hrs.</b>
                </Grid.Column>
                <Grid.Column>
                  <b>10 días</b>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column mobile={16} computer={7}>
            <b>Observaciones:</b>
            <p>
                    Curabitur sit
                    amet ante sed erat tempor pellentesque. Pellentesque ipsum.
            </p>
          </Grid.Column>
        </Grid>
      </Modal.Content>
      <ModalFooter>
        <Button content="Cerrar" onClick={close} />
      </ModalFooter>
    </ConsultationReportModal>
  </React.Fragment>
)

export default ConsultationModal

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
const ConsultationReportModal = styled(Modal)`
  & {
    padding: 1em;
  }

  & h3.ui.header {
    font-size: 12px;
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
const ResultsLabel = styled(Label)`
  &.ui.label {
    color: #006fe6;
    cursor: pointer;
  }
`
const SomatometryValue = styled.div`
  & {
    margin-bottom: 1rem;
  }

  & b {
    display: block;
  }
`