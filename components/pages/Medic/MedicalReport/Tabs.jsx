import React from 'react'
import { Tab, Grid, List, Table } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'
import ValueItem from '../../../shared/ValueItem'
import CsvList from './CsvList'

const panes = [
  {
    menuItem: 'Información del paciente',
    render: props => {
      const { beneficiary } = props

      return (
        <TabPane attached={false} name="information">
          <TabHeader className="ui header">Información del paciente</TabHeader>
          <Grid>
            <Grid.Column mobile={16} computer={5}>
              <ValueItem keyName="Nombre(s)" value={beneficiary.firstName} />
              <ValueItem keyName="Apellido paterno" value={beneficiary.fatherLastName} />
              <ValueItem keyName="Apellido materno" value={beneficiary.motherLastName} />
              <ValueItem keyName="NSS" value={beneficiary.nss} />
              <ValueItem keyName="CURP" value={beneficiary.curp} />
              <ValueItem keyName="Clínica" value={beneficiary.clinic} />
              <ValueItem keyName="UMF" value={beneficiary.umf} />
              <ValueItem keyName="Dependientes" value={beneficiary.dependents} />
              <ValueItem keyName="Médico familiar" value={beneficiary.doctor} />
            </Grid.Column>
            <Grid.Column mobile={16} computer={6}>
              <ValueItem keyName="Antecedentes Quirúrgicos" value="Ver más" />
              <div><b>Alergias: </b> <CsvList array={beneficiary.allergies} /></div>
              <div><b>Padecimientos: </b> <CsvList array={beneficiary.ailment} /></div>
            </Grid.Column>
            <Grid.Column mobile={16} computer={5}>
              <ValueItem keyName="AHD (Antecedentes Heredo Familiares)" value="" />
              <List bulleted items={['Diabetes tipo 2 (padre)', 'Cáncer de colon (abuelo)']} />
            </Grid.Column>
          </Grid>
        </TabPane>
      )
    },
  },
  {
    menuItem: 'Consultas médicas previas',
    render: props => {
      const { consultations } = props

      return (
        <TabPaneTable attached={false} name="prev-constultations">
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
                    <b><a href="">Ver detalles</a></b>
                  </TableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </TabPaneTable>
      )
    },
  },
  {
    menuItem: 'Estudios de laboratorio',
    render: props => {
      const { studies } = props

      return (
        <TabPaneTable attached={false} name="prev-constultations">
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
  },
  {
    menuItem: 'Tratamientos',
    render: props => {
      const { treatments } = props

      return (
        <TabPaneTable attached={false} name="prev-constultations">
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
      )
    },
  },
]

const TabMedicalReport = ({ beneficiary, consultations, studies, treatments }) => (
  <TabMedical
    beneficiary={beneficiary}
    consultations={consultations}
    studies={studies}
    treatments={treatments}
    menu={{ secondary: true, className: 'wrapped' }}
    panes={panes}
  />
)

export default TabMedicalReport

const TabPane = styled(Tab.Pane)`
  &.ui.segment {
    border: none;
    padding: 23px;
  }

  &[name="information"] .column>div:not(:last-child) {
    margin-bottom: 1rem;
  }
`
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
const TabHeader = styled.h3`
  &.ui.header {
    font-size: 12px;
    margin-bottom: 20px;
  }
`
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