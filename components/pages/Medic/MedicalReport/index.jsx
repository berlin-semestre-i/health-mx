import React, { PureComponent } from 'react'
import { Grid, Button, Label, Modal, Icon } from 'semantic-ui-react'
import Header from './../../../shared/PageHeader'
import Card from './../../../shared/Card'
import styled from 'styled-components'
import media from 'styled-media-query'
import Tab from './Tabs'
import ValueItem from '../../../shared/ValueItem'
import Avatar from '../../../shared/Avatar'
import Link from 'next/link'

const somatometry = {
  nurse: 'Rodrigo Fernández',
  height: 169,
  pulse: 68,
  imc: 22.06,
  weight: 63,
  temperature: 36,
  status: 'En tratamiento',
  doctor: 'Mónica Dessiré López Trejo',
}
const beneficiary = {
  firstName: 'María del Carmen',
  fatherLastName: 'Hinojosa',
  motherLastName: 'Ramírez',
  nss: '8454321878',
  curp: 'JP0A170297SLMRH00',
  clinic: 'Zapopan 36',
  umf: 'Zapopan UMF2',
  dependents: 0,
  allergies: ['Penicilina'],
  ailment: [],
  ahd: ['Diabetes tipo 2 (padre)', 'Cáncer de colon (abuelo)'],
  doctor: 'César Rengiffo Pérez',
  profile: '../../../static/images/woman-avatar.png',
}
const consultations = [{
  date: '12 Jul, 2018',
  area: 'Medicina familiar',
  doctor: 'Luis Alfredo Ramírez',
  status: 'Regular',
}, {
  date: '13 Jul, 2018',
  area: 'Medicina familiar',
  doctor: 'Luis Alfredo Ramírez',
  status: 'Regular',
}, {
  date: '12 Jul, 2018',
  area: 'Medicina familiar',
  doctor: 'Luis Alfredo Ramírez',
  status: 'Regular',
}]
const studies = [{
  date: '12 Jul, 2018',
  area: 'Radiología',
  type: 'Rayos X',
  indications: 'Bla bla bla',
}]
const treatments = [{
  consultation: '03 Nov, 2017',
  startDate: '03 Nov, 2017',
  endDate: '11 Nov 2017',
  medication: ['Paracetamol', 'Diclofenaco sódico', 'Celebrex'],
}]

class MedicalReport extends PureComponent {

  state = {
    open: false,
    consultationIndex: 0,
  }

  open = (index) => this.setState({
    open: true, consultationIndex: index,
  })

  close = () => this.setState({ open: false })

