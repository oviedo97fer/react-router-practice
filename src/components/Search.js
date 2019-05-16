import React, { useState } from 'react';

const Search = (props)=>{
    const [searchValue, setSearchValue] = useState('');
    //takes value of input-search
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }
    //clean input-search
    const resetInputField = () => {
        setSearchValue('');
    }
    //call Search Func
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }
    return(
        <form className='search'>
            <input 
                value={searchValue}
                onChange={handleSearchInputChanges}
                type='text' />
            <input  
                onClick={callSearchFunction}
                type='submit'
                value='SEARCH'/>
        </form>
    );
};

export default Search;