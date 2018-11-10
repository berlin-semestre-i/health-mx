import React from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'

const SearchBar = ({ placeholder }) => (
  <Searchbar icon="search" iconPosition="left" placeholder={placeholder}/>
)

export default SearchBar

const Searchbar = styled(Input)`
  &&& {
    width: 100%;
  }

  &&&>input {
    font-size: 18px;
    font-weight: 300;
    border-radius: 0;
    height: 70px;
    border: none;
    box-shadow: 0 4px 10px -1px #e3e5e8;
    -webkit-box-shadow: 0 4px 10px -1px #e3e5e8;
  }
`
