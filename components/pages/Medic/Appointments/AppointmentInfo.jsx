import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const AppointmentInfo = ({ children }) => (
  <ConsultationInfo>
    { children }
  </ConsultationInfo>
)

export default AppointmentInfo

const ConsultationInfo = styled.div`
  font-size: 12px;
  color: #3d5170;
  font-weight: 400;

  ${media.greaterThan('large')`
    width: 85%;
    display: flex;
    justify-content: space-between;
  `} 
`