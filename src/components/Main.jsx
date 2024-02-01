import React, { useRef, useState } from 'react';
import PageRouter from './PageRouter';
import Sidebar from './Sidebar';
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


function Main() {
    const [scrollAmount, setScrollAmount] = useState(0);
    const mainPageRef = useRef(null);
    const pathLocation = useLocation();
    const currentPath = pathLocation.pathname;

    const handleMainScroll = (_) => {
        return setScrollAmount(mainPageRef.current.scrollTop);
    }

    return (
    
        <main
            ref={ mainPageRef }
            onScroll={ handleMainScroll }
            className="bg-black text-white d-flex flex-nowrap justify-content-evenly flex-shrink-1 flex-grow-1 overflow-auto"
            style={ { flexShrink: "3" } }
        >
            {/* Page Routes */ }
            <PageRouter currentPath={currentPath} />

            {/* Sidebar */ }
            { currentPath != "/messages" &&
                <Sidebar mainScrollAmount={ scrollAmount } /> }
        </main>
    );
}

export default Main;
