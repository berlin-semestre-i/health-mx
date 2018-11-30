import React, { PureComponent } from 'react'
import { Grid, Button, List } from 'semantic-ui-react'
import Header from '../../../shared/PageHeader'
import Card from '../../../shared/Card'
import styled from 'styled-components'
import TreatmentCard from './Treatment'
import InformationCard from './Information'
import SomatometryCard from './Somatometry'
import HealthStatusCard from './HealthStatus'
import LabReportsModal from './LabReportModal'
import Link from 'next/link'

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
    labReports: [],
    labReportsPriority: '',
    labReportsObservations: '',
    open: false,
    motive: '',
    physicalExploration: '',
    conclusion: '',
  }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  updateState = (e, {name, value}) => this.setState({ [name]: value })

  addMedication = newMedication => {
    this.setState(prevState => ({
      treatment: [...prevState.treatment, newMedication],
    }))
  }

  deleteMedication = index => {
    let arrayCopy = [...this.state.treatment]
    arrayCopy.splice(index, 1)
    this.setState({ treatment: arrayCopy })
  }

  saveLabReports = (reports, priority, observations) => {
    this.setState({
      labReports: reports,
      labReportsPriority: priority,
      labReportsObservations: observations,
      open: false,
    })
  }

  render() {
    const { healthStatus, motive, physicalExploration,
      conclusion, labReports, open, treatment } = this.state
    const { date } = this.props

    return (
      <React.Fragment>
        <Grid>
          <Header
            title="Atrás"
            subtitle={`Consulta - ${date}`}
            goBack="true" address="/medic/patient-profile"
          />
          <Grid.Row>
            <Grid.Column mobile={16} computer={5}>
              <SomatometryCard somatometry={somatometry} />
              <HealthStatusCard healthStatus={healthStatus} onChange={this.updateState} />
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
              <InformationCard
                onChange={this.updateState}
                motive={motive}
                physicalExploration={physicalExploration}
                conclusion={conclusion}
              />
              <TreatmentCard
                onChange={this.updateState}
                addMedication={this.addMedication}
                deleteMedication={this.deleteMedication}
                treatment={treatment}
              />
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
        <LabReportsModal
          open={open}
          save={this.saveLabReports}
          close={this.close}
        />
      </React.Fragment>
    )
  }
}

export default Consultation

const FinalizeButtonContiainer = styled(Grid.Column)`
  text-align: right;
`