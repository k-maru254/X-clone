import React from 'react';
import User from './User';
import { MdCalendarMonth } from "react-icons/md";
import Avatar from './Avatar';
import twitterColors from './twitterColors';

function UserProfile({centered=true}) {
    const userAbout = `Cars, 
    maps
    Code`;
    const dateJoined = "October 2020";
    const following = 234;
    const followers = 564;
    const userImageSrc = "profile.jpg"

    const centerAligned = `d-flex flex-column align-items-${centered? "center": "start"}`

    return (
        <div className={ centerAligned }> 
        
            {/* Show user Avatar */ }
            <div>
                <Avatar src={userImageSrc} size="48" />
            </div>
            
            {/* Name and handle */ }
            <div>
                <User name="Ligaya" userName="@ligaya_23" direction="vertical" verified className="align-items-center" />
            </div>

            {/* About user */ }
            <div>
                <p className="m-0 ps-2">{ userAbout }</p>
            </div>

            {/* Month and year the user joined */ }
            <div className="d-flex align-items-center">
                <Avatar icon={ MdCalendarMonth } color={twitterColors.gray} size="20" className="bg-transparent m-0" />
                <div>
                    <span className="text-secondary">Joined { dateJoined }</span>
                </div>
            </div>
            
            {/* Followings and followers */ }
            <div className="d-flex">
                <p className='m-0 ps-2'>{ following } <span className="text-secondary">Following</span></p>
               { followers && <p className="m-0 ms-3">{" " + followers } <span className="text-secondary">Followers</span></p>}
            </div>
        </div>
    );
}

export default UserProfile;
