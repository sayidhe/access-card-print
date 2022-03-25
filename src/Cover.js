import Card from "./components/Card"
import { UserInputWrap, Label, Input, Button } from './styled/UserInputSection'
import { HeadingStyled } from './styled/Headings'
import { useEffect, useState } from 'react'
import img_location from './assets/default.gif'
import * as htmlToImage from 'html-to-image'
//import { saveAsPng, saveAsJpeg } from 'save-html-as-image'
import download from 'downloadjs'


const Cover = () => {

  const [image, setImage] = useState(img_location);
  const [isImageModified, setIsImageModified] = useState({
    status: false,
    fileType: "",
    target: {}
  });

  const [downloadState, setDownloadState] = useState(false);
  const [downloadable, setDownloadable] = useState(false);

  const [inputs, setInputs] = useState({
    en_name: undefined,
    cn_name: undefined
  })

  const [breakpoint, setBreakpoint] = useState(Math.round(window.document.body.clientWidth / 16));

  function inputChange(e) {
    setInputs(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function input_check() {
    let filled = {
      inputs: false,
      textarea: false,
      image: false
    }

    let all_input_fields = document.querySelectorAll("input[required]");
    let textareas = document.querySelectorAll("textarea");

    for (let index = 0; index < all_input_fields.length; index++) {
      if (index === 0) {
        if (all_input_fields[index].files.length !== 0) {
          filled.image = true;
        }
      } else {
        if (all_input_fields[index].value === undefined || all_input_fields[index].value === "") {
          filled.inputs = false;
          break;
        } else if (all_input_fields[index].value !== undefined || all_input_fields[index].value !== "") {
          filled.inputs = true;
        }
      }
    }

    for (let index = 0; index < textareas.length; index++) {
      if (textareas[index].value === "") {
        filled.textarea = false;
        break;
      } else if (textareas[index].value !== "") {
        filled.textarea = true;
      }
    }

    (filled.image && filled.inputs) ? setDownloadable(true) : setDownloadable(false);
  }

  function props_conf(field) {
    return inputs[field] === '' ? undefined : inputs[field];
  }

  window.addEventListener('resize', () => {
    setBreakpoint(Math.round((window.document.body.clientWidth) / 16));
  })

  function download_image() {
    setDownloadState(true);
    const node = document.querySelector("#card");
    htmlToImage.toPng(node, {
      quality: 1.0,
    }).then((dataUrl) => {
      download(dataUrl, 'access_card_image')

      setDownloadState(true);

      setTimeout(() => {
        setDownloadState(false);
      }, 1000)

    })
  }

  useEffect(() => {
    if(isImageModified.status) {
      if(isImageModified.fileType === "image") {
        if (document.querySelector("#image") !== null) {
          if (document.querySelector("#image").files.length === 1) {
            setImage(URL.createObjectURL(new Blob([isImageModified.target.files[0]], { type: "image" })));
            document.querySelector("#upload_label").innerHTML = "Uploaded Successfully!";
            document.querySelector("#upload_label").classList.remove("focus");
            setTimeout(() => {
              document.querySelector("#upload_label").innerHTML = "Upload new pic";
            }, 2500)
          }
        }
      } else {
        document.querySelector("#upload_label").innerHTML = "Please upload an image file";
        document.querySelector("#upload_label").classList.add("focus");
        document.querySelector(".main-heading").scrollIntoView(true, {vehavior: "smooth"})
      }
    }
  }, [isImageModified])

  return (
    <>
      <div id="cover" className="cover">
        <UserInputWrap>
          <HeadingStyled className="main-heading">Set the cover</HeadingStyled>
          <Label htmlFor="image" id="upload_label">😊 Upload new avatar</Label>
          <Input type="file" id="image" accept="image/*" placeholder="Upload an image" required onChange={(e) => { setIsImageModified({status: true, fileType: e.target.files[0].type.split("/")[0], target: e.target}); input_check(); }} />
          <Input type="text" id="en_name" name="en_name" placeholder="Your English name?" required autoComplete="off" value={inputs.en_name || ""} onChange={(e) => {inputChange(e); input_check();}} />
          <Input type="text" id="cn_name" name="cn_name" placeholder="Your Chinese name?" autoComplete="off" value={inputs.cn_name || ""} onChange={(e) => {inputChange(e); input_check();}} />
          <Button className="for-desktop download_btn" disabled={downloadable ? false : true} title={downloadable ? "" : "Please fill out all fields"} onClick={() => { download_image() }}>Download<i className={downloadState ? "fas fa-circle-notch load" : "fas fa-download"}></i></Button>
        </UserInputWrap>
        <Card image_src={image} en_name={props_conf('en_name')} cn_name={props_conf('cn_name')} download_fun={download_image} download_state={downloadState} downloadable={downloadable} breakpoint={breakpoint} />
      </div>
    </>
  );
}

export default Cover;
