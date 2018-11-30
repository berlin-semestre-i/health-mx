import React from 'react'
import { Tab, Table } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

const labStudies = ( studies ) => {
  return {
    menuItem: 'Estudios de laboratorio',
    render: () => {

      return (
        <TabPaneTable attached={false} name="lab-studies">
          <Table striped>
            <TableHeader>
              <Table.Row>
                <Table.HeaderCell>Fecha</Table.HeaderCell>
                <Table.HeaderCell>Área de Estudio</Table.HeaderCell>
                <Table.HeaderCell>Tipo de Estudio</Table.HeaderCell>
                <Table.HeaderCell>Indicaciones</Table.HeaderCell>
                <Table.HeaderCell className="empty"></Table.HeaderCell>
              </Table.Row>
            </TableHeader>
            <Table.Body>
              {studies.map((study, index) => (
                <Table.Row key={index}>
                  <TableCell>{study.date}</TableCell>
                  <TableCell>{study.area}</TableCell>
                  <TableCell>{study.type}</TableCell>
                  <TableCell>
                    <b>{study.indications}</b>
                  </TableCell>
                  <TableCell>
                    <b><a href="">Ver detalles</a></b>
                  </TableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </TabPaneTable>
      )
    },
  }
}

export default labStudies

const TabPaneTable = styled(Tab.Pane)`
  &.ui.segment {
    padding: 0;
    border: none;
  }
`
const TableCell = styled(Table.Cell)`
  &&& {
    padding: 1.1rem 1.5rem;
    border: none;
  }
`
const TableHeader = styled(Table.Header)`
 &&&& th {
   background-color: #808AA2;
   color: #FFFF;
   text-transform: uppercase;
   font-size: 12px;
   font-weight: 500;
   padding: 1.1rem 1.5rem;
   border: none;
 }

 ${media.lessThan('small')`
    &&&& tr {
      padding: 0;
    }

    &&&& tr>th.empty {
      display: none !important;
    }
  `}
`