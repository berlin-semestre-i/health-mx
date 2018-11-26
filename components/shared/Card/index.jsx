import React from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

const CustomCard = ({ children, header, className }) => (
  <FullWidthCard className={className}>
    <Card.Content>
      <Card.Header>
        { header }
      </Card.Header>
      {children }
    </Card.Content>
  </FullWidthCard>
)

export default CustomCard

const FullWidthCard = styled(Card)`
  && {
    width: 100%;
  }

  &&.loaderCard {
    min-height: 200px;
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

