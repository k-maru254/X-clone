import React from 'react'
import CenterItemContainer from './CenterItemContainer';
import { Row, Col } from "react-bootstrap";
import Avatar from "./Avatar";
import User from "./User";
import ItemContainer from './ItemContainer';

function Notification() {
    const notificationType = "followed you"
    return (
        <CenterItemContainer as={ItemContainer} className="py-2 itemContainer__item">
                <Row>
                    <Col xs="1">
                        <Avatar size="24" color="white" className="bg-transparent" />
                    </Col>
                    <Col>
                        <Avatar size="24" src="profile.jpg" />
                    </Col>
                </Row>
                {/* Create a row to display the username and the type of the notification */ }
                <Row>
                    <Col xs={ { offset: 1, cols: "auto" } } className="pt-1 pb-2 d-flex align-items-center">
                        <User name="Kimaru" verified />
                        <span className="ps-1">{ notificationType }</span>
                    </Col>
                </Row>
            
                {/* Create a row to display the content in case it is a reply */ }
                <Row>
                    <Col xs={ { offset: 1 } }>
                        <p className="pt-0 mb-2 fs-6 text-secondary" style={ { lineHeight: "18px" } } >Proident ad mollit magna ullamco. Aliquip aute et sunt sunt pariatur duis eiusmod exercitation. Eiusmod officia nostrud reprehenderit qui quis pariatur.</p>
                    </Col>
                
                </Row>
            
            {/* Create a row to display the icon of and the avatar of the user */ }
            
            
        </CenterItemContainer>
    );
}

export default Notification;
