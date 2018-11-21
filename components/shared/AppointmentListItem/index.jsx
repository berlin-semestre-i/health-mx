import React from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'
import Avatar from '../AppointmentAvatar'
import ConsultationInfo from '../AppointmentInfo'
import ValueItem from '../ValueItem'

const AppointmentListItem = ({ appointment }) => (
  <ConsultationRow>
    <AvatarContainer mobile={16} tablet={3} computer={2}>
      <Avatar src={ appointment.profile }/>
    </AvatarContainer>
    <ConsultationInfoContainer mobile={16} tablet={13} computer={14}>
      <Link as="" href=""><a>{ appointment.name }</a></Link>
      <ConsultationInfo>
        <ValueItem keyName="Fecha" value={ appointment.date } />
        <ValueItem keyName="Hora" value={ appointment.time } />
        <ValueItem keyName="Última cita" value={ appointment.previous } />
      </ConsultationInfo>
    </ConsultationInfoContainer>
  </ConsultationRow>
)

export default AppointmentListItem

const ConsultationRow = styled(Grid)`
  >.column:not(.row):last-child {
    padding-top: 1.5rem;
  }
`
const AvatarContainer = styled(Grid.Column)`
  text-align: center;

  ${media.between('medium','1025px')`
    [class*="two wide computer"]&&&.column {
      width: 18.75%!important;
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
    [class*="fourteen wide computer"]&&&.column {
      width: 81.25%!important;
    }
  `}
`
const Bold = styled.b`
  font-weight: 500;
`