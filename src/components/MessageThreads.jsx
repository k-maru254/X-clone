import React from 'react';
import CenterItemContainer from './CenterItemContainer';
import CenterItemsContainer from './CenterItemsContainer';
import { Col } from "react-bootstrap";
import MessageThreadsWelcome from './MessageThreadsWelcome';
import MessageThread from './MessageThread';

function MessageThreads() {
    let len = 2;
    return (
        <CenterItemsContainer border={ false }  className="h-100 overflow-hidden" >
            <CenterItemContainer header className="opacity-75 border-bottom-0" >
                <Col>
                    <p className="fw-bold fs-4">Messages</p>
                </Col>
            </CenterItemContainer>
            {
                len ? <MessageThread /> : <MessageThreadsWelcome />
            }
        </CenterItemsContainer>
    );
}

export default MessageThreads;
