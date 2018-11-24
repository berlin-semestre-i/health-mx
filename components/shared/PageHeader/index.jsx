import React from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'
import media from 'styled-media-query'

const PageHeader = ({title, subtitle}) => (
  <React.Fragment>
    <Grid.Row>
      <Grid.Column mobile={16} computer={12}>
        <CustomHeader as="h3">{title}</CustomHeader>
        <CustomHeader as="h1">{subtitle}</CustomHeader>
      </Grid.Column>
      <Grid.Column mobile={16} computer={4}>
        <DateContainer>
          <Date className="ui header" element="h3" locale="es" format="LL" />
          <Date element="h3" locale="es" format="hh:mm a" interval={15000} />
        </DateContainer>
      </Grid.Column>
    </Grid.Row>
  </React.Fragment>
)

export default PageHeader

const DateContainer = styled.div`

  ${media.greaterThan('1024px')`
    position: absolute;
    bottom: 0;
    right: 1rem;
    text-align: right;
  `}
  
`
const CustomHeader = styled(Header)`
  &&& {
    margin: 0;
  }
`

const Date = styled(Moment)`
  &&& {
    letter-spacing: inherit;
    text-transform: inherit;
    font-size: 17px;
    margin: 0;
  }
`