import { Nav , Navbar, Button, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line, RiFileList2Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { IoPencilOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { PiDotsThreeCircle, PiDotsThreeBold } from "react-icons/pi";
import { TfiUser } from "react-icons/tfi";

function Header() {
    /* Navigation buttoms: Home, Explore, Notification, Messages, Grok, Lists, Premium, Profile, and More */
    const links = [
        {
            label: "Home",
            path: "/home",
            icon: GoHome
        },
        {
            label: "Explore",
            path: "/explore",
            icon: CiSearch
        },
        {
            label: "Notifications",
            path: "/notifications",
            icon: RiNotification2Line
        },
        {
            label: "Messages",
            path: "/messages",
            icon: FiMail
        },
        {
            label: "Grok",
            path: "/i/grok",
            icon: IoPencilOutline
        },
        {
            label: "Lists",
            path: "username/lists",
            icon: RiFileList2Line
        },
        {
            label: "Premium",
            path: "/i/verified-choose",
            icon: BsTwitterX
        },
        {
            label: "Profile",
            path: "/username",
            icon: FaRegUser
        }
    ];

    return (
        <header className="d-flex bg-black flex-grow-1 justify-content-end" style={ { flexBasis: "200px", minWidth: "80px", userSelect:"none"} }>
            {/* Create the Navigation bar */ }
            <Navbar className="flex-column ms-3 p-2 align-items-start flex-shrink-1" style={ { flexBasis: "300px", minWidth: "100px" } }>
                {/* Create the twitter logo */ }
                <Link to="/home" className="ms-2 logo-link rounded-circle d-flex align-items-center justify-content-center" style={{width:"60px", height:"60px"}}>
                    <div className="p-2 rounded-circle d-flex justify-content-center align-items-center" style={ { width: "56px", height: "56px" } }>
                        <BsTwitterX size={ 28 } color="white" />
                    </div>
                </Link>
                
                {/* Create a vertical navigation */ }
                <Nav className="flex-column ps-2 w-100 my-1 header__nav">
                    {/* Navigation buttoms: Home, Explore, Notification, Messages, Grok, Lists, Premium, Profile, and More */ }
                    {
                        links.map((link, ind) => {
                            return (
                                <Nav.Link key={ ind } as={ Link } to={ link.path } className="d-flex p-0 nav-button" >
                                    <div className="h-100 py-2  px-3 rounded-pill d-flex align-items-center" style={ { flexBasis: "auto" } }>
                                        { <link.icon size={ 28 } color="white" /> }
                                        <span className="text-white fw-medium mx-2 ps-2 pb-1 fs-5">{ link.label }</span>
                                    </div>
                                </Nav.Link>
                            )
                        })
                    }
                    
                    <Nav.Item className="d-flex p-0 nav-button" >
                        <div className="h-100 py-2  px-3 rounded-pill d-flex align-items-center" style={ { flexBasis: "auto" } }>
                            <PiDotsThreeCircle size={ 24 } color="white" />
                            <span className="text-white mx-2 ps-2 fs-5">More</span>
                        </div>
                    </Nav.Item>
                </Nav>
                <Button variant="info " className="col-10 fw-bold p-2  fs-5 text-light align-self-start rounded-pill mt-1">Post</Button>
                <div className="col-11 fw-bold fs-5 text-light align-self-start rounded-pill mt-4 d-flex active-user align-items-center">
                    <div className="bg-info rounded-circle m-2 d-flex align-items-center justify-content-center" style={ { width: "40px", height: "40px" } }>
                        <TfiUser size={ 24 } />
                    </div>
                    <div className="d-flex flex-column justify-content-center ms-3 ">
                        <div className="fw-bold" style={{fontSize:"14px"}}>Kimaru</div>
                        <div className="fw-lighter text-light" style={{fontSize:"14px"}}>@k_maru254</div>
                    </div>
                    <div className="ms-auto p-3">
                        <PiDotsThreeBold size="24" color="white"/>
                    </div>
                </div>
            </Navbar>
        </header>
    );
}

export default Header;
