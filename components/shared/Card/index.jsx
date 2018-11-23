import React, { PureComponent } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

let iconColor

class CustomCard extends PureComponent {
  render() {
    const { header, children, className, iconName, label, iconColor } = this.props
    let icon

    if(iconName) {
      if(iconColor)
        icon = <Icon color={iconColor} name={iconName} />
      else 
        icon = <Icon name={iconName} />
    }
      
    return (
      <FullWidthCard className={className}>
        <Card.Content>
          <Card.Header>
            { header }
            <Secondary>
              { icon } <span>{ label }</span>
            </Secondary>
          </Card.Header>
          { children }
        </Card.Content>
      </FullWidthCard>
    )
  }
}

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
const Secondary = styled.div`
  float: right;
  cursor: pointer;
  color: #3d5170;
  text-transform: none;
  letter-spacing: 0.5px;

  ${media.lessThan('small')`
    >span {
      display: none;
    }
  `}
`

