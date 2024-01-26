import React from 'react';
import { Row } from "react-bootstrap";

function Timeline({data}) {
  return (
    <Row className="border-bottom border-secondary border-1">
      {data}
    </Row>
  );
}

export default Timeline;
