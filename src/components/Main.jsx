import React from 'react';
import PageRouter from './PageRouter';
import Sidebar from './Sidebar';


function Main() {
    return (
    
        <main className="text-bg-dark d-flex flex-shrink-1 flex-grow-1">
            {/* Page Routes */ }
            <PageRouter/>

            {/* Sidebar */ }
            <Sidebar />
        </main>
    );
}

export default Main;