  render() {
    const { open, consultationIndex } = this.state

    return (
      <React.Fragment>
        <Grid>
          <Header title="Atrás" subtitle="Expediente de derechohabiente" />
          <CardsRow>
            <Grid.Column mobile={16} computer={6}>
              <Card header="Derechohabiente">
                <ConsultationRow>
                  <AvatarContainer mobile={16} tablet={3} computer={3}>
                    <Avatar src={beneficiary.profile}/>
                  </AvatarContainer>
                  <ConsultationInfoContainer mobile={16} tablet={13} computer={13}>
                    <BeneficiaryName>
                      {`${beneficiary.firstName} 
                      ${beneficiary.fatherLastName} 
                      ${beneficiary.motherLastName}`}
                    </BeneficiaryName>
                    <ConsultationInfo>
                      <ValueItem keyName="NSS" value={beneficiary.nss}/>
                    </ConsultationInfo>
                  </ConsultationInfoContainer>
                </ConsultationRow>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} computer={7}>
              <Card header="Somatometría - 10 de Octubre de 2018" className="nth-col-first">
                <Grid>
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={5}>
                      <SomatometryValue>
                        <ValueItem keyName="Enfermero(a)" value={somatometry.nurse}/>
                      </SomatometryValue>
                      <SomatometryValue>
                        <ValueItem keyName="Estatura" value={`${somatometry.height} cm`}/>
                      </SomatometryValue>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={5}>
                      <SomatometryValue>
                        <ValueItem keyName="Presión y pulso" value={`${somatometry.pulse} p/m`}/>
                      </SomatometryValue>
                      <SomatometryValue>
                        <ValueItem keyName="IMC" value={somatometry.imc}/>
                      </SomatometryValue>
                    </Grid.Column>
                    <StartButtonColumn mobile={16} tablet={8} computer={6}>
                      <SomatometryValue>
                        <ValueItem keyName="Peso" value={`${somatometry.weight} Kg`}/>
                      </SomatometryValue>
                      <SomatometryValue>
                        <Link href="medic/consultation">
                          <StartButton
                            positive
                            content="Iniciar Consulta"
                            icon="play" labelPosition="left"
                          />
                        </Link>
                      </SomatometryValue>
                    </StartButtonColumn>
                  </Grid.Row>
                </Grid>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} computer={3}>
              <Card header="Última Cita" className="nth-col-first last-constultation" >
                <h3>12 Jul, 2018</h3>
                <p>Estado:</p>
                <LabelStatus>Regular</LabelStatus>
              </Card>
            </Grid.Column>
          </CardsRow>
          <Grid.Row>
            <Grid.Column computer={16}>
              <Tab
                beneficiary={beneficiary}
                studies={studies}
                consultations={consultations}
                treatments={treatments}
                callbackfn={this.open}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <BackButtonContainer>
              <Link href="/medic/appointments">
                <Button content="Regresar" />
              </Link>
            </BackButtonContainer>
          </Grid.Row>
        </Grid>
        <ConsultationReportModal size="large" open={open} onClose={this.close}>
          <ModalHeader>
            <h1 className="ui header">Consulta médica - {consultations[consultationIndex].date}</h1>
            <CloseModal name="times" onClick={this.close} />
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
            <Button content="Cerrar" onClick={this.close} />
          </ModalFooter>
        </ConsultationReportModal>
      </React.Fragment>
    )
  }
}


export default MedicalReport

const BackButtonContainer = styled(Grid.Column)`
  text-align: right;
`
const StartButtonColumn = styled(Grid.Column)`
  &&&.column {
    padding-right: 0;
  }
`
const StartButton = styled(Button)`
  &.ui.labeled.icon.button {
    padding-left: 3.5em;
    padding-right: 1em;
    font-size: 12px;
    height: 30px;
  }

  ${media.between('medium','1025px')`
    &.ui.labeled.icon.button {
      height: 45px;
    }
  `}
`
const CardsRow = styled(Grid.Row)`
  .ui.card {
    height: 100%;
  }

  ${media.lessThan('medium')`
    .ui.card.last-constultation {
      margin-top: 2rem;
    }
  `}
`
const SomatometryValue = styled.div`
  & {
    margin-bottom: 1rem;
  }

  & b {
    display: block;
  }
`
const LabelStatus = styled(Label)`
  && {
    background-color: #3F4D71;
    color: #FFF;
    text-align: center;
    min-width: 60%;
  }
`
const ConsultationRow = styled(Grid)`
  >.column:not(.row):last-child {
    padding-top: 2rem;
  }

  ${media.greaterThan('large')`
    >.column:not(.row):nth-child(2) {
      padding-top: 1.5rem;
    }
  `} 
`
const AvatarContainer = styled(Grid.Column)`
  text-align: center;

  ${media.between('medium','1025px')`
    [class*="three wide computer"]&&&.column {
      width: 30%!important;
    }
  `}

  ${media.lessThan('medium')`
    &&&.column:not(.row) {
      padding-bottom: 0;
    }
  `}
`
const ConsultationInfoContainer = styled(Grid.Column)`
  ${media.between('medium','1025px')`
    [class*="thirteen wide computer"]&&&.column {
      width: 70%!important;
    }
  `}

  >a:not(.ui) {
    font-weight: 600;
  }
`
const ConsultationInfo = styled.div`
  font-size: 12px;
  color: #3d5170;
  font-weight: 400;

  ${media.greaterThan('large')`
    width: 85%;
    display: flex;
    justify-content: space-between;
  `} 
`
const BeneficiaryName = styled.span`
  font-weight: 600;
  color: #007bff;
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