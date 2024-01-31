import React from 'react'

function ItemContainer({className, children}) {
    return (
        <div className={`itemContainer__item ${className}`}>
            {children}
        </div>
    );
}

export default ItemContainer;
