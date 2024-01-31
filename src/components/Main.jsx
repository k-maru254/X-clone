import React, { useRef, useState } from 'react';
import PageRouter from './PageRouter';
import Sidebar from './Sidebar';


function Main() {
    const [scrollAmount, setScrollAmount] = useState(0);
    const mainPageRef = useRef(null);

    const handleMainScroll = (_) => {
        return setScrollAmount(mainPageRef.current.scrollTop);
    }

    return (
    
        <main ref={mainPageRef} onScroll={handleMainScroll} className="bg-black text-white d-flex justify-content-evenly flex-shrink-1 flex-grow-1 overflow-auto">
            {/* Page Routes */ }
            <PageRouter/>

            {/* Sidebar */ }
            <Sidebar mainScrollAmount={scrollAmount} />
        </main>
    );
}

export default Main;
