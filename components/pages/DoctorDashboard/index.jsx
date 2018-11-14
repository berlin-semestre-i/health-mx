import React, { PureComponent } from 'react'
import Layout from '../../Layout'
import Header from '../../shared/Header'
import AppointmentListItem from '../../shared/AppointmentListItem'
import Card from '../../shared/Card'
import { Grid, Button, Loader, Dimmer } from 'semantic-ui-react'
import styled from 'styled-components'
import NewsApi from './NewsApi'
import Link from 'next/link'

class DoctorDashboard extends PureComponent {

  state = {
    articles: [],
    appointment: {
      name: "María del Carmen Hinojosa Ramírez",
      date: "10 Oct, 2018",
      time: "08:30 am",
      previous: "12 Jul, 2048",
      profile: "../../../static/images/avatar.png"
    }
  }

  componentDidMount() {
    NewsApi.getData().then( response => {
      this.setState({
        articles: response.articles
      })
    })
  }

  render() {
    const { articles, appointment } = this.state
    
    return (
      <React.Fragment>
        <Layout userRole="medic">
          <Grid>
            <Header 
              title="Inicio" 
              subtitle="Buenos días, Dr. McDreamy"
            />
            <Grid.Row>
              <Grid.Column mobile={16} tablet={16} computer={8} className="dashboard-col">
                <Card header="Próximas Consultas">
                  <Consultations>
                      <AppointmentListItem appointment={appointment}/>
                  </Consultations>
                  <CenteredButton>
                    <MoreButton secondary className="small">Ver más</MoreButton>
                  </CenteredButton> 
                </Card>
                <Card header="Información Importante">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sollicitudin est, at varius nunc. 
                  Morbi ac quam at est viverra posuere. In porttitor tortor vulputate dolor semper egestas. Curabitur sit 
                  amet ante sed erat tempor pellentesque. Pellentesque ipsum lectus, condimentum a volutpat id, tincidunt 
                  vitae nunc. Ut sed dapibus mi, eu finibus arcu. Nulla maximus posuere nunc id accumsan. Pellentesque tempor 
                  aliquam lectus, quis efficitur nisl suscipit vel. Pellentesque vitae dolor eros. 
                </Card>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={16} computer={8}>
                <Card header="Últimas Noticias" className="loaderCard nth-col-first">
                  <NewsDimmer active={articles.length == 0}>
                    <Loader indeterminate />
                  </NewsDimmer>
                  {articles.map((article, index) => (
                    <ArticleContainer name="article" key={index}>
                      <p>{article.title}</p>
                      <Link href={article.url} >
                        <a target="_blank">
                          <MoreButton secondary className="small">Ver más</MoreButton>
                        </a>
                      </Link>
                    </ArticleContainer>
                  ))}
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Layout>
      </React.Fragment>
    )
  }
}

export default DoctorDashboard

const NewsDimmer = styled(Dimmer)`
  && {
    background-color: rgba(0,0,0,0);
  }
`
const MoreButton = styled(Button)`
  &&& {
    padding: .5em 1em;
  }
`
const ArticleContainer = styled.div`
  padding: 1.5rem 0;

  :not(:last-child) {
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
`
const CenteredButton = styled.div`
  text-align: center;
`
const Consultations = styled.div`
  margin-bottom: 1rem;
`