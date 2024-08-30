import React from 'react';
import { Button } from "react-bootstrap";

function MessageThreadsWelcome() {
    return (
        <div className="vh-75 d-flex flex-column ps-4 mt-5 justify-content-center">
            <h2 className="fw-bold">Welcome to your inbox!</h2>
            <p className="text-secondary">Drop a line, share posts and more with private conversations between you and others on X.</p>
            <Button variant="twitter-blue" className="rounded-pill col-7 mt-3 px-4 py-2 text-white fw-bold" >Write a message</Button>
        </div>
    );
}

export default MessageThreadsWelcome;
