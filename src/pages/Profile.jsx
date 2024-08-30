import React from 'react';
import CenterItemContainer from '../components/CenterItemContainer';
import CenterItemsContainer from '../components/CenterItemsContainer';
import User from '../components/User';
import { Col, Image } from "react-bootstrap";
import UserProfile from '../components/UserProfile';
import Posts from '../components/Posts';

function Profile() {
  const userName = "Kimaru";
  const allPosts = 234;
  return (
    <>
      <CenterItemsContainer>
        
        {/* Headern showing the Name of the user and the number of the posts that he or she has made */ }
        <CenterItemContainer header settings={ false } className="pt-1 pb-3" >
          <Col>
            <User name={ userName } />
            <div> { allPosts } Posts</div>
          </Col>
        </CenterItemContainer>
      
        {/* Cover photo */ }
        <CenterItemContainer className="p-0 border-bottom-0">
          <Image src="cover.jpg" alt="Cover photo " fluid style={ { height: "200px", objectFit: "cover" } } />
        </CenterItemContainer>

        {/* Profile */ }
        <CenterItemContainer>
          <UserProfile centered={ false } />
        </CenterItemContainer>
        {/* Tabs for Posts, replies, highlights, media, and likes */ }
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </CenterItemsContainer>
    </>
  );
}

export default Profile;
