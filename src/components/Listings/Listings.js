import React from 'react';

function Listings(props) {
    console.log(props)
    return (
        <div>
            {props.listing}
        </div>
    )
}

export default Listings;