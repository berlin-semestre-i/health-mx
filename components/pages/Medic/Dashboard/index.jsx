import React, { PureComponent } from 'react'
import Header from '../../../shared/Header'
import AppointmentListItem from '../../../shared/AppointmentListItem'
import { Grid, Button, Loader, Dimmer, Image, Card } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'
import NewsApi from '../../../../utils/NewsAPI'
import Link from 'next/link'

class DoctorDashboard extends PureComponent {
  state = {
    articles: [],
    appointment: {
      name: 'María del Carmen Hinojosa Ramírez',
      date: '10 Oct, 2018',
      time: '08:30 am',
      previous: '12 Jul, 2048',
      profile: '../../../static/images/avatar.png',
    },
  }


  componentDidMount = () => {
    NewsApi.getData().then( response => {
      this.setState({
        articles: response.articles,
      })
    })
  }

  render() {
    const { articles, appointment } = this.state

    return (
      <React.Fragment>
        <Grid>
          <Header
            title="Inicio"
            subtitle="Buenos días, Dr. McDreamy"
          />
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={8} className="dashboard-col">
              <DashboardCard>
                <Card.Content>
                  <Card.Header>
                    Próximas Consultas
                  </Card.Header>
                  <Consultations>
                    <AppointmentListItem appointment={appointment}/>
                  </Consultations>
                  <CenteredButton>
                    <MoreButton secondary className="small">Ver más</MoreButton>
                  </CenteredButton>
                </Card.Content>
              </DashboardCard>
              <DashboardCard>
                <Card.Content>
                  <Card.Header>
                    Información Importante
                  </Card.Header>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel sollicitudin est, at varius nunc.
                  Morbi ac quam at est viverra posuere. In porttitor
                  tortor vulputate dolor semper egestas. Curabitur sit
                  amet ante sed erat tempor pellentesque. Pellentesque ipsum
                  lectus, condimentum a volutpat id, tincidunt
                  vitae nunc. Ut sed dapibus mi, eu finibus arcu.
                  Nulla maximus posuere nunc id accumsan. Pellentesque tempor
                  aliquam lectus, quis efficitur nisl suscipit vel. Pellentesque vitae dolor eros.
                </Card.Content>
              </DashboardCard>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <DashboardCard className="loaderCard nth-col-first">
                <Card.Content>
                  <NewsCardHeader>
                    Últimas Noticias
                  </NewsCardHeader>
                  <NewsDimmer active={articles.length === 0}>
                    <Loader indeterminate />
                  </NewsDimmer>
                  {articles.map((article, index) => (
                    <ArticleContainer name="article" key={index}>
                      <ArticleImage src={article.urlToImage} />
                      <ArticleInfo>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <Link href={article.url} >
                          <a>
                            <MoreButton secondary className="small">Ver más</MoreButton>
                          </a>
                        </Link>
                      </ArticleInfo>
                    </ArticleContainer>
                  ))}
                </Card.Content>
              </DashboardCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default DoctorDashboard

const ArticleTitle = styled.p`
  &&&& {
    font-weight: 600;
  }
`

const ArticleInfo = styled.div`
  &&&& {
    width: 100%;
    padding-top: 20px;
    padding-left: 21px;
  }

  ${media.lessThan('medium')`
    &&&& {
      padding-top: 0;
      padding-left: 0;
    }
  `}
`

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
    min-height: 710px;
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

const ArticleImage = styled(Image)`
  &&&& {
    width: 190px;
    height: 100px;
    float: left;
  }

  ${media.lessThan('medium')`
    &&&& {
      display: none;
    }
  `}
`

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
  && {
    height: 162px;
    padding-top: 30px;
    display: flex;
  }
  
  ${media.lessThan('medium')`
    && {
      height: fit-content;
    }
  `}

  &&:not(:last-child) {
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 32px;
  }
`
const CenteredButton = styled.div`
  text-align: center;
`
const Consultations = styled.div`
  margin-bottom: 1rem;
`