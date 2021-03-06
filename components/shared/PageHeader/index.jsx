import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Grid, Header, Icon } from 'semantic-ui-react'
import media from 'styled-media-query'
import moment from 'moment'
import 'moment/locale/es'
import Link from 'next/link'

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
    const { title, subtitle, goBack,address } = this.props

    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column mobile={16} computer={12}>
            <CustomHeader active={goBack} as="h3" className="ui header">
              {
                goBack && (
                  <Link href={address}>
                    <span>
                      <BackIcon name="chevron left" />
                      {title}</span>
                  </Link>
                )
              }
              {
                !goBack && (
                  <span>{title}</span>
                )
              }
            </CustomHeader>
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

  ${({ active }) => active && `
    >span {
      cursor: pointer;
    }
  `}
`

const Date = styled(Header)`
  &&& {
    letter-spacing: inherit;
    text-transform: inherit;
    font-size: 17px;
    margin: 0;
  }

  &&&:first-child {
    color: #818ea3;
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