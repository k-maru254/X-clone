import React from 'react'
import {Row, Col} from "react-bootstrap"
import Settings from './Settings'

function CenterItemContainer({children, header=false, className}) {
  return (
    <Row className={`border-bottom border-secondary border-1 ${header?"position-sticky sticky-top bg-black ": ""} ${className}`}>
    {/* Container adding border to each item in the center console of the website */}
      { children }
      <Col className="d-flex col-1 justify-content-end align-items-center">
        <Settings />
      </Col>
    </Row>
  )
}

export default CenterItemContainer
