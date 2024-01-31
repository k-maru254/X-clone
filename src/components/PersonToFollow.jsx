import React from 'react';
import { Button, Row, Col } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import Avatar from './Avatar';
import ItemContainer from './ItemContainer';
import User from './User';

function PersonToFollow() {
    return (
        <ItemContainer className="px-3 py-2">
            <Row className="justify-content-betweem">
                {/* Display photo */ }
                <Col xs="2">
                    <div>
                        <Avatar color="white" size={24} />
                    </div>
                </Col>

                {/* Username and handle */ }
                <Col className="px-0 d-flex justify-content-center">
                    <User direction="vertical" name="Kimaru" userName={"k_maru254"} />
                </Col>
                {/* Follow Button */ }
                <Col className="px-2 d-flex justify-content-end align-items-center">
                    <Button variant="twitter-blue" className="fw-bold rounded-pill text-white">Follow</Button>
                </Col>
            </Row>
      
        </ItemContainer>
    );
}

export default PersonToFollow;
