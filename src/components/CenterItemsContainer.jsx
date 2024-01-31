import React from 'react';
import { Container } from "react-bootstrap";

function CenterItemsContainer({children}) {
    return (
        <Container className="border-start border-end border-secondary">
            { children }
        </Container>
    );
}

export default CenterItemsContainer
