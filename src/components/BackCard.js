import img_location from '../assets/default.gif'
import { CardStyled, CardWrap, Center } from '../styled/StyledCard'
import { CoverHeadingStyled } from '../styled/Headings'
import { LogoWordmarkStyled } from '../styled/Logos'
import { Button } from '../styled/UserInputSection'
import LogoWordmark from '../assets/logo-wordmark.svg'


const BackCard = (props) => {
  var src = {
    img_src: props.image_src
  };
  if (document.querySelector("#image") === null || document.querySelector("#image").files.length === 0) {
    src.img_src = img_location
  }

  // card JSX element
  const cardWithStylesJSX = (
    <CardStyled className="card" id="back-card">
      <Center>
        <LogoWordmarkStyled>
          <img src={LogoWordmark} alt="Logo WOrdmark" />
        </LogoWordmarkStyled>
      </Center>
    </CardStyled>
  )

  return (
    <>
      <CardWrap id="cardwrap">
        <CoverHeadingStyled>Cover preview</CoverHeadingStyled>
        {cardWithStylesJSX}
        <Button className="for-mobile download_btn" disabled={props.downloadable ? false : true} title={props.downloadable ? "" : "Please fill out all fields"} onClick={() => { props.download_fun() }}><div className="content">Download<i className={props.download_state ? "fas fa-circle-notch load" : "fas fa-download"}></i>{!props.downloadable && <div className="warn">Please fill out all the fields</div>}</div></Button>
      </CardWrap>
    </>
  )
}

export default BackCard
