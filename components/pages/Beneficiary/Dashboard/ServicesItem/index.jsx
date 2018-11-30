import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'

const ServiceItem = ({ service }) => (
  <ServiceRow>
    <IconContainer mobile={16} tablet={3} computer={4}>
      <Link as="" href={service.link}><a target="_blank"><Icon src={service.icon}/></a></Link>
    </IconContainer>
    <ServiceInfoContainer mobile={16} tablet={13} computer={12}>
      <Link as="" href={service.link}><a target="_blank">{ service.name }</a></Link>
    </ServiceInfoContainer>
  </ServiceRow>
)

export default ServiceItem

const ServiceRow = styled(Grid)`
  >.column:not(.row):last-child {
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

const IconContainer = styled(Grid.Column)`
  text-align: center;

  ${media.between('medium','1025px')`
    [class*="two wide computer"]&&&.column {
      width: 18.75%!important;
    }
  `}

  ${media.lessThan('medium')`
    &&&.column:not(.row) {
      padding-bottom: 0;
    }
  `}
`
const ServiceInfoContainer = styled(Grid.Column)`
  ${media.between('medium','1025px')`
    [class*="fourteen wide computer"]&&&.column {
      width: 81.25%!important;
    }
  `}
`
const Icon = styled(Image)`
  && {
    border-radius: 30px;
    max-width: 55px;
    max-height: 55px;
  }
`