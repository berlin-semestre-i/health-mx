import React from 'react'
import styled from 'styled-components'

const ValueItem = ({ keyName, value }) => (
  <div>
    <Bold>{ keyName }: </Bold> { value }
  </div>
)

export default ValueItem

const Bold = styled.b`
  font-weight: 500;
`