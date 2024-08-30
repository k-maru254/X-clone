import React, { useState } from 'react';
import CenterItemContainer from './CenterItemContainer';
import Search from './Search';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from './Avatar';
import User from './User';
import MoreIcon from './MoreIcon';
import MessageThreadItem from './MessageThreadItem';

function MessageThread() {
    return (
        <>
            <CenterItemContainer className="border-bottom-0 py-2" >
                <Col>
                    <Search />
                </Col>
            </CenterItemContainer>
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
            <MessageThreadItem />
        </>
    );
}

export default MessageThread;
