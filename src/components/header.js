import React from 'react';

const Header = (props) => {
    return(
       <div className='mb-5'>
            <h1 className='text-center mt-4'>{props.name}</h1>
        </div> 
    )
}

export default Header;
