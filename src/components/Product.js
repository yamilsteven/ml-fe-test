import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../scss/base.scss';
import '../scss/components/search.scss';
import logo from '../assets/logo_ml.png';
import searchIcon from '../assets/ic_Search.png';

const Product = (product) => {

    return (
        <div className="result-page">
            <h1>{product.title}</h1>
        </div>
    )
}

export default Product;