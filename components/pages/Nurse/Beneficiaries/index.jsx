import React, { PureComponent } from 'react'
import { Grid, Form, Button, Table } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'
import Header from '../../../shared/PageHeader'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

const specialtiesOptions = [{
  text: 'Especialidad 1', value: 0,
}, {
  text: 'Especialidad 2', value: 1,
}]
const searchResults = [{
  beneficiary: 'Orduño Ahumada, Julia Paola',
  nextAppointment: '10 oct, 2018 - 8:00 a.m.',
  specialty: 'Medicina familiar',
  status: 'Regular',
},{
  beneficiary: 'Orduño Ahumada, Julia Paola',
  nextAppointment: '10 oct, 2018 - 8:00 a.m.',
  specialty: 'Medicina familiar',
  status: 'Regular',
},{
  beneficiary: 'Orduño Ahumada, Julia Paola',
  nextAppointment: '10 oct, 2018 - 8:00 a.m.',
  specialty: 'Medicina familiar',
  status: 'Regular',
}]

class Beneficiaries extends PureComponent {

  state = {
    date: '',
    beneficiaryName:'',
    specialty: '',
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  render() {
    const { date, beneficiaryName, specialty } = this.state

    return (
      <React.Fragment>
        <Grid>
          <Header subtitle="Toma de somatometrías previas" title="Derechohabientes" />
          <Grid.Row>
            <Grid.Column>
              <Form>
                <h4>Búsqueda de derechohabientes</h4>
                <NurseFormGroup>
                  <Form.Input
                    width={7}
                    placeholder="Nombre"
                    value={beneficiaryName}
                    onChange={this.handleChange}
                    name="beneficiaryName"
                  />
                  <Form.Field width={4}>
                    <DateInput
                      placeholder="Fecha de cita"
                      iconPosition="left"
                      value={date}
                      name="date"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Dropdown
                    selection
                    fluid
                    width={3}
                    options={specialtiesOptions}
                    placeholder="Especialidad"
                    value={specialty}
                    name="specialty"
                    onChange={this.handleChange}
                  />
                  <Form.Field width={2}>
                    <Button content="Buscar" />
                  </Form.Field>
                </NurseFormGroup>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Table striped>
                <TableHeader>
                  <Table.Row>
                    <Table.HeaderCell>Derechohabiente</Table.HeaderCell>
                    <Table.HeaderCell>Próxima Cita</Table.HeaderCell>
                    <Table.HeaderCell>Área de especialidad</Table.HeaderCell>
                    <Table.HeaderCell>Estado</Table.HeaderCell>
                    <Table.HeaderCell className="empty"></Table.HeaderCell>
                  </Table.Row>
                </TableHeader>
                <Table.Body>
                  {searchResults.map((result, index) => (
                    <Table.Row key={index}>
                      <TableCell>{result.beneficiary}</TableCell>
                      <TableCell>{result.nextAppointment}</TableCell>
                      <TableCell>{result.specialty}</TableCell>
                      <TableCell>{result.status}</TableCell>
                      <TableCell>
                        <Link href="/nurse/consultation">
                          <b><a href="">Ver detalles</a></b>
                        </Link>
                      </TableCell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Beneficiaries

const NurseFormGroup = styled(Form.Group)`
  & div.field .ui.button {
    width: 100%;
  }

  ${media.lessThan('small')`
    &&&.fields>div.field {
      margin-bottom: 1rem;
    }
  `}

  ${media.between('small', 'medium')`
    &.fields .seven.wide.field {
      width: 37% !important;
    }

    &.fields .four.wide.field {
      width: 20% !important;
    }

    &.fields .three.wide.field {
      width: 23.75% !important;
    }

    &.fields .two.wide.field {
      width: 18.5% !important;
    }
  `}
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