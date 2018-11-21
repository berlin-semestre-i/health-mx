import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

const Avatar = ({ src }) => (
  <RoundImage src={ src } />
)

export default Avatar

const RoundImage = styled(Image)`
  && {
    border-radius: 30px;
    max-width: 60px;
    width: 60px;
    max-height: 60px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    border: 3px solid #FFF;
  }
`