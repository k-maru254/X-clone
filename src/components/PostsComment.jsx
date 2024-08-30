import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button, Image, CloseButton } from "react-bootstrap";
import Avatar from "./Avatar";
import User from "./User";
import { useRef, useState } from "react";
import withHoverIcon from "./withHoverIcon";
import { FaImage } from "react-icons/fa6";

const PostsComment = ({showModal, onSetShowModal,}) => {

    const [postComment, setPostComment] = useState("");
    const [postReplyMediaUrl, setPostMediaUrl] = useState("");
    const MediaIcon = withHoverIcon(Avatar);
    const commentMediaRef = useRef(null);

    const handleHideModal = ()=>{
        onSetShowModal(!showModal)
    }

    const handleSubmitReply = (e) => {
        e.preventDefault();
        setPostComment("");
        setPostMediaUrl("");
        onSetShowModal(!showModal);
    }

    const handleChangePostReplyMediaUrl = (e) => {
        const postReplyImage = e.target.files[0];
        if (postReplyImage) {
            const fileReader = new FileReader();

            fileReader.onload = (event) => {
                setPostMediaUrl(event.target.result);
            }

            fileReader.readAsDataURL(postReplyImage);
        }
    }
    
    const handleChangeComment = (e) => {
        setPostComment(e.target.value);
        e.target.style.height = `${ e.target.scrollHeight }px`;
    }

    const handleClickMediaIcon = (e) => {
        commentMediaRef.current.click()

    }

    return (
        <Modal show={ showModal } onHide={handleHideModal} className="overflow-auto">
            <Modal.Header closeButton className=" text-bg-dark text-white border-0 m-0 p-2" ></Modal.Header>
            <Modal.Body className="bg-twitter-gray">
                {/* Two rows, one for the post and the second for a user to comment */ }
                <Row>
                    {/* The posts row should contain two cols, one for the profile image and another one for the  post, profile and the text showing the username the user is replying to */ }
                    <Col xs="1" className="p-0 ps-2">
                        <Avatar src="/profile.jpg" color="white" size="24" />
                    </Col>
                    <Col xs="11" >
                        <div className="d-flex align-items-center">
                            <User name="Kimaru" userName="@kimaru254" className="text-white" />
                            <div className="text-secondary">{ " " }.Feb 4</div>
                        </div>
                        <div>
                            <p className="lh-sm text-white">
                                Commodo adipisicing eu nisi incididunt ex ut. Nisi nisi ipsum voluptate tempor dolore voluptate sit eu id ea minim duis cillum esse.
                            </p>
                            <p><span className="text-secondary">Replying to</span> <span className="text-twitter-blue">@kimaru</span></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* The User comment row should have 2 cols, one for the avatar and anothe the comment input and the media section */ }
                    <Col xs="1" className="p-0 ps-2">
                        <Avatar src="/cover.jpg" size="24" />
                    </Col>
                    <Col>
                        <Form onSubmit= {handleSubmitReply}>
                            <Form.Control
                                id="search"
                                as="textarea"
                                name="postComment"
                                value={ postComment }
                                placeholder="Post your reply..."
                                onChange={ handleChangeComment }
                                style={ { resize: "none", overflowY: "hidden", height: "44px" } }
                                className="text-white bg-twitter-gray border-0"
                            />
                            <Form.Control
                                type="file"
                                name="postReplyMediaUrl"
                                onChange={ handleChangePostReplyMediaUrl }
                                ref={ commentMediaRef }
                                hidden
                                className=""
                            />
                            { postReplyMediaUrl &&
                                <div className="position-relative">
                                    <CloseButton className="position-absolute m-3 p-2 end-0" onClick={e=>setPostMediaUrl("")} />
                                    <Image src={ postReplyMediaUrl } alt="Reply media" className="rounded-4 pt-2" fluid />
                                </div>
                            }
                            <div className="d-flex justify-content-between pt-3 ">
                                <MediaIcon icon={ FaImage } size="18" color="white" hoverColor={ "blue" } onClick={ handleClickMediaIcon } />
                                <Button type="submit" variant="twitter-blue" className="text-white rounded-pill">Reply</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default PostsComment; 
