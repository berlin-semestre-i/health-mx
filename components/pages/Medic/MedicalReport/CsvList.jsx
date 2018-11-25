import React from 'react'

const List = ({array}) => (
  array.length > 0?
    <React.Fragment>
      {array.map((item, index) => (
        <span key={index}>
          {item}{index < array.length-1 && ', '}
        </span>
      ))}
    </React.Fragment> :
    ('Ninguno')
)

export default List