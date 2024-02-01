import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import twitterColors from './twitterColors';

function User({size="normal", name, userName, verified=false, direction="horizontal", ...props}) {
  return (
    <div className={ `d-flex align-items-center flex-${ direction === "horizontal" ? "row" : "column" } ${props.className}` }>
      <div className="d-flex align-items-center">
        {/* Name */ }
        <div className="fw-bold" style={size==="small" ? {fontSize: "14px"}: {}}>
          {name}
        </div>
        {/* Badge */ }
        {
          verified && <div className="ms-0">
            <RiVerifiedBadgeFill size={ size==="small"? 14 : 16} color={twitterColors.blue} />
          </div>
        }
      </div>
      {/* Username */ }
      {userName && <div className="text-secondary mx-1 fw-normal" style={size==="small" ? {fontSize: "14px"}: {}}>
        {userName}
      </div>}
    </div>
  );
}

export default User;
