import React from 'react'
import { Table } from 'semantic-ui-react'
import Link from 'next/link'

const TableBodyRow = ({ dependant }) => (
  <Table.Row>
    <Table.Cell>{dependant.relationship}</Table.Cell>
    <Table.Cell><Link href="#"><a>{dependant.name}</a></Link></Table.Cell>
    <Table.Cell>{dependant.curp}</Table.Cell>
    <Table.Cell>{dependant.sex}</Table.Cell>
    <Table.Cell>{dependant.age}</Table.Cell>
    <Table.Cell>{dependant.situation}</Table.Cell>
  </Table.Row>
)

export default TableBodyRow
