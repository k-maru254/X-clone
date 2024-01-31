import React from 'react';
import { Card, Stack } from "react-bootstrap";

function SidebarContentContainer({title, children}) {
    return (
        
        <Stack className="mb-3">
            <Card className="bg-twitter-gray text-white border-0 border-secondary rounded rounded-4">
                <Card.Body className="py-0 px-0">
                    <Card.Title className="mb-1 ps-3 pt-3 pb-2 fw-bold">{ title }</Card.Title>
                    { children }
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default SidebarContentContainer;
