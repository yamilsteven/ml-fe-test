import React, { Component } from 'react';
import axios from 'axios';

import '../scss/base.scss';
import '../scss/components/result.scss';
import free_shipping_icon from '../assets/free-shipping.png';
import Search from './Search';

export default class ResultPage extends Component {
    state = {
        items: [],
        categories: []
    }

    
    componentDidMount() {
        const keyword = window.location.search;
        axios.get(`/search`, { params: {keyword}})
        .then(res => {
            const items = res.data.items.data.slice(0, 4);
            this.setState({ items });
        })
    }
    
    render() {
        return (
        <div>
            <Search/>
            <div className="cards">
                { this.state.items.map(item => 
                    <a key={item.id} href={"/items/" + item.id} className="cards__item" title={item.title}>
                        <div className="cards__item__img">
                            <figure className="">
                                <img src={item.thumbnail} className="" alt={item.title}/>
                            </figure>
                        </div>
                        <div className="cards__item__content">
                            <div className="price">
                                <span className="price__tag headline headline__xl">
                                    <span className="price__tag-symbol">$</span>
                                    <span className="price__tag-value">{(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                </span>
                                {item.shipping.free_shipping === true ? <img className="price__tag-free" src={free_shipping_icon} alt="Free shipping icon" />: null }
                            </div>
                            <div className="title">
                                <h3 className="headline headline__l">{item.title}</h3>
                            </div>
                        </div>
                        <div className="cards__item__city">
                            <span className="headline headline__s">{item.address.state_name}</span>
                        </div>
                    </a>)
                }
            </div>
        </div>
        )
    }
}