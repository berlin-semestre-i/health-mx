import React, { PureComponent } from 'react'
import Header from '../../../shared/Header'
import AppointmentRow from '../../../shared/AppointmentRow'
import Card from '../../../shared/Card'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'

class Appointments extends PureComponent {
  state = {
    articles: [],
    appointment: {
      name: 'María del Carmen Hinojosa Ramírez',
      date: '20 Nov, 2018',
      time: '08:30 am',
      treatment: 'N/A',
      status: 'Regular',
      age: '25',
      previous: '12 Jul, 2018',
      profile: '../../../static/images/avatar.png',
    },
    appointment_1: {
      name: 'José Armando Domínguez Pérez',
      date: '20 Nov, 2018',
      time: '10:00 am',
      status: 'Regular',
      age: '30',
      treatment: 'En curso',
      previous: '22 Sept, 2018',
      profile: '../../../static/images/avatar2.png',
    },
  }

  render() {
    const { appointment, appointment_1 } = this.state

    return (
      <React.Fragment>
        <Grid>
          <Header
            title="Citas Médicas"
            subtitle="Citas Pendientes"
          />
          <Card header="Próxima Cita">
            <AppointmentRow className="is-active" appointment={appointment}/>
          </Card>
          <Grid.Row>
            <AppointmentContainer>
              <AppointmentRow appointment={appointment_1}/>
            </AppointmentContainer>
          </Grid.Row>
          <h1 className="ui header">
            Citas Completadas
          </h1>
          <Grid.Row>
            <AppointmentContainer>
              <AppointmentRow appointment={appointment_1}/>
            </AppointmentContainer>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

const AppointmentContainer = styled(Grid.Column)`
  padding-top: 1rem;

  &&&.column {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
`

export default Appointments