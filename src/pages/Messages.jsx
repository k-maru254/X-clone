import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ThreadContent from '../components/ThreadContent';
import MessageThreads from '../components/MessageThreads';

function Messages() {
  return (
    <Container fluid>
      <Row>
        <Col xs="5" className="vh-100 overflow-auto border-start border-end border-1 border-secondary p-0">
          <MessageThreads />
        </Col>
        <Col className="vh-100 p-0 m-0 overflow-auto" style={{overFlowY: "auto"}}>
          <ThreadContent />
        </Col>
      </Row>
    </Container>
  )
}

export default Messages
