import React from 'react'
import {Button, List, Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'

const AppointmentsList = ({ appointment }) => (
  <List>
    <List.Content floated="right">
      <Link href="#">
        <Button secondary size="tiny">Ver detalles</Button>
      </Link>
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
)

export default AppointmentsList

const AppointmentData = styled.div`
    & {
        padding-top: 8px;
    }
`