import React from 'react';
import PageRouter from './PageRouter';
import Sidebar from './Sidebar';


function Main() {
    return (
    
        <main className="bg-black text-white d-flex justify-content-evenly flex-shrink-1 flex-grow-1 overflow-auto">
            {/* Page Routes */ }
            <PageRouter/>

            {/* Sidebar */ }
            <Sidebar />
        </main>
    );
}

export default Main;
