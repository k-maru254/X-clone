import { Row, Col, Button, Container } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "./Avatar";
import ItemContainer from "./ItemContainer";
import twitterColors from "./twitterColors";
import withHoverIcon from "./withHoverIcon";

function Trend() {
    const MoreIcon = withHoverIcon(Avatar);
    return (
        <ItemContainer>
            <Container fluid className="">
                <Row className="flex-column">
                    {/* Show where trending. Show where and if promotion, don't show trending*/ }
                    <Col className="d-flex p-relative justify-content-between align-items-center text-secondary ps-3" style={{fontSize:"14px",height:"16px"}}>
                        <span>Trending in Kenya</span>
                        <div className="position-absolute end-0 me-2 mt-3">
                        <MoreIcon icon={BsThreeDots} color={twitterColors.lightGray} size={14} hoverColor={"blue"}  />
                        </div>
                    </Col >
                    {/* Trend name */ }
                    <Col className="ps-3" style={{lineHeight:"20px"}}>
                        <span className="fs-6 fw-semibold">Pandora papers</span>
                    </Col>
                    {/* Number of trends or it is a promotion */ }
                    <Col as="di" className="ps-3" style={{lineHeight:"24px"}}>
                        <span className="text-secondary" style={{fontSize:"12px"}} >436 posts</span>
                    </Col>
                </Row>
            </Container>
        </ItemContainer>
    );
}

export default Trend;
