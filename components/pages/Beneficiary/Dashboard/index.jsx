import React, { PureComponent } from 'react'
import PageHeader from '../../../shared/PageHeader'
import BeneficiaryAppointmentItem from './BeneficiaryAppointmentItem'
import ServicesItem from './ServicesItem'
import { Grid, Button, Image, Card } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

class BeneficiaryDashboard extends PureComponent {
  state = {
    articles: [],
    beneficiary: 'Alfonso Iraí Contreras Chávez',
    appointment: {
      name: 'Alfonso Iraí Contreras Chávez',
      date: '02 de diciembre de 2018',
      time: '09:30 am',
      clinic: 'UMF Zapopan 31',
      icon: '../../../static/images/avatar.png',
    },
    services: [
      {
        name: 'Número de Seguro Social',
        icon: '../../../../static/images/NSSIcon.png',
        link: 'http://bit.ly/imssNSS',
      },
      {
        name: 'Semanas Cotizadas',
        icon: '../../../../static/images/WeeksIcon.png',
        link: 'http://bit.ly/semanas-cotizadas',
      },
      {
        name: 'Consulta de vigencia de derechos',
        icon: '../../../../static/images/RightsIcon.png',
        link: 'http://bit.ly/constancia-de-derechos-imss',
      },
      {
        name: 'Agenda tu cita médica vía web',
        icon: '../../../../static/images/CreateAppIcon.png',
        link: 'http://bit.ly/cita-medica-imss',
      },
    ],
  }

  render() {
    const { beneficiary, appointment, services } = this.state

    return (
      <React.Fragment>
        <Grid>
          <PageHeader
            title="Inicio"
            subtitle={<label>Buen día, {beneficiary}.</label>}
          />
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <DashboardCard className="loaderCard nth-col-first">
                <Card.Content>
                  <NewsCardHeader>
                    Últimas Noticias
                  </NewsCardHeader>
                  <NewsImage src="../../../../static/images/news1.png" fluid/>
                  <NewsImage src="../../../../static/images/news2.jpg" fluid/>
                </Card.Content>
              </DashboardCard>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8} className="dashboard-col">
              <DashboardCard>
                <Card.Content>
                  <Card.Header>
                    Próximas citas médicas
                  </Card.Header>
                  <Consultations>
                    <BeneficiaryAppointmentItem appointment={appointment}/>
                  </Consultations>
                  <CreateAppBtn secondary className="small">Agendar cita</CreateAppBtn>
                </Card.Content>
              </DashboardCard>
              <DashboardCard>
                <Card.Content>
                  <Card.Header>
                    Servicios más consultados
                  </Card.Header>
                  <div className="services">
                    <Grid columns={2} padded>
                      <Grid.Column>
                        <ServicesItems service={services[0]}/>
                        <ServicesItems service={services[2]}/>
                      </Grid.Column>
                      <Grid.Column>
                        <ServicesItems service={services[1]}/>
                        <ServicesItems service={services[3]}/>
                      </Grid.Column>
                    </Grid>
                  </div>
                </Card.Content>
              </DashboardCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default BeneficiaryDashboard

const NewsCardHeader = styled(Card.Header)`
  &&&& {
    margin-bottom: 0;
  }
`

const DashboardCard = styled(Card)`
  && {
    width: 100%;
  }

  &&.loaderCard {
    min-height: auto;
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