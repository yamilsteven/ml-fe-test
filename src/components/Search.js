import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../scss/base.scss';
import '../scss/components/search.scss';
import logo from '../assets/logo_ml.png';
import searchIcon from '../assets/ic_Search.png';

const Search = () => {
    const [search, setSearch] = useState('');

    const handleSearch = event => {
        event.preventDefault();
        event.stopPropagation();
        window.location = "/items?search="+search;
    }

    return (
        <div className="search">
            <div className="search o-container">
                <Link to="/">
                    <img className="search__ml-logo" src={logo} alt="Logo" />
                </Link>
                <div className="search__container">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Nunca dejes de buscar"
                            name="search"
                            value={search}
                            onChange={(text) => setSearch(text.target.value)}
                        />
                        <button type="submit">
                            <img className="search__icon" src={searchIcon} alt="Logo" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;