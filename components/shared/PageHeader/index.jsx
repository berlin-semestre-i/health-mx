import React from 'react'
import styled from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'
import moment from 'moment'
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
          <Date as="h3">
            { moment().locale('es').format('LL')}
          </Date>
          <Date as="h3">
            { moment().locale('es').format('hh:mm a')}
          </Date>
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

const Date = styled(Header)`
  &&& {
    letter-spacing: inherit;
    text-transform: inherit;
    font-size: 17px;
    margin: 0;
  }
`