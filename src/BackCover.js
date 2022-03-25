import BackCard from "./components/BackCard"
import { UserInputWrap, Button } from './styled/UserInputSection'
import { HeadingStyled } from './styled/Headings'
import { useEffect, useState } from 'react'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'


const BackCover = () => {

  const [downloadState, setDownloadState] = useState(true);
  const [downloadable, setDownloadable] = useState(true);

  const [breakpoint, setBreakpoint] = useState(Math.round(window.document.body.clientWidth / 16));

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

  useEffect(() => {
  }, [])

  return (
    <>
      <div id="back-cover" className="cover">
        <UserInputWrap>
          <HeadingStyled className="main-heading">Set the Backcover</HeadingStyled>
          <Button className="for-desktop download_btn" onClick={() => { download_image() }}>Download</Button>
        </UserInputWrap>
        <BackCard download_fun={download_image} download_state={downloadState} downloadable={downloadable} breakpoint={breakpoint} />
      </div>
    </>
  );
}

export default BackCover;
