import React from 'react'
import {EnNameStyled} from '../styled/StyledCard'

const EnName = (props) => {
  return (
    <EnNameStyled>
      <p className="en_name">{props.en_name}</p>
    </EnNameStyled>
  )
}

export default EnName
