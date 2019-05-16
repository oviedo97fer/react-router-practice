import React from 'react';

//Header by Hooks

const Header = (props) => {
    return(
        <header className='App-header'>
            <h2>{props.text}</h2>
        </header>
    );
};

export default Header;