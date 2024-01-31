import React from 'react';
import ItemContainer from './ItemContainer';

function ShowMore({rounded=false}) {
    return (
    
        <ItemContainer className={`rounded-bottom-${rounded?4:0} px-4 py-3 text-twitter-blue`}>
            <span>Show more</span>
        </ItemContainer>
    );
}

export default ShowMore;
