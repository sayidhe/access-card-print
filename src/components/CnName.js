import React from 'react'
import {CnNameStyled} from '../styled/StyledCard'

const CnName = (props) => {
  return (
    <CnNameStyled>
      <p className="cn_name">{props.cn_name}</p>
    </CnNameStyled>
  )
}

export default CnName
