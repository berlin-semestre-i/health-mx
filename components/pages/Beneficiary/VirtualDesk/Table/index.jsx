import React from 'react'
import { Table } from 'semantic-ui-react'
import styled from 'styled-components'

const DefaultTable = ({children}) => (
  <DeskTable striped>
    <Table.Header>
      <Table.Row>
        <TableHeaderCell>Parentesco</TableHeaderCell>
        <TableHeaderCell>Nombre</TableHeaderCell>
        <TableHeaderCell>CURP</TableHeaderCell>
        <TableHeaderCell>Sexo</TableHeaderCell>
        <TableHeaderCell>Edad</TableHeaderCell>
        <TableHeaderCell>Situación</TableHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {children}
    </Table.Body>
  </DeskTable>
)

export default DefaultTable

const DeskTable = styled(Table)`
    && {
        border: none;
        box-shadow: 0 4px 8px 0 rgba(90,97,105,0.12);
    }
`

const TableHeaderCell = styled(Table.HeaderCell)`
    & {
        background: #818EA3!important;
        font-size: 12px;
        text-transform: uppercase!important;
        font-weight: 500!important;
        color: #fff!important;
    }
`
