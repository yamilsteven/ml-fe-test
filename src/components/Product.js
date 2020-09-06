import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import Search from './Search';

import '../scss/base.scss';
import '../scss/components/product.scss';

export default class Product extends Component {
    state = {
        product: []
    }
    
    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/MLA847743217`)
        .then(res => {
            const product = res.data;
            this.setState({ product });
            console.log("PRODUCT:::", product)
        })
    }
    
    render() {
        return (
        <div>
            <Search/>
            <div className="product">
                <div className="product__img">
                    <figure className="">
                        <img src={this.state.product.thumbnail} className="" alt={this.state.product.title}/>
                    </figure>
                </div>
                <div className="product__info">
                    <div className="condition headline headline__m">
                        <span>{this.state.product.condition} - </span>
                        <span>{this.state.product.sold_quantity} </span>
                        <span>vendidos</span>
                    </div>
                    <h2 className="headline headline__xl">{this.state.product.title}</h2>
                    <div className="price">
                        <span className="price__tag headline headline__xxl">
                            <span className="price__tag-symbol">$ </span>
                            <span className="price__tag-value">{this.state.product.price}</span>
                        </span>
                    </div>
                    <div class="buy-button">
                        <span class="buy-button__content">Comprar</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}