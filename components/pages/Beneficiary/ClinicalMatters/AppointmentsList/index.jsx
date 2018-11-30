import React , {PureComponent} from 'react'
import {Button, List, Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import ConsultationModal from '../../../../shared/ConsultationModal'

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

class AppointmentsList extends PureComponent {

  state = {
    open: false,
  }

  open = () => this.setState({open: true})
  close = () => this.setState({open: false})

  render() {
    const { appointment } = this.props
    const { open } = this.state

    return (
      <React.Fragment>
        <List>
          <List.Content floated="right">
            <Button secondary size="tiny" onClick={this.open}>Ver detalles</Button>
          </List.Content>
          <AppointmentData>
            <Grid>
              <Grid.Column mobile={16} tablet={5} computer={5}>
                <List.Content>
                  {appointment.date}
                </List.Content>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={11} computer={11}>
                <List.Content>
                  {appointment.specialty}
                </List.Content>
              </Grid.Column>
            </Grid>
          </AppointmentData>
        </List>
        <ConsultationModal
          open={open}
          consultation={appointment}
          somatometry={somatometry}
          close={this.close}
        />
      </React.Fragment>
    )
  }
}

export default AppointmentsList

const AppointmentData = styled.div`
    & {
        padding-top: 8px;
    }
`