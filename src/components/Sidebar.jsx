import { useEffect, useRef, useState } from 'react';
import LiveOnX from './LiveOnX';
import Search from './Search';
import SidebarContentContainer from './SidebarContentContainer';
import SubscribeToPremium from './SubscribeToPremium';
import Trends from './Trends';
import WhoToFollow from './WhoToFollow';
import { Container, Stack } from "react-bootstrap";
 
function Sidebar({ mainScrollAmount }) {
  const sidebarRef = useRef(null);
  const [currentSidebarPosition, setCurrentSidebarPosition] = useState(0);
  const [sidebarPosition, setSidebarPosition] = useState("static");
  const [extraSidebarHeight, setExtraSidebarHeight] = useState(0);
  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const sidebarHeight = sidebarRef.current.scrollHeight;
    let sidebarScrollAmount = sidebarHeight - viewportHeight;

    setCurrentSidebarPosition(sidebarScrollAmount - mainScrollAmount);
    setExtraSidebarHeight(sidebarScrollAmount )

    if (currentSidebarPosition <= 20) {
      setSidebarPosition("sticky");
    } else {
      setSidebarPosition("static");
    }

  }, [mainScrollAmount]);

  return (
    <div ref={sidebarRef} className={`bg-black text-light flex-shrink-0 pb-3 position-${sidebarPosition}`} style={ { width: "350px", top:`${-extraSidebarHeight - 10}px`} }>
      
      {/* Search input */ }
      <Container className="my-3">
        <Stack className="mb-3">
          <Search />
        </Stack>

        {/* Subscribe to premium */ }
        <SidebarContentContainer title="Subscribe to Premium">
          <SubscribeToPremium />
        </SidebarContentContainer>

        {/* LIve on X */ }
        <SidebarContentContainer title="Live on X">
          <LiveOnX />
        </SidebarContentContainer>
        
        {/* Trends for you */ }        
        <SidebarContentContainer title="Trends for you">
          <Trends />
        </SidebarContentContainer>

        {/* Who to follow */ }
        <SidebarContentContainer title="Who to follow">
          <WhoToFollow />
        </SidebarContentContainer>

        {/* Messages */ }
      </Container>
    </div>
  );
}

export default Sidebar;
