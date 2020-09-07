import React, { Component } from 'react';
import axios from 'axios';

import Search from './Search';
import Description from './Description';

import '../scss/components/product.scss';

export default class Product extends Component {
    state = {
        product: []
    }
    
    componentDidMount() {
        var pageURL = window.location.href;
        var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
        const itemId = lastURLSegment;
        axios.get('/productdetail', { params: {itemId}})
        .then(res => {
            const product = res.data.item;
            this.setState({ product });
        })
    }
    
    render() {
        return (
        <div>
            <Search/>
            <div className="product o-container">
                <div className="product__img">
                    <figure className="">
                        <img src={this.state.product.picture} className="" alt={this.state.product.title}/>
                    </figure>
                </div>
                <div className="product__info">
                    <div className="condition headline headline__m">
                        <span>{this.state.product.condition} - </span>
                        <span>{this.state.product.sold} </span>
                        <span>vendidos</span>
                    </div>
                    <h2 className="headline headline__xl">{this.state.product.title}</h2>
                    <div className="price">
                        <span className="price__tag headline headline__xxl">
                            <span className="price__tag-symbol">$ </span>
                            <span className="price__tag-value">{this.state.product.price}</span>
                        </span>
                    </div>
                    <div className="buy-button">
                        <span className="buy-button__content">Comprar</span>
                    </div>
                </div>
            </div>
            <Description itemId = {this.itemId}/>
        </div>
        )
    }
}