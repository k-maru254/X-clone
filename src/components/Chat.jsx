import React from 'react';
import CenterItemContainer from './CenterItemContainer';
import User from './User';
import UserProfile from './UserProfile';
import { Form, InputGroup, Button } from "react-bootstrap";
import ChatItem from './ChatItem';
import withHoverIcon from './withHoverIcon';
import Avatar from './Avatar';
import { MdImage } from "react-icons/md";
import twitterColors from './twitterColors';
import { RiSendPlane2Line } from "react-icons/ri";

function Chat() {
  const MessagingIcon = withHoverIcon(Avatar);
  return (
    <>
      {/* Profile container */ }
      <CenterItemContainer header settings={ false } className="opacity-75 ps-4 py-3 border-bottom-0">
        <User name="Ligaya" className="fs-5" />
      </CenterItemContainer>
      <div className="w-100  px-3">
        {/* Name */ }
        {/* Profile of the other person you are chatting with */ }
        <CenterItemContainer className="m-3" >
          <div className="d-flex align-items-center justify-content-center" style={ { height: "300px" } }>
            <UserProfile />
          </div>
        </CenterItemContainer>
      </div>
      
      {/* Chats container */ }
      <div>
        <ChatItem isSent={ true } />
        <ChatItem isSent={ false } />
        <ChatItem isSent={ true } />
      </div>
      <div xs-auto className="pb-1 position-sticky sticky-bottom border-top border-1 pt-2 bg-black">
        <Form className=" col-11 mx-auto">
          <InputGroup id="search" className="bg-twitter-gray p-1 rounded-4 d-flex align-items-center">
            <MessagingIcon icon={ MdImage } color={ twitterColors.blue } hoverColor="blue" size="18" className="mx-2" />
            <Form.Control id="search" type="text" name="message" className="bg-twitter-gray text-white" placeholder="Start a new message" />
            <Button variant="transparent border-0">
              <Avatar icon={ RiSendPlane2Line } color={ twitterColors.blue } size="18" className="mx-2 bg-transparent" />
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
}

export default Chat;
