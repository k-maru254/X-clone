import React from 'react';
import { Button } from "react-bootstrap";

function MessageThreadWelcome() {
  return (
    <div className="vh-100 mx-2 d-flex ps-3 flex-column align-items-center justify-content-center">
        <div className="w-75">
            <h2 className="fw-bold">Welcome to your inbox!</h2>
            <p className="text-secondary">Choose from your existing conversations, start a new one, or just keep swimming.</p>
            <Button variant="twitter-blue" className="rounded-pill col-6 mt-3 px-4 py-2 text-white fw-bold" >New message</Button>
        </div>
    </div>
  )
}

export default MessageThreadWelcome
