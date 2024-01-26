import { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { CiSettings } from "react-icons/ci";
import Timeline from "../components/Timeline";
import UserPost from "../components/UserPost";
function Home() {
    const [activePane, setActivePane] = useState("forYou");
    const activePaneStyle = "border-bottom border-5 border-primary "
    return (
        <Container className="border-start border-end border-secondary">
        {/* For you and Following tabs. Also the settings part*/}
                <Tab.Container>
                    <Row className="border-bottom p-2">
                        <Col>
                        <Nav
                            active={ activePane }
                            onSelect = {(value)=>setActivePane(value)}
                            justify
                            id="timeline-tabs"> 
                            <Nav.Item>
                                <Nav.Link eventKey="forYou" className="text-white">
                                    <span className={`${ activePane==="forYou" ? activePaneStyle: "" } p-2`}>For you</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="following" className="text-white">
                                    <span className={`${ activePane==="following" ? activePaneStyle: "" } p-2`}>Following</span>
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs="1" className=" text-center p-0 d-flex justify-content-center" >
                            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center m-0" style={{width: "40px", height:"40px"}}>
                                <CiSettings size={ 20 } color="white" />
                            </div>
                        </Col>
                </Row>
                <Row id="user-post">
                    <UserPost />
                </Row>
                    <Row>
                        <Tab.Content>
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
