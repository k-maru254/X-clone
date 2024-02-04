import React from 'react';
import { Row, Col } from "react-bootstrap";

function ChatItem({isSent}) {
    return (
    
        <>
            {/*  */ }
            {/* Single chat */ }
            <Row xs="auto" className={ `flex-column align-items-${isSent?"end":"start"} px-4 mb-3 ` }>
                {/* Message */ }
                <Col className={`d-flex justify-content-${isSent?"end":"start"}`}>
                    <p style={ { maxWidth: "75%", lineHeight: "18px", borderRadius: `${isSent?"25px 25px 3px 25px":"25px 25px 25px 3px"}` } } className={`m-0 d-inline-flex bg-${isSent?"twitter-blue":"secondary"} px-3 py-3`}>
                        This is my message and It is very long should have only tweinasdas Enim labore ad eu elit esse adipisicing minim cillum. Duis deserunt dolor ea eiusmod est. Deserunt nostrud dolore aliqua anim. Cupidatat do sit nostrud tempor veniam non cillum. Non proident mollit eu nostrud non. Culpa sint adipisicing labore non incididunt dolore do.
                    </p>
            
                </Col>
                <Col className="">
                    <p className="m-0 text-secondary" style={ { fontSize: "12px" } }>12 Jun, 2023, 12:39 PM</p>
                </Col>
                {/* Timestamp */ }
            </Row>
        </>
    );
}

export default ChatItem;
