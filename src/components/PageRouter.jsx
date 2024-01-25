import React from 'react';
import Home from '../pages/Home';
import { Routes, Route } from "react-router-dom";
import Explore from "../pages/Explore";
import Messages from "../pages/Messages";
import Grok from '../pages/Grok';
import Lists from "../pages/Lists";
import Profile from "../pages/Profile";
import Premium from "../pages/Premium";
import Notifications from "../pages/Notifications"

function PageRouter() {
  return (
    <div className="h-100 border-start border-end border-secondary" style={ { width: "600px" } }>
      <Routes>
        <Route path="home" element={ <Home /> } />
        <Route path="explore" element={ <Explore /> } />
        <Route path="notifications" element={ <Notifications /> } />
        <Route path="messages" element={ <Messages /> } />
        <Route path="i/grok/*" element={ <Grok /> } />
        <Route path="username/lists/*" element={ <Lists /> } />
        <Route path="i/verified-choose/*" element={ <Premium /> } />
        <Route path="username" element={ <Profile /> } />
      </Routes>
    </div>
  );
}

export default PageRouter;
