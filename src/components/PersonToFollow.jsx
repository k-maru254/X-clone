import React from 'react';
import { Button, Row, Col } from "react-bootstrap";
import { CiUser } from "react-icons/ci";

function PersonToFollow() {
    return (
        <div>
            <Row>
                {/* Display photo */ }
                <Col>
                    <div>
                        <CiUser />
                    </div>
                </Col>

                {/* Username and handle */ }
                <Col>
                    <p>Denis Kimaru</p>
                    <p>@k_maru254</p>
                </Col>
                {/* Follow Button */ }
                <Col>
                    <Button>Follow</Button>
                </Col>
            </Row>
      
        </div>
    );
}

export default PersonToFollow;
