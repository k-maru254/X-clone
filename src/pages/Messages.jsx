import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CenterItemContainer from '../components/CenterItemContainer';
import CenterItemsContainer from '../components/CenterItemsContainer';

function Messages() {
  return (
    <Container fluid>
      <Row>
        <Col xs="5" className="vh-100 border-start border-end border-1 border-secondary p-0">
          <CenterItemsContainer border={false}  >
            <CenterItemContainer header >
              <Col>
              <p className="fw-bold fs-4">Messages</p>
              </Col>
            </CenterItemContainer>
          </CenterItemsContainer>
        </Col>
        <Col className="vh-100 p-0">
          Message threads
        </Col>
      </Row>
    </Container>
  )
}

export default Messages
