import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../scss/base.scss';
import '../scss/components/search.scss';
import logo from '../assets/logo_ml.png';
import searchIcon from '../assets/ic_Search.png';

const Search = () => {
    const [search, setSearch] = useState('');

    const handleSearch = event => {
        event.preventDefault();
        event.stopPropagation();
        console.log("SEARCH")

        window.location = "/items?search="+search;

        /*
        event.preventDefault();
        event.stopPropagation();
        context.router.transitionTo("https://www.google.com");
        */
    }

    useEffect(() => {
        //esto usar para relacionadas
    }, [search])


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