import React from 'react';
import { Stack, Col, Row } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import Avatar from './Avatar';
import ItemContainer from './ItemContainer';
import User from './User';

function LiveUser() {
    const images = ["primary", "secondary", "info"]
    return (
        <ItemContainer className="pt-1">
            <div className="px-3">
                <Stack direction="horizontal" className="mb-1">
                    {/* The display photo showing an avatar using an icon*/ }
                    <Avatar size={ 8 } className="me-1" />
                    {/* User hosting the space */ }
                    <User size="small" name="Kimaru" verified className="fw-bold" />
                    {/* Is hosting */ }
                    <div className="mx-1 text-secondary">
                        is hosting
                    </div>
                </Stack>
                <Stack>
                    <Row>
                        {/* Topic */ }
                        <Col xs="7">
                            <div className="fs-6 fw-semibold pb-2" style={ { lineHeight: "20px" } }>
                                Throw him back Thursdays #ThrowHerBack
                            </div>
                        </Col>
                        {/* Followers in the space */ }
                        <Col xs="5" className="d-flex align-items-center">
                            {/* Three profile images of your followers in the space */ }
                            <div className="bg-black border-3 border-warning border d-flex align-items-center rounded-pill" style={ { width: "110px" } }>
                                <div className="position-relative ps-4  rounded-pill" style={ { width: "60px", height: "30px" } }>
                                    {
                                        images.map((image, ind) => {
                                            return (
                                                <div key={ ind } className={ `position-absolute bg-${ image } rounded-circle d-flex justify-content-center align-items-center` } style={ { left: `${ ind * 15 }px`, top: "0px", zIndex: `${ 100 - ind }`, width: "30px", height: "30px" } }>
                                                    <FaRegUser size={ 20 } />
                                                </div>
                                            );
                                        })
                                    }
            
                                </div>
                                {/* The extra number of people in the space */ }
                                <div className="fw-semibold text-white ps-2" style={ { fontSize: "12px" } }>+123</div>
                            </div>
                        </Col>
        
                    </Row>
                </Stack>
            </div>
        </ItemContainer>
       
    );
}

export default LiveUser;
