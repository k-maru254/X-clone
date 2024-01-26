import { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { CiSettings } from "react-icons/ci";
import Timeline from "../components/Timeline";
import UserPost from "../components/UserPost";
function Home() {
    const [activePane, setActivePane] = useState("forYou");
    const activePaneStyle = "border-bottom border-5 border-primary "
    
    return (<Container className="border-start border-end border-secondary">
        <Tab.Container id="home-tabs" activeKey={ activePane } onSelect={ (value) => setActivePane(value) }>
            <Row className="border-bottom p-2 position-sticky sticky-top">
                <Col>
                    <Nav justify id="timeline-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="forYou">
                                <span className={ `text-white ${ activePane === 'forYou' ? activePaneStyle : '' } p-2` } >For you</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="following" className={ `text-white ${ activePane === 'following' ? 'activePaneStyle' : '' }` }>
                                <span className={ `text-white ${ activePane === 'following' ? activePaneStyle : '' } p-2` } >Following</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs="1" className="text-center p-0 d-flex justify-content-center">
                    <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center m-0" style={ { width: "40px", height: "40px" } }>
                        <CiSettings size={ 20 } color="white" />
                    </div>
                </Col>
            </Row>

            <Row id="user-post" className="border-bottom border-secondary border-1">
                <UserPost />
            </Row>

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
    </Container>
    );
}

export default Home;
