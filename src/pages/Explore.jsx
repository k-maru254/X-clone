import React from 'react';
import CenterItemContainer from '../components/CenterItemContainer';
import CenterItemsContainer from '../components/CenterItemsContainer';
import Search from "../components/Search";
import Settings from '../components/Settings';
import Trends from "../components/Trends"
import { Col } from "react-bootstrap";

function Explore() {
  return (
    <CenterItemsContainer>
      <CenterItemContainer className="p-2">
        <Col>
          <Search />
        </Col>
        <Col xs="2" className="d-flex justify-content-end align-items-center">
          <Settings />
        </Col>
      </CenterItemContainer>
      <CenterItemContainer>
        <p className="ms-3 fs-5 mt-2 fw-bold">Trends for you</p>
        <Trends />
      </CenterItemContainer>
    </CenterItemsContainer>
  );
}

export default Explore;
