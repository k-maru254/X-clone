import { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import CenterItemContainer from "../components/CenterItemContainer";
import CenterItemsContainer from "../components/CenterItemsContainer";
import Timeline from "../components/Timeline";
import TimelineTabNavs from "../components/TimelineTabNavs";
import UserPost from "../components/UserPost";
import Settings from "../components/Settings";
function Home() {
    const [activePane, setActivePane] = useState("forYou");
    const activePaneStyle = "border-bottom border-5 border-twitter-blue "
    
    return (
        <CenterItemsContainer>
            {/* Container containing the  timelines and the sidebar*/ }
            {/* The tab container block containing the For You and the Following timelines */ }
            <Tab.Container id="home-tabs" activeKey={ activePane } onSelect={ (value) => setActivePane(value) }>
                
                <CenterItemContainer header className="opacity-75 p-2">                    
                    <Col>
                        <TimelineTabNavs activePane={ activePane } activePaneStyle={ activePaneStyle } />
                    </Col>
                    <Col xs="1" className="text-center p-0 d-flex justify-content-center">
                        <Settings />
                    </Col>
                </CenterItemContainer>

                {/* The part where a user can make a post and include an image, video, emoji, location, polls, or schedules*/ }
                <CenterItemContainer id="user-post" className="border-bottom border-secondary border-1">
                    <UserPost />
                </CenterItemContainer>
                {/* The tab panes for the attached to the tab navigators  */ }
                <Row>
                    <Tab.Content id="timeline-posts">
                        <Tab.Pane eventKey="forYou">
                            <Timeline data="For you content" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="following">
                            <Timeline data="Following content" />
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </CenterItemsContainer>
    );
}

export default Home;
