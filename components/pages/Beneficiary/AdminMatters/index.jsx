import React, { PureComponent } from 'react'
import Header from '../../../shared/Header'
import { Grid, Card, List } from 'semantic-ui-react'
import DefaultListItem from '../../../shared/DefaultListItem'
import styled from 'styled-components'
import media from 'styled-media-query'

class AdminMatters extends PureComponent {
  state = {
    articles: [],
    beneficiary: 'Alfonso Iraí Contreras Chávez',
    procedures : [
      {
        title: 'Incorporación voluntaria al régumen obligatorio del seguro social',
        link: 'https://serviciosdigitales.imss.gob.mx/portal-ciudadano-web-externo/home',
      },
      {
        title: 'Incorporación a la continuación voluntaria del régimen obligatorio',
        link: 'https://serviciosdigitales.imss.gob.mx/portal-ciudadano-web-externo/home',
      },
      {
        title: 'Registra, da de baja o actualiza los datos de tus beneficiarios(as)',
        link: 'https://serviciosdigitales.imss.gob.mx/portal-web/portal',
      },
      {
        title: 'Registro de cuenta CLABE',
        link: 'https://serviciosdigitales.imss.gob.mx/portal-web/portal',
      },
      {
        title: 'Registro de hijos con CURP',
        link: 'http://bit.ly/2Ku7SXk',
      },
      {
        title: 'Consulta tus semanas cotizadas en el IMSS',
        link: 'http://bit.ly/semanas-cotizadas',
      },
      {
        title: 'Número de Seguridad Social (NSS)',
        link: 'http://bit.ly/imssNSS',
      },
      {
        title: 'Actualización de CURP para asegurado(a) o pensionado(a)',
        link: 'http://bit.ly/2DYMTMb',
      },
      {
        title: 'Actualización de datos de tus beneficiarios(as)',
        link: 'https://serviciosdigitales.imss.gob.mx/portal-web/portal',
      },
      {
        title: 'Cambio de clínica o UMF',
        link: 'http://bit.ly/2R7YdIp',
      },
      {
        title: 'Registro de solicitud de correción de datos del asegurado',
        link: 'http://bit.ly/2BvJ4vp',
      },
    ],
  }

  render() {
    const { procedures } = this.state

    return (
      <React.Fragment>
        <Grid>
          <Header
            title="Sección administrativa"
            subtitle={<label>Consulta o inicia trámites administrativos</label>}
          />
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={16}>
              <DashboardCard>
                <Card.Content>
                  <Card.Header>
                    Trámites y consultas
                  </Card.Header>
                  <List divided verticalAlign="middle">
                    {procedures.map((procedure, index) => (
                      <DefaultListItem item={procedure} key={index}/>
                    ))}
                  </List>
                </Card.Content>
              </DashboardCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default AdminMatters

const DashboardCard = styled(Card)`
  && {
    width: 100%;
  }

  ${media.lessThan('medium')`
    &&.nth-col-first {
      margin-top: 1em;
    }
  `}

  &&.loaderCard .ui.loader:after {
    border-color: rgba(0,0,0,0.2) transparent transparent;
  }
`