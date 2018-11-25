import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'
import media from 'styled-media-query'
import moment from 'moment'
import 'moment/locale/es'

class PageHeader extends PureComponent {
  state = {
    date: '',
    time: '',
  }

  componentDidMount() {
    const date = moment().format('LL')
    const time = moment().format('hh:mm a')
    this.setState({
      date: date,
      time: time,
    })
    // eslint-disable-next-line no-undef
    this.interval = setInterval(this.updateTime, 5000)
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    clearInterval(this.interval)
  }

  updateTime = () => {
    const date = moment().format('LL')
    const time = moment().format('hh:mm a')
    this.setState({
      date: date,
      time: time,
    })
  }

  render() {
    const { date, time } = this.state
    const { title, subtitle } = this.props

    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column mobile={16} computer={12}>
            <CustomHeader as="h3">{title}</CustomHeader>
            <CustomHeader as="h1">{subtitle}</CustomHeader>
          </Grid.Column>
          <Grid.Column mobile={16} computer={4}>
            <DateContainer>
              <Date as="h3">
                { date }
              </Date>
              <Date as="h3" name="dateTime">
                { time }
              </Date>
            </DateContainer>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

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