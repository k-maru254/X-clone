
import React from 'react'
import Avatar from './Avatar'
import withHoverIcon from './withHoverIcon';
import { CiSettings } from "react-icons/ci";

function Settings() {
    const Icon = withHoverIcon(Avatar);
  return (
    <Icon icon={CiSettings} hoverColor={"blue"} color="white" size="20" />
  )
}

export default Settings
