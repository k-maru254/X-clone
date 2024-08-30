import React, { createElement } from 'react';
import { CiUser } from "react-icons/ci";

function Avatar({ icon = CiUser, src, size = "30", bg="secondary", color = "black" , className="",  ...props}) {
    let size_int = parseInt(size)

    const imageElement = !src ?
        <div
            className={`bg-${bg} rounded-circle d-flex justify-content-center align-items-center p-0 ${className}`}
            style={ { width: `${ size_int + 15 }px`, height: `${ (size_int) + 15 }px`, boxSizing: "content-box" } }
            {...props}
        >
            { createElement(icon, { size, color }) }
        </div> :
        <img
            src={ src }
            width={ size_int + 15 }
            height={ size_int + 15 }
            alt="avatar"
            style={ { objectFit: "cover" } }
            
            className={`rounded-circle ${className}`}
        />;
    return (
        <>
            { imageElement }
        </>
    );
}

export default Avatar
