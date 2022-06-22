import BackCard from "./components/BackCard"
import { UserInputWrap, Button, ThemesWrap, SelectTheme } from './styled/UserInputSection'
import { HeadingStyled } from './styled/Headings'
import { useEffect, useState } from 'react'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'

const BackCover = () => {

  const [downloadState, setDownloadState] = useState(false);
  const [downloadable, setDownloadable] = useState(true);

  const [breakpoint, setBreakpoint] = useState(Math.round(window.document.body.clientWidth / 16));

  const [colors, setColors] = useState({
    cardBackgroundColor: "#FFFFFF",
    nameColor: "#000",
    logoColor: "#000"
  });

  window.addEventListener('resize', () => {
    setBreakpoint(Math.round((window.document.body.clientWidth) / 16));
  })

  function download_image() {
    setDownloadState(true);
    setDownloadable(true);
    const node = document.querySelector("#back-card");
    htmlToImage.toPng(node, {
      quality: 1.0,
    }).then((dataUrl) => {
      download(dataUrl, 'access_card_image_back')

      setDownloadState(true);

      setTimeout(() => {
        setDownloadState(false);
      }, 1000)

    })
  }

  function colorChange(e) {
    function borderChange(element) {
      element.style.borderColor = "#EB4847"; //#ffb681
      let all_color_selectors = element.parentElement.childNodes;
      all_color_selectors.forEach((item) => {
        if (item.localName !== "p") {
          if (item !== element) {
            item.style.borderColor = "transparent";
          }
        }
      })
    }
    if (e.target.style.backgroundColor === "black") {
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#000000",
        nameColor: "#FFFFFF",
        logoColor: "#FFFFFF"
      })
    } else if (e.target.style.backgroundColor === "white") {
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#FFFFFF",
        nameColor: "#000000",
        logoColor: "#000000"
      })
    }
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <div id="back-cover" className="cover">
        <UserInputWrap>
          <HeadingStyled className="main-heading">Set the Backcover</HeadingStyled>
          <ThemesWrap>
            <p>Theme </p>
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: 'black' }} />
            <SelectTheme onClick={(e) => { colorChange(e)}} style={{ backgroundColor: 'white'}} />
          </ThemesWrap>
          <Button className="for-desktop download_btn" disabled={downloadable ? false : true} title={downloadable ? "" : "Please fill out all fields"} onClick={() => { download_image() }}>Download<i className={downloadState ? "fas fa-circle-notch load" : "fas fa-download"}></i></Button>
        </UserInputWrap>
        <BackCard download_fun={download_image} download_state={downloadState} downloadable={downloadable} breakpoint={breakpoint} colors={colors} />
      </div>
    </>
  );
}

export default BackCover;