import React from 'react'
import PageHeader from '../../../shared/PageHeader'
import Card from '../../../shared/Card'
import { Grid, List } from 'semantic-ui-react'
import DefaultListItem from '../../../shared/DefaultListItem'
import { procedures } from './adminServices.json'

const AdminMatters = () => (
  <React.Fragment>
    <Grid>
      <PageHeader
        title="Sección administrativa"
        subtitle={<label>Consulta o inicia trámites administrativos</label>}
      />
      <Grid.Row>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <Card header="Trámites y consultas">
            <List divided verticalAlign="middle">
              {procedures.map((procedure, index) => (
                <DefaultListItem item={procedure} key={index}/>
              ))}
            </List>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
)

export default AdminMatters