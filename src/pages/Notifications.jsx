import React from 'react';
import CenterItemsContainer from "../components/CenterItemsContainer";
import CenterItemContainer from "../components/CenterItemContainer";
import { Col } from "react-bootstrap";
import Notification from '../components/Notification';
import Settings from "../components/Settings";

function Notifications() {
  return (
    <CenterItemsContainer>
      <CenterItemContainer className="d-flex">
        <Col>
          <p className="fs-4 fw-bold pt-3">Notifications</p>
        </Col>
      </CenterItemContainer>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </CenterItemsContainer>
  );
}

export default Notifications;
