import React from 'react'
import { Tab, Table } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'
import CsvList from './CsvList'

const treatments = ( treatments ) => {
  return {
    menuItem: 'Tratamientos',

    render: () => {
      return (
        <React.Fragment>
          <TabPaneTable attached={false} name="treatments">
            <Table striped>
              <TableHeader>
                <Table.Row>
                  <Table.HeaderCell>Consulta</Table.HeaderCell>
                  <Table.HeaderCell>Fecha de Inicio</Table.HeaderCell>
                  <Table.HeaderCell>Finalización</Table.HeaderCell>
                  <Table.HeaderCell>Medicamentos</Table.HeaderCell>
                  <Table.HeaderCell className="empty"></Table.HeaderCell>
                </Table.Row>
              </TableHeader>

              <Table.Body>
                {treatments.map((treatment, index) => (
                  <Table.Row key={index}>
                    <TableCell>
                      <b><a href="">{treatment.consultation}</a></b>
                    </TableCell>
                    <TableCell>{treatment.startDate}</TableCell>
                    <TableCell>{treatment.endDate}</TableCell>
                    <TableCell>
                      <b><CsvList array={treatment.medication}/></b>
                    </TableCell>
                    <TableCell>
                      <b><a href="">Ver detalles</a></b>
                    </TableCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </TabPaneTable>
        </React.Fragment>
      )
    },
  }
}

export default treatments

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