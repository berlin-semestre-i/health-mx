import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'
import Avatar from '../../../shared/Avatar'
import ConsultationInfo from './AppointmentInfo'
import ValueItem from '../../../shared/ValueItem'
import styled from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'

const AppointmentRow = ({ appointment, className }) => (
  <React.Fragment>
    <Link href="/medic/medicalReport">
      <a>
        <ConsultationRow>
          <AvatarContainer mobile={16} tablet={3} computer={1}>
            <Avatar src={appointment.profile}/>
          </AvatarContainer>
          <ConsultationInfoContainer mobile={16} tablet={13} computer={10}>
            <BeneficiaryName>
              { appointment.name }
            </BeneficiaryName>
            <ConsultationInfo>
              <ValueItem keyName="Edad" value={appointment.age} />
              <ValueItem keyName="Estado" value={appointment.status} />
              <ValueItem keyName="Tratamiento" value={appointment.treatment} />
              <ValueItem keyName="Última cita" value={appointment.previous} />
            </ConsultationInfo>
          </ConsultationInfoContainer>
          <ConsultationTime computer={4} tablet={4} mobile={16} className={className}>
            <Header as="h3">Hora</Header>
            <Header as="h1">{ appointment.time }</Header>
          </ConsultationTime>
          <ChevronContainer computer={1}>
            <Icon name="chevron right" />
          </ChevronContainer>
        </ConsultationRow>
      </a>
    </Link>
  </React.Fragment>
)

export default AppointmentRow

const BeneficiaryName = styled.span`
  font-weight: 600;
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
const ConsultationTime = styled(Grid.Column)`
  text-align: right;

  >.ui.header {
    margin: 0;
  }

  >h3.ui.header {
    font-size: 13px;
  }

  >h1.ui.header {
    font-size: 26px;
    font-weight: 500;
    color: #808AA2;
  }

  &.is-active>h1.ui.header {
    color: #00B5CE;
  }
`
const ChevronContainer = styled(Grid.Column)`
  >.icon {
    font-size: 20px;
    font-weight: 700;
    color: #808AA2;
  }

  ${media.lessThan('small')`
    &&.column:not(.row) {
      display: none;
    }
  `} 
`
const AvatarContainer = styled(Grid.Column)`
  text-align: center;

  ${media.between('medium','1025px')`
    [class*="one wide computer"]&&&.column {
      width: 12%!important;
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
    [class*="ten wide computer"]&&&.column {
      width: 55%!important;
    }
  `}

  >a:not(.ui) {
    font-weight: 600;
  }
`