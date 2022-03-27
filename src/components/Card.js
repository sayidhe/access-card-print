import img_location from '../assets/default.gif'
import { CardStyled, CardWrap, MainContentWrapperStyled, NameWrapperStyled } from '../styled/StyledCard'
import { ImageWrapperStyled, ImageLayer } from '../styled/ImageStyled'
import { CoverHeadingStyled } from '../styled/Headings'
import { LogoStyled } from '../styled/Logos'
import EnName from './EnName'
import CnName from './CnName'
import { Button } from '../styled/UserInputSection'
//import Tilt from 'react-tilt'
import LogoSymbol from '../assets/logo-symbol.svg'


const Card = (props) => {
  var src = {
    img_src: props.image_src
  };
  if (document.querySelector("#image") === null || document.querySelector("#image").files.length === 0) {
    src.img_src = img_location
  }

  // card JSX element
  const cardWithStylesJSX = (
    <CardStyled className="card" id="card" colors={props.colors}>
      <LogoStyled>
        <img src={LogoSymbol} alt="Wiredcraft Logo" />
      </LogoStyled>
      <ImageWrapperStyled>
        <ImageLayer image_src={src.img_src} />
      </ImageWrapperStyled>
      <MainContentWrapperStyled>
        <NameWrapperStyled>
          {props.cn_name ? console.log("有中文名"):console.log("没有中文名")}
          <EnName en_name={props.en_name}></EnName>
          <CnName cn_name={props.cn_name} className="cn-name"></CnName>
        </NameWrapperStyled>
      </MainContentWrapperStyled>
    </CardStyled>
  )

  return (
    <>
      <CardWrap id="cardwrap">
        <CoverHeadingStyled>Cover preview</CoverHeadingStyled>
        {cardWithStylesJSX}
        {/* props.breakpoint <= 43 ? cardWithStylesJSX : <Tilt className="Tilt" options={{ max: 20, scale: 1.01, perspective: 1100, speed: 500, reverse: false, transition: true }}>{cardWithStylesJSX}</Tilt> */}
        <Button className="for-mobile download_btn" disabled={props.downloadable ? false : true} title={props.downloadable ? "" : "Please fill out all fields"} onClick={() => { props.download_fun() }}><div className="content">Download<i className={props.download_state ? "fas fa-circle-notch load" : "fas fa-download"}></i>{!props.downloadable && <div className="warn">Please fill out all the fields</div>}</div></Button>
      </CardWrap>
    </>
  )
}

Card.defaultProps = {
  en_name: "Sami",
  cn_name: "一只喵",
  image_src: img_location,
  colors: {
    cardBackgroundColor: "#FFFFFF",
    nameColor: "#000000"
  }
}

export default Card
