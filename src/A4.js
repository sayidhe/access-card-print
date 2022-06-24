import React from 'react';
import { A4PageStyled } from "./styled/A4Styled";
import Card from "./components/Card"
import { UserInputWrap, Label, Input, Button, ThemesWrap, SelectTheme, ButtonWrap } from './styled/UserInputSection'
import { HeadingStyled } from './styled/Headings'
import { useEffect, useState } from 'react'
import img_location from './assets/default.gif'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'
import BackCard from "./components/BackCard"
import Tilt from 'react-parallax-tilt';

const A4 = () => {

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
    // document.getElementById("a4-paper").style.borderRadius = "0";
    const node = document.querySelector("#a4-paper");
    node.style.borderRadius = "unset";
    node.style.boxShadow = "unset";
    htmlToImage.toPng(node, {
      quality: 1.0,
    }).then((dataUrl) => {
      download(dataUrl, 'access_card_image')
      setDownloadState(true);
      node.style.borderRadius = "1cm";
      node.style.boxShadow = "0 0 0.5cm rgba(0,0,0,0.2)";

      setTimeout(() => {
        setDownloadState(false);
      }, 1000)

    })
  }

  function removeStyles(el) {
    el.removeAttribute('style');

    if (el.childNodes.length > 0) {
      for (let child in el.childNodes) {
        /* filter element nodes only */
        if (el.childNodes[child].nodeType === 1)
          removeStyles(el.childNodes[child]);
      }
    }
  }

  function print_image() {
    setDownloadState(true);
    removeStyles(document.getElementById('a4-view'));
    window.print();
    setTimeout(() => {
      setDownloadState(false);
    }, 1000)
  }

  const [colors, setColors] = useState({
    cardBackgroundColor: "#FFFFFF",
    nameColor: "#000",
    logoColor: "#000"
  });

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
      <div id="user-input" className="user-input">
        <UserInputWrap>
          <HeadingStyled className="main-heading">Set the cover</HeadingStyled>
          <Label htmlFor="image" id="upload_label">😊 Upload new avatar</Label>
          <Input type="file" id="image" accept="image/*" placeholder="Upload an image" required onChange={(e) => { setIsImageModified({status: true, fileType: e.target.files[0].type.split("/")[0], target: e.target}); input_check(); }} />
          <Input type="text" id="en_name" name="en_name" placeholder="Your English name?" required autoComplete="off" value={inputs.en_name || ""} onChange={(e) => {inputChange(e); input_check();}} />
          <Input type="text" id="cn_name" name="cn_name" placeholder="Your Chinese name?" autoComplete="off" value={inputs.cn_name || ""} onChange={(e) => {inputChange(e); input_check();}} />
        </UserInputWrap>
        <UserInputWrap>
          <HeadingStyled className="main-heading">Set the Backcover</HeadingStyled>
          <ThemesWrap>
            <p>Theme </p>
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: 'black' }} />
            <SelectTheme onClick={(e) => { colorChange(e)}} style={{ backgroundColor: 'white'}} />
          </ThemesWrap>
          <ButtonWrap>
            <Button className="download_btn" disabled={downloadable ? false : true} title={downloadable ? "" : "Please fill out all fields"} onClick={() => { download_image() }}><div className="content">Download<i className={downloadState ? "fas fa-circle-notch load" : "fas fa-download"}></i>{!downloadable && <div className="warn">Please fill out all the fields</div>}</div></Button>
            <Button className="for-desktop download_btn" disabled={downloadable ? false : true} title={downloadable ? "" : "Please fill out all fields"} onClick={() => { print_image() }}><div className="content">Print<i className={downloadState ? "fas fa-circle-notch load" : "fas fa-download"}></i>{!downloadable && <div className="warn">Please fill out all the fields</div>}</div></Button>
          </ButtonWrap>
        </UserInputWrap>
      </div>
      <div id="a4-view" className="a4-view">
        <Tilt
          id="tilt"
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          perspective={1200}
        >
          <A4PageStyled id="a4-paper" unselectable="on" className="unselectable">
            <Card image_src={image} en_name={props_conf('en_name')} cn_name={props_conf('cn_name')} download_fun={download_image} download_state={downloadState} downloadable={downloadable} breakpoint={breakpoint} />
            <BackCard download_fun={download_image} download_state={downloadState} downloadable={downloadable} breakpoint={breakpoint} colors={colors} />
          </A4PageStyled>
        </Tilt>
      </div>
    </>
  );

};

export default A4;