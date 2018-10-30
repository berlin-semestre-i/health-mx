import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

export const CustomContainer = styled.div`
  &&& {
    margin: 0;
    padding-left: 84px;
    width: 100%;
    background-color: #f4f6f8;
    height: 100vh;
  }
`

export const MainContainer = styled(Container)`
  &&& {
    margin: 0;
    width: 100%;
    padding: 3rem 3rem 0;
  }
`