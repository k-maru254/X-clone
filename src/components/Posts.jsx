import { Card, Row, Col, Badge } from "react-bootstrap";
import { FaRetweet } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import Avatar from "./Avatar";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import withBadgeIcon from "./withHoverIcon";
import CenterItemContainer from "./CenterItemContainer";

function Posts() {
    const BadgedIcon = withBadgeIcon(Avatar)
    return (
        
        <CenterItemContainer >
            <Card className="bg-black text-white">
                {/** Reposts, retweet indicators */ }
                <Row>
                    <Col xs="1" className="pe-0" style={ { height: "26px" } } >
                        <div className="d-flex justify-content-end">
                            <Avatar className="p-0" icon={ FaRetweet } bg="transparent" size="16" color="lightgray" />
                        </div>
                    </Col>
                    <Col style={ { height: "26px" } }>
                        <div>
                            <p className="text-secondary my-fs-14"><span className="fw-bold">Kimaru</span> <span className="fw-semibold">reposted</span></p>
                        </div>
                    </Col>
                </Row>
                {/* Display photo, name, verified, username, timestamp more, post conten, image, and/or video */ }
                <Row>
                    {/* Display image */ }
                    <Col xs="1">
                        <Avatar size="30" color="white" />
                    </Col>
                    {/* Name, username, timestamp, post content, and more */ }
                    <Col>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <div>
                                <span className="fw-bold">Denis Kabui</span>
                                <span className="text-secondary"> @kabuid </span>
                                <span className="text-secondary">. 50 min</span>
                            </div>
                            {/* more icon */ }
                            <div className="d-flex justify-content-center align-items-center">
                                <Avatar icon={ BsThreeDots } className="more-about-post" bg="transparent" size={ 18 } color={ "white" } />
                            </div>
                        </div>
                        {/* Post content */ }
                        <p className="fw-normal fs-" style={ { lineHeight: "20px" } }>Excepteur ut commodo occaecat in velit. Fugiat ut culpa consequat aliqua et nulla veniam labore cillum et irure proident aliquip excepteur. Id reprehenderit ut minim mollit excepteur elit excepteur aute ut veniam tempor do esse. Officia ad tempor proident cupidatat elit cupidatat nisi. Voluptate ea magna proident aliquip sunt ullamco labore dolor consequat. Irure incididunt laborum commodo ex.</p>
                    </Col>
                </Row>
                {/* Comment, retweet, like,  views, bookmarks, share*/ }
                <Row>
                    <Col xs={ { offset: 1 } } className="mb-2" >
                        <BadgedIcon icon={ FaRegComment } color="white" size={ 16 } hoverColor="blue" badgeValue="1" />
                    </Col>
                    <Col>
                    <BadgedIcon icon={ FaRetweet } color="white" size={ 16 } hoverColor="green" badgeValue="1" />
                    </Col>
                    <Col>
                    <BadgedIcon icon={ IoMdHeartEmpty } color="white" size={ 16 } hoverColor="red" badgeValue="1" />
                    </Col>
                    <Col>
                        <BadgedIcon icon={ IoStatsChart } color="white" size={ 16 } hoverColor="blue" />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        
                        <BadgedIcon icon={ FaRegBookmark } color="white" size={ 16 } hoverColor="blue" />
                        <BadgedIcon icon={ MdOutlineFileUpload } color="white" size={ 16 } hoverColor="blue" />
                    </Col>
                </Row>
            </Card>
        </CenterItemContainer>
    );
}

export default Posts;
