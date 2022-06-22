import {CnNameStyled} from '../styled/StyledCard'

const CnName = (props) => {
  return (
    <CnNameStyled>
      <p className={"cn_name" + ((props.cn_name === props.cn_default_name)?' hidden' : ' show')}>{props.cn_name}</p>
    </CnNameStyled>
  )
}

export default CnName
