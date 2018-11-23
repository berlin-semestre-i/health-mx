import React, { PureComponent } from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import { Grid, Icon } from 'semantic-ui-react'
import media from 'styled-media-query'

class Header extends PureComponent {

  render() {
    
    const { title, subtitle, goBack } = this.props
    let icon

    if(goBack) 
      icon = <BackIcon name="chevron left" />

    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column mobile={16} computer={12}>
            <CustomHeader3 active={goBack} className="ui header">
            <span>{icon} {title}</span>
            </CustomHeader3>
            <CustomHeader1 className="ui header">{subtitle}</CustomHeader1>
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
  }
}

export default Header

const DateContainer = styled.div`

  ${media.greaterThan('1024px')`
    position: absolute;
    bottom: 0;
    right: 1rem;
    text-align: right;
  `}
  
`
const CustomHeader1 = styled.h1`
  &&& {
    margin: 0;
  }
`
const CustomHeader3 = styled.h3`
  &&& {
    margin: 0;
  }

  ${({ active }) => active && `
    >span {
      cursor: pointer;
    }
  `}
`

const Date = styled(Moment)`
  &&& {
    letter-spacing: inherit;
    text-transform: inherit;
    font-size: 17px;
    margin: 0;
  }
`
const BackIcon = styled(Icon)`
  &&&.icon {
    margin-right: 0;
    font-size: 1.28571429rem;
    vertical-align: top;
    font-weight: 700;
  }
  
`