import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'

const AppointmentListItem = ({ appointment }) => (
  <ConsultationRow>
    <AvatarContainer mobile={16} tablet={3} computer={2}>
      <Avatar src={ appointment.profile }/>
    </AvatarContainer>
    <ConsultationInfoContainer mobile={16} tablet={13} computer={14}>
      <Link as="" href=""><a>{ appointment.name }</a></Link>
      <ConsultationInfo>
        <div name="appt-date">
          <Bold>Fecha: </Bold> { appointment.date }
        </div>
        <div name="appt-time">
          <Bold>Hora: </Bold> { appointment.time }
        </div>
        <div name="appt-previous">
          <Bold>Última cita: </Bold> { appointment.previous }
        </div>
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
const ConsultationInfo = styled.div`
  font-size: 12px;

  ${media.greaterThan('large')`
    width: 85%;
    display: flex;
    justify-content: space-between;
  `} 
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
const Avatar = styled(Image)`
  && {
    border-radius: 30px;
    max-width: 60px;
    max-height: 60px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    border: 3px solid #FFF;
  }
`
const Bold = styled.b`
  font-weight: 500;
`