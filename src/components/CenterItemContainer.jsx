import React from 'react'
import {Row} from "react-bootstrap"

function CenterItemContainer({children, header=false, className}) {
  return (
    <Row className={`border-bottom border-secondary border-1 ${header?"position-sticky sticky-top bg-black ": ""} ${className}`}>
    {/* Container adding border to each item in the center console of the website */}
      {children}
    </Row>
  )
}

export default CenterItemContainer
