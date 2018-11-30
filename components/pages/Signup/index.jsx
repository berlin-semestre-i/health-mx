import React from 'react'
import UserDetails from './UserDetails'
import UserId from './UserId'
import UserPhoto from './UserPhoto'
import UserConfirmation from './UserConfirmation'
import Success from './Success'

export class SignUp extends React.Component {
  state = {
    step: 1,
    curp: '',
    nss: '',
    email: '',
    id: '',
    photo: '',
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const { step } = this.state
    const { curp, nss, email, id, photo } = this.state
    const values = { curp, nss, email, id, photo }

    switch(step){
    case 1:
      return(
        <UserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
    case 2:
      return(
        <UserId
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
    case 3:
      return(
        <UserPhoto
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
    case 4:
      return(
        <UserConfirmation
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
    case 5:
      return(
        <Success/>
      )
    }
  }
}

export default SignUp
