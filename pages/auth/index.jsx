import React, { PureComponent } from 'react'
import Login from '../../components/pages/Login'
import { redirectIfAuthenticated } from '../../utils/auth'

class Signin extends PureComponent {

  componentDidMount() {
    redirectIfAuthenticated()
  }

  render() {
    return (
      <Login />
    )
  }
}

export default Signin