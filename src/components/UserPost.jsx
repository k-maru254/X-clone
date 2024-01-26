import { Row, Col, Button, Form , Container} from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { createElement, useState } from "react";
import { BiWorld } from "react-icons/bi";

function UserPost() {
  const icons = [CiImageOn, MdOutlineGifBox, MdOutlinePoll, FaRegSmile, AiOutlineSchedule, IoLocationOutline];
  const [lineStyleOn, setLineStyleOn] = useState(false);
  const handlePostBlur = e => {
    return setLineStyleOn(true);
  }
  return (
    <>
      {/* Two rows, one containing the profile image and text input and another with adding data inputs and the submit button */ }
      {/* The user display image */ }
      {/* The user input field and the add data region */ }
      {/* Create the add data icons */ }
      {/* The submit button */ }
      <Row className="">
        <Col xs="1" className="p-1 mt-2">
          <div className="d-flex justify-content-center align-items-center bg-secondary rounded-circle m-2" style={ { width: "40px", height: "40px" } }>
            <CiUser size={ 24 } color="white" />
          </div>
        </Col>
        <Col className=" mt-3">
          <Form autoComplete="off" onSubmit={(e)=>{e.preventDefault()}}>
            <Row>
              <Col className= {`${lineStyleOn?`border-bottom border-secondary`:""} ms-0 d-flex flex-column pd-2`}>
                <Form.Control type="text" placeholder="What is happening?!" name="userPost" id="user-post-input" className="text-wrap bg-black px-0 border border-0 mb-2 fs-5 ms-3" style={ { height: "40px" } } onMouseDown={ handlePostBlur } />
                {
                  lineStyleOn && (<div className="d-flex pb-3">
                  <div id="who-can-reply-text" style={ { flexBasis: "auto" } } className="d-flex align-items-center px-3 rounded-pill">
                    <BiWorld size="16" color="#1DA1F2" />
                    <span className="ps-2 sw-semibold" style={ { color: "#1DA1F2", fontSize: "14px" } }>Everyone can reply</span>
                  </div>
                </div>)
                }
              </Col>
            </Row>
            <Row className="justify-content-between align-items-center">
              <Col className="d-flex my-2 ps-3">
                {
                  icons.map((icon, ind) => {
                    const iconComponent = createElement(icon, {size:"20", color:"#1DA1F2" })
                    return (
                      <div key={ind} className="d-flex justify-content-center align-items-center rounded-circle post-input-icon" style={ { width: "40px", height: "40px" } }>
                        {iconComponent}
                      </div>
                    )
                  })
                }
                
              </Col>
              <Col xs="3" className="d-flex justify-content-end">
                <Button variant="info" type="submit" className="rounded-pill px-3 py-1 fw-semibold text-white">Post</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default UserPost
