import React, { useState } from 'react';
import { Card, Form, Stack, Row, Col, InputGroup, Container, Button, ListGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Trends from './Trends';
import WhoToFollow from './WhoToFollow';
 
function Sidebar() {

  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    return setSearchValue(e.target.value);
  }
  const images = ["primary", "secondary", "info"]

  return (
    <div className="bg-black text-light" style={ { width: "350px" } }>
      {/* Search input */ }
      <Container>
        <Stack className="my-3">
          <Form className="px-0">
            <InputGroup id="search-input" className=" p-0">
              <InputGroup.Text as="label" htmlFor="search" className=" px-3 py-2 border-0 bg-secondary rounded-start-pill">
                <FiSearch size={ 24 } color="white" />
              </InputGroup.Text>
              <Form.Control id="search" type="search" value={ searchValue } onChange={ handleSearchChange } placeholder="Search" className="p-2 rounded-end-pill border-0 text-bg-secondary" />
            </InputGroup>
          </Form>
        </Stack>
        {/* Subscribe to premium */ }
        <Stack className="mb-3">
          <Card className="bg-secondary border-secondary rounded rounded-4">
            <Card.Body className="py-2">
              <Card.Title className="p-1 m-0">Subscribe to Premium</Card.Title>
              <Card.Text>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</Card.Text>
              <Button as={ Col } variant="info" className="rounded-pill px-3">Subscribe</Button>
            </Card.Body>
          </Card>
        </Stack>
        {/* LIve on X */ }
        <Stack className="mb-3">
          <Card className="bg-secondary border-secondary rounded rounded-4">
            <Card.Body>
              <Card.Title>Subscribe to Premium</Card.Title>
            </Card.Body>
            <Stack direction="horizontal">
              {/* The display photo here showing an avatar using an icon*/ }
              <div>
                <FaRegUser size={ 20 } color="white" />
              </div>
              {/* Name */ }
              <div>Kimaru</div>
              {/* Badge */ }
              <div>
                <RiVerifiedBadgeFill size={ 20 } color="lightblue" />
              </div>
              {/* Is hosting */ }
              <div>is hosting</div>
            </Stack>
            <Stack>
              <Row>
                {/* Topic */ }
                <Col xs="7">
                  <div>Throw him back Thursdays #ThrowHerBack</div>
                </Col>
                {/* Followers in the space */ }
                <Col xs="5">
                  {/* Three profile images of your followers in the space */ }
                  <div className="bg-black border-3 border-warning border d-flex align-items-center rounded-pill" style={ { width: "110px" } }>
                    <div className="position-relative ps-4  rounded-pill" style={ { width: "60px", height: "30px" } }>
                      {
                        images.map((image, ind) => {
                          return (
                            <div key={ ind } className={ `position-absolute bg-${ image } rounded-circle d-flex justify-content-center align-items-center` } style={ { left: `${ ind * 15 }px`, top: "0px", zIndex: `${ 100 - ind }`, width: "30px", height: "30px" } }>
                              <FaRegUser size={ 20 } />
                            </div>
                          );
                        })
                      }
                  
                    </div>
                    {/* The extra number of people in the space */ }
                    <div className="fw-semibold text-white ps-2" style={ { fontSize: "12px" } }>+123</div>
                  </div>
                </Col>
              
              </Row>
            </Stack>
          </Card>
        </Stack>
        {/* Trends for you */ }
        <Trends />
        {/* Who to follow */ }
        <WhoToFollow />
        {/* Messages */ }
      </Container>
    </div>
  );
}

export default Sidebar;
