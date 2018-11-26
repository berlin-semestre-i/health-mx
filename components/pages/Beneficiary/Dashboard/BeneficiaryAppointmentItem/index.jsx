import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

const BeneficiaryAppointmentItem = ({ appointment }) => (
  <ConsultationRow>
    <AvatarContainer mobile={16} tablet={3} computer={2}>
      <Avatar src="../../../static/images/AppointmentIcon.png"/>
    </AvatarContainer>
    <ConsultationInfoContainer mobile={16} tablet={13} computer={14}>
      <Bold>{ appointment.name }</Bold>
      <ConsultationInfo>
        <label>{appointment.date}, {appointment.time} - {appointment.clinic}</label>
      </ConsultationInfo>
    </ConsultationInfoContainer>
  </ConsultationRow>
)

export default BeneficiaryAppointmentItem

const ConsultationRow = styled(Grid)`
  >.column:not(.row):last-child {
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`
const ConsultationInfo = styled.div`
  font-size: 14px;

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
    max-width: 55px;
    max-height: 55px;
  }
`
const Bold = styled.b`
  font-weight: 600;
`