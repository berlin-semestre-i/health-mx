import React from 'react'

export default ({ error }) => {
  const errorMessage = typeof error === 'string' ? error : 'An error occurred'

  return <div name="errorMessage">{errorMessage}</div>
}