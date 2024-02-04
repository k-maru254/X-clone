import React from 'react';
import Avatar from './Avatar';
import withHoverIcon from './withHoverIcon';
import { BsThreeDots } from "react-icons/bs";
import twitterColors from './twitterColors';


function MoreIcon({ className}) {
    const More = withHoverIcon(Avatar);
  return (
    <div>      
    <More icon={BsThreeDots} color={twitterColors.lightGray} size={14} hoverColor={"blue"} className={className}  />
    </div>
  )
}

export default MoreIcon
