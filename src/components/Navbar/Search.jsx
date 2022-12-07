import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../../styles/search.scss';

function Search({ onSearch }) {

    const [query, setQuery] = React.useState("");

    function handleOnChange(e) {
        const val = e.target.value.trimEnd().trimStart().split(" ")[0].split(',')[0]
        setQuery(() => val);
    }

    return (
        <div id="search">
            <input type='text' placeholder='Search' onChange={handleOnChange} />
            <SearchIcon className='icon-search' onClick={() => onSearch(query)} />
        </div>
    );
}

export default Search;