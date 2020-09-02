import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../scss/base.scss';
import '../scss/components/search.scss';
import logo from '../assets/logo_ml.png';
import searchIcon from '../assets/ic_Search.png';

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <div className="search o-container">
                    <Link to="/">
                        <img className="search__ml-logo" src={logo} alt="Logo" />
                    </Link>
                    <div class="search__container">
                        <form>
                            <input type="text" placeholder="Nunca dejes de buscar" name="search" />
                            <button type="submit"><img className="search__icon" src={searchIcon} alt="Logo" /></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
