import React from 'react'
import {Button, List } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'

const DefaultListItem = ({ item }) => (
  <List>
    <List.Content floated="right">
      <Link href={item.link}>
        <a target="_blank"><Button primary size="small">Iniciar trámite</Button></a>
      </Link>
    </List.Content>
    <AppointmentData>
      <List.Content>
        {item.title}
      </List.Content>
    </AppointmentData>
  </List>
)

export default DefaultListItem

const AppointmentData = styled.div`
    & {
        padding-top: 8px;
    }
`