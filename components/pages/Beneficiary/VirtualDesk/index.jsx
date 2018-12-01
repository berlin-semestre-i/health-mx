import React, { PureComponent } from 'react'
import PageHeader from '../../../shared/PageHeader'
import { Grid, Dropdown, Icon, Input } from 'semantic-ui-react'
import VirtualDeskCard from './VirtualDeskCard'
import DefaultTable from './Table'
import TableBodyRow from './TableBodyRow'
import styled from 'styled-components'

class VirtualDesk extends PureComponent {
  state = {
    articles: [],
    beneficiary: 'Michelle Sagnelli',
    dependants: [
      {
        nss: 2,
        name: 'Alfonso Contreras',
        relationship: 'HIJO',
        curp: 'CORA284983491DSA',
        sex: 'H',
        age: '59',
        situation: 'Vigente',
      },
    ],
    options: [
      {
        value: 1,
        text: 'Action 1',
      },
      {
        value: 2,
        text: 'Action 2',
      },
    ],
  }

  handleChange = (e, {value}) => this.setState({value})

  render() {
    const { dependants, options, value } = this.state

    return (
      <React.Fragment>
        <Grid>
          <PageHeader
            title="Sección médica"
            subtitle={<label>Consulta o inicia trámites clínicos</label>}
          />
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={6}>
              <VirtualDeskCard
                header="Datos de adscripción y vigencia"
              >
                <Grid>
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                      <Icon name="move" />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={8}>
                      <ActionsDropdown
                        onChange={this.handleChange}
                        placeholder="Acciones"
                        fluid selection options={options}
                        value={value}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </VirtualDeskCard>
              <VirtualDeskCard
                header="Trámites digitales"
              >
                <Icon name="move" />
              </VirtualDeskCard>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={10} className="dashboard-col">
              <VirtualDeskCard
                header="Detalle del derechohabiente"
                iconName="move"
              >
                <p>No hay información disponible</p>
              </VirtualDeskCard>
              <VirtualDeskCard
                header="Mi grupo familiar"
                iconName="move"
              >
                <Grid>
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={10} computer={10}>
                      <p>Usted cuenta con los siguientes integrantes en su grupo familiar:</p>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={6} computer={6}>
                      <SearchInput fluid icon="search" placeholder="Buscar"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <DefaultTable>
                  {dependants.map((dependant, index) => (
                    <TableBodyRow dependant={dependant} key={index}/>
                  ))}
                </DefaultTable>
              </VirtualDeskCard>
              <VirtualDeskCard
                header="Grupos familiares relacionados"
                iconName="move"
              >
                <p>No hay información disponible</p>
              </VirtualDeskCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default VirtualDesk

const ActionsDropdown = styled(Dropdown)`
  & {
      float: right;
  }
`

const SearchInput = styled(Input)`
  & {
      float: right:
  }
`