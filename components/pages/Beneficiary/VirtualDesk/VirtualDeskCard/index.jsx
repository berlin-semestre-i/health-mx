import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

const VirtualDeskCard = ({ children, header, iconName, iconColor }) => (
  <DeskCard>
    <Card.Content>
      <Card.Header>
        { header }
        <AddIcon>
          <Icon color="blue" name="plus" />
        </AddIcon>
        <Secondary>
          {iconName && iconColor && (
            <Icon color={iconColor} name={iconName} />
          )}
          {iconName && !iconColor && (
            <Icon name={iconName} />
          )}
        </Secondary>
      </Card.Header>
      { children }
    </Card.Content>
  </DeskCard>
)

export default VirtualDeskCard

const DeskCard = styled(Card)`
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

const AddIcon = styled.div`
    float: right;
    cursor: pointer;
    color: #3d5170;
    text-transform: none;
    letter-spacing: 0.5px;
    margin-left: 1rem;
    font-size: 18px;

    ${media.lessThan('small')`
        >span {
        display: none;
         }
    `}
`

const Secondary = styled.div`
    float: right;
    cursor: pointer;
    color: #3d5170;
    text-transform: none;
    letter-spacing: 0.5px;
    font-size: 18px;

    ${media.lessThan('small')`
        >span {
        display: none;
         }
    `}
`