import React from 'react'
import styled from 'styled-components'

const ValueItem = ({ keyName, value }) => (
  <React.Fragment>
    <Bold>{ keyName }: </Bold> { value }
  </React.Fragment>
)

export default ValueItem

const Bold = styled.b`
  font-weight: 500;
`