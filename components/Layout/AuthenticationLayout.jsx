import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import media from 'styled-media-query'

const AuthenticationLayout = ({ children }) => (
  <AuthenticationGrid>
    <ImageColumn className="image-container" width={9}/>
    <FormColumn mobile={16} tablet={7} computer={7}>
      <FormContainer>
        { children }
      </FormContainer>
    </FormColumn>
  </AuthenticationGrid>
)

export default AuthenticationLayout

const AuthenticationGrid = styled(Grid)`
  && {
    height: 100vh;
    margin: 0;
    margin-left: -84px;
  }
`
const ImageColumn = styled(Grid.Column)`
  ${media.greaterThan('large')`
    &&&.image-container {
      padding: 0;
      background-image: url("../../static/images/enfermera.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  `}

  ${media.lessThan('large')`
    &&&.image-container {
      display: none;
    }
  `}
`

const FormColumn = styled(Grid.Column)`
  & {
    margin: auto;
  }
`

const FormContainer = styled(Container)`
  ${media.lessThan('large')`
    & {
      padding: 0 1rem;
    }
  `}

  ${media.greaterThan('large')`
    & {
      padding: 0 4.5rem;
    }
  `}

  &&& .field, &&& .button {
    margin-bottom: 2em;
  }

  &&& .field label {
    font-size: 16px;
    font-weight: normal;
  }

  &&& .field label:after {
    display: none;
  }

  &&& img {
    max-width: 65%;
    margin-bottom: 3rem;
  }
`