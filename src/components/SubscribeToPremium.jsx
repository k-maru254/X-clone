import React from 'react';
import { Card, Button, Col } from "react-bootstrap";

function SubscribeToPremium() {
    return (
        <>
            <Card.Text className="px-3" style={ { lineHeight: "20px" } }>
                Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </Card.Text>
            <Button as={ Col } variant="twitter-blue" className="rounded-pill px-3 py-1 ms-3 mb-3">
                Subscribe
            </Button>
        </>
    );
}

export default SubscribeToPremium;
