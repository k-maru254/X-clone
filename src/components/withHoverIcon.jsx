import React, { useState } from 'react'
import { Badge } from "react-bootstrap";

const withHoverIcon = (IconComponent) => {
    return ({ hoverColor, badgeValue=0, color, ...props }) => {
        let twitterColor;
        const twitterBlue = "#1DA1F2";
        const twitterGreen = "#029262";
        const twitterRed = "#f91880";

        if (hoverColor === "red") {
            twitterColor = twitterRed;
        } else if (hoverColor === "blue") {
            twitterColor = twitterBlue;
        } else {
            twitterColor = twitterGreen;
        }
        
        const [iconBadgeColor, setIConBadgeColor] = useState(color);
        const [bg, setBg] = useState("transparent");
        const handleMouseEnter = (e) => {
            setIConBadgeColor(twitterColor);
            setBg(`twitter-${hoverColor}-light`);
        }
        const handleMouseLeave = (e) => {
            setIConBadgeColor(color);
            setBg("transparent");
        }

        return (
            <div className="d-flex justify-content-center icon-budge" style={{background: ""}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
                <IconComponent { ...props } color={iconBadgeColor} bg={bg} />
                { <Badge className={ `bg-transparent ps-0 icon-budge` } style={ { color: iconBadgeColor, visibility:  `${ badgeValue === 0 ? "hidden" : "visible" }`  } }>{ badgeValue }</Badge>}
            </div>
        )
  }
    
}

export default withHoverIcon;
