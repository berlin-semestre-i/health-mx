import React, { PureComponent } from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'

const Searchbar = styled(Input)`
  &&& {
    width: 100%;
  }

  &&&>input {
    border-radius: 0;
    height: 70px;
    border: none;
    box-shadow: 0 4px 10px -1px #e3e5e8;
    -webkit-box-shadow: 0 4px 10px -1px #e3e5e8;
  }
`

class SearchBar extends PureComponent {
  render() {
    const { placeholder } = this.props
    return(
      <Searchbar placeholder={placeholder}/>
    )
  }
}

export default SearchBar