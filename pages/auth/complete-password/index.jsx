import React, { PureComponent } from 'react'
import CompletePassword from '../../../components/pages/Login/CompletePassword'
import { getCookie } from '../../../utils/session'
import redirect from '../../../utils/redirect'
import { redirectIfAuthenticated } from '../../../utils/auth'

class Complete extends PureComponent {

  state = {
    username: getCookie('cognito-username'),
  }

  componentDidMount() {
    redirectIfAuthenticated()
    if (!this.state.username) {
      redirect('/auth')
    }
  }

  render() {
    return (
      <CompletePassword />
    )
  }
}

export default Complete