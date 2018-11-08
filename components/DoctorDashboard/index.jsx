import React from 'react'
import Layout from '../Layout'
import Header from '../shared/Header'
import { Grid, Card, Image, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'
import NewsApi from './NewsApi'

class DoctorDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
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
    const { articles } = this.state
    return (
      <Layout userRole="medic">
        <Grid>
          <Header 
            title="Inicio" 
            subtitle="Buenos días, Dr. McDreamy"
          />
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <CustomCard>
                <Card.Content>
                  <Card.Header>
                    Próximas Consultas
                  </Card.Header>
                    <Consultations>
                      <ConsultationRow>
                        <Grid.Column width={2}>
                          <Avatar src="../../static/images/avatar.png"/>
                        </Grid.Column>
                        <Grid.Column width={14}>
                          <Link as="" href=""><a>María del Carmen Hinojosa Ramírez</a></Link>
                          <ConsultationInfo>
                            <span>
                              <Bold>Fecha: </Bold> 10 Oct, 2048
                            </span>
                            <span>
                              <Bold>Hora: </Bold> 08:30 am
                            </span>
                            <span>
                              <Bold>Última cita: </Bold> 12 Jul, 2048
                            </span>
                          </ConsultationInfo>
                        </Grid.Column>
                      </ConsultationRow>
                  </Consultations>
                  <CenteredButton>
                    <MoreButton secondary className="small">Ver más</MoreButton>
                  </CenteredButton> 
                </Card.Content>
              </CustomCard>
              <CustomCard>
                <Card.Content>
                  <Card.Header>
                    Información Importante
                  </Card.Header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sollicitudin est, at varius nunc. 
                    Morbi ac quam at est viverra posuere. In porttitor tortor vulputate dolor semper egestas. Curabitur sit 
                    amet ante sed erat tempor pellentesque. Pellentesque ipsum lectus, condimentum a volutpat id, tincidunt 
                    vitae nunc. Ut sed dapibus mi, eu finibus arcu. Nulla maximus posuere nunc id accumsan. Pellentesque tempor 
                    aliquam lectus, quis efficitur nisl suscipit vel. Pellentesque vitae dolor eros. 
                  </p>
                </Card.Content>
              </CustomCard>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <CustomCard>
                <Card.Content>
                  <Card.Header>
                    Últimas Noticias
                  </Card.Header>
                  {articles.map((article, index) => (
                    <ArticleContainer key={index}>
                      <p>{article.title}</p>
                      <a href={article.url} target="_blank">
                        <MoreButton secondary className="small">Ver más</MoreButton>
                      </a>
                    </ArticleContainer>
                  ))}
                </Card.Content>
              </CustomCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default DoctorDashboard

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

const CustomCard = styled(Card)`
  && {
    width: 100%;
  }
`
const ConsultationRow = styled(Grid)`
  >.column:not(.row):last-child {
    padding-top: 1.5rem;
  }
`

const ConsultationInfo = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`
const Avatar = styled(Image)`
  && {
    border-radius: 30px;
    max-width: 60px;
    max-height: 60px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    border: 3px solid #FFF;
  }
`
const Bold = styled.b`
  font-weight: 500;
`