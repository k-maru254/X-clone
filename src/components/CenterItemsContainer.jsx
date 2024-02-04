import React from 'react';
import { Container } from "react-bootstrap";

function CenterItemsContainer({border=true, children}) {
    return (
        <Container className={ `${border?"border-start border-end border-secondary":""} `}>
            { children }
        </Container>
    );
}

export default CenterItemsContainer
