import React from 'react'
import { Tab } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'
import patientDataTab from './PatientData'
import previousConsultationsTab from './Consultations'
import labStudiesTab from './LabStudies'
import treatmentsTab from './Treatments'

const TabMedicalReport = ({ beneficiary, consultations, studies, treatments, callbackfn }) => {

  const panes = [
    patientDataTab( beneficiary ),
    previousConsultationsTab( consultations, callbackfn ),
    labStudiesTab( studies ),
    treatmentsTab( treatments ),
  ]

  return (
    <TabMedical
      menu={{ secondary: true, className: 'wrapped' }}
      panes={panes}
    />
  )
}

export default TabMedicalReport

const TabMedical = styled(Tab) `
  & .ui.menu .item {
    width: auto;
    background-color: #FFFF;
    color: #818ea3;
    text-transform: uppercase;
    height: auto;
    border-radius: 20px;
    font-size: 13px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    margin-right: 1em;
  }

  & .ui.menu .item.active, & .ui.secondary.menu a.item:hover {
    background-color: #007bff;
    color: #FFFF;
    border-radius: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  ${media.lessThan('medium')`
    & .ui.menu.wrapped{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    & .ui.menu.wrapped .item{
      margin-bottom: 0.75rem;
    }

    & {
      margin-top: 2rem;
    }
  `}

  ${media.lessThan('small')`
    & .ui.menu.wrapped .item{
      width: 90%;
    }
  `}
`