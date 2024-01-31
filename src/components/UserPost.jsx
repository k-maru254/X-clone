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
import Avatar from "./Avatar";
import withHoverIcon from "./withHoverIcon";
import twitterColors from "./twitterColors";

function UserPost() {
  const icons = [CiImageOn, MdOutlineGifBox, MdOutlinePoll, FaRegSmile, AiOutlineSchedule, IoLocationOutline];
  const [lineStyleOn, setLineStyleOn] = useState(false);
  
  const ShowIcon = withHoverIcon(Avatar);

  const handlePostBlur = e => {
    return setLineStyleOn(true);
  }
  return (
    <>
      {/* The submit button */ }
        {/* Two rows, one containing the profile image and text input and another with adding data inputs and the submit button */ }  
      <Row className="">  
        
      {/* The user display image */ }    
        <Col xs="1" className="p-1 mt-2">
          <div className=" m-2" style={ { width: "40px", height: "40px" } }>
            <Avatar size={ 30 } color="white" />
          </div>
        </Col>

      {/* The user input field and the add data region */ }
        <Col className=" mt-3">
          <Form autoComplete="off" onSubmit={ (e) => { e.preventDefault() } }>
            
            {/* Row containing the user input and who to see the post. Who to see the post is only triggerd when the user 
            starts to add values to the input field.
          */}
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

            {/* Row containing the icons to add user data such as videos and images and the submit button */}
            <Row className="justify-content-between align-items-center">
              <Col className="d-flex my-2 ps-3">
                
                {/* Icons to add other data to the input field */}
                {
                  icons.map((icon, ind) => {
                    const iconComponent = createElement(icon, { size: "20", color: "#1DA1F2" })
                    return (<>
                      <ShowIcon icon={icon} hoverColor={"blue"} color={twitterColors.blue} size={20} className="p-1" />                      
                    </>
                    );
                  })
                }
               {/* Button to submit the user input */} 
              </Col>
              <Col xs="3" className="d-flex justify-content-end">
                <Button variant="twitter-blue" type="submit" className="rounded-pill px-3 py-1 fw-semibold text-white">Post</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default UserPost
