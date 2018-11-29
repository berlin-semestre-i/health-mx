import React from 'react'
import { Tab, Table } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

const previousConsultations = ( consultations, callbackfn ) => {
  return {
    menuItem: 'Consultas médicas previas',

    render: () => {
      return (
        <React.Fragment>
          <TabPaneTable attached={false} name="prev-consultations">
            <Table striped>
              <TableHeader>
                <Table.Row>
                  <Table.HeaderCell>Fecha</Table.HeaderCell>
                  <Table.HeaderCell>Área de Especialidad</Table.HeaderCell>
                  <Table.HeaderCell>Médico</Table.HeaderCell>
                  <Table.HeaderCell>Estatus</Table.HeaderCell>
                  <Table.HeaderCell className="empty"></Table.HeaderCell>
                </Table.Row>
              </TableHeader>
              <Table.Body>
                {consultations.map((consultation, index) => (
                  <Table.Row key={index}>
                    <TableCell>{consultation.date}</TableCell>
                    <TableCell>{consultation.area}</TableCell>
                    <TableCell>{consultation.doctor}</TableCell>
                    <TableCell>
                      <b>{consultation.status}</b>
                    </TableCell>
                    <TableCell>
                      <b><a href="#" onClick={() => callbackfn(index)}>Ver detalles</a></b>
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

export default previousConsultations

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