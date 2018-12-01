import React, { PureComponent } from 'react'
import PageHeader from '../../../shared/PageHeader'
import ServicesItem from '../Dashboard/ServicesItem'
import { Grid, Button, Image, Card, Dropdown, List } from 'semantic-ui-react'
import AppointmentsList from './AppointmentsList'
import DefaultListItem from '../../../shared/DefaultListItem'
import styled from 'styled-components'
import media from 'styled-media-query'

class ClinicalMatters extends PureComponent {
  state = {
    articles: [],
    beneficiary: 'Michelle Sagnelli',
    dependants: [
      {
        name: 'Michelle Sagnelli',
        text: 'Michelle Sagnelli',
        nss: 1,
        value: 1,
      },
      {
        name: 'Alfonso Contreras',
        text: 'Alfonso Contreras',
        nss: 2,
        value: 2,
      },
    ],
    appointments: [
      {
        nss: 1,
        beneficiary: 'Michelle Sagnelli',
        date: '10 Oct, 2018',
        time: '08:30 am',
        specialty: 'Medicina Familiar',
      },
      {
        nss: 1,
        beneficiary: 'Michelle Sagnelli',
        date: '02 Jul, 2017',
        time: '11:00 am',
        specialty: 'Medicina Familiar',
      },
      {
        nss: 2,
        beneficiary: 'Alfonso Contreras',
        date: '25 Jul, 2018',
        time: '08:00 am',
        specialty: 'Traumatología',
      },
    ],
    procedures : [
      {
        title: 'Agendar cita médica',
        link: 'http://www.imss.gob.mx/cita-medica',
      },
      {
        title: 'Actualización en  UMF',
        link: 'http://imss.gob.mx/tramites/actualizacion-umf',
      },
      {
        title: 'Alta en clínica o UMF',
        link: 'http://imss.gob.mx/tramites/registro-umf',
      },
      {
        title: 'Consulta de incapacidades',
        link: 'https://serviciosdigitales.imss.gob.mx/portal-web/portal',
      },
      {
        title: 'Incorporación al seguro de salud para la familia',
        link: 'http://imss.gob.mx/tramites/imss02014',
      },
      {
        title: 'Cambio de clínica',
        link: 'http://bit.ly/2R7YdIp',
      },
      {
        title: 'Descarga de expediente clínico digital',
        link: '',
      },
    ],
  }

  handleChange = (e, {value}) => this.setState({value})

  render() {
    const { dependants, appointments, value, procedures } = this.state

    const FilterByBeneficiary = (item) => {
      if(value === item.nss){
        return true
      }
      return false
    }

    const appointmentsFiltered = appointments.filter(FilterByBeneficiary)

    return (
      <React.Fragment>
        <Grid>
          <PageHeader
            title="Sección médica"
            subtitle={<label>Consulta o inicia trámites clínicos</label>}
          />
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <DashboardCard className="loaderCard nth-col-first">
                <Card.Content>
                  <NewsCardHeader>
                    Últimas citas médicas
                  </NewsCardHeader>
                  <BeneficiaryDropdown
                    onChange={this.handleChange}
                    placeholder="Selecciona un derechohabiente"
                    fluid selection options={dependants}
                    value={value}
                  />
                  <List divided verticalAlign="middle">
                    {appointmentsFiltered.map((appointment, index) => (
                      <AppointmentsList appointment={appointment} key={index}/>
                    ))}
                  </List>
                </Card.Content>
              </DashboardCard>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8} className="dashboard-col">
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

export default ClinicalMatters

const NewsCardHeader = styled(Card.Header)`
  &&&& {
    margin-bottom: 0;
  }
`

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

const CreateAppBtn = styled(Button)`
  &&& {
    padding: .5em 1em;
  }
`

const Consultations = styled.div`
  margin-bottom: 1rem;
`
const ServicesItems = styled(ServicesItem)`
  & {
      display: inline;
  }
`

const NewsImage = styled(Image)`
  & {
      padding-top: 2rem;
      padding-bottom: 1rem;
  }
`

const BeneficiaryDropdown = styled(Dropdown)`
  & {
      margin-top: 1.5rem;
  }
`