import { Row, Col, Button, Container } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";

function Trend() {
    return (
        <Container fluid>
            <Row className="flex-column bg-">
                {/* Show where trending. Show where and if promotion, don't show trending*/ }
                <Col>
                    <p>Trending in Kenya</p>
                    < BsThreeDots size={ 32 } color="white" />
                </Col>
                {/* Trend name */ }
                <Col>
                    <p>Pandora papers</p>
                </Col>
                {/* Number of trends or it is a promotion */ }
                <Col>
                    <p>436 posts</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Trend;
