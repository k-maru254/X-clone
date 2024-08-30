import React from 'react';
import { Nav, Col } from "react-bootstrap";

function TimelineTabNavs({activePane, activePaneStyle}) {
    return (
            <Nav justify id="timeline-tabs">
            {/* The For You and the Following tab navigators */ }
                <Nav.Item>
                    <Nav.Link eventKey="forYou">
                        <span className={ `text-white ${ activePane === 'forYou' ? activePaneStyle : '' } p-2` } >For you</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="following" className={ `text-white ${ activePane === 'following' ? 'activePaneStyle' : '' }` }>
                        <span className={ `text-white ${ activePane === 'following' ? activePaneStyle : '' } p-2` } >Following</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
    );
}

export default TimelineTabNavs;
