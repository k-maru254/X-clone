import React, { useState } from 'react';
import CenterItemContainer from './CenterItemContainer';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from './Avatar';
import User from './User';
import MoreIcon from './MoreIcon';

function MessageThreadItem() {
    const [showMore, setShowMore] = useState(false)
    return (
        <CenterItemContainer onMouseEnter={ (_) => setShowMore(true) } onMouseLeave={ (_) => setShowMore(false) } className="border-bottom-0 py-2 itemContainer__item" >
            <Col>
                <Row className="align-items-center">
                    {/* Column containing avatar */ }
                    <Col xs="2" className="">
                        <Avatar color="white" size="24" />
                    </Col>
                    {/* Column containing name, username, timestamp, and some part of the last text */ }
                    <Col className="p-0">
                        <div className=" d-flex" style={{height: "24px"}}>
                            <User name="Kimaru" userName={ "@kim254kenya" } className="w-50 overflow-hidden" />
                            <span className="text-secondary ps-1"> . Dec 6, 2023</span>
                            { showMore && <MoreIcon className="ms-2" /> }
                        </div>
                        <div className="">
                            <p className="overflow-hidden text-secondary pb-1 fs-6 m-0" style={ { height: "24px" } }>Lorem non aliqua veniam est ipsum do minim quis aliqua ex sint ut voluptate nostrud. Culpa ut magna do amet elit esse ea deserunt amet duis nisi. Nulla laborum et sit culpa ipsum proident eiusmod minim consectetur anim pariatur qui. Nulla ut dolore aute commodo eu mollit sunt elit.</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </CenterItemContainer>
    );
}

export default MessageThreadItem;
