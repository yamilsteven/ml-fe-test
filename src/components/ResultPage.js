import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import '../scss/base.scss';
import '../scss/components/result.scss';
import free_shipping_icon from '../assets/free-shipping.png';
import { AxiosRequest } from '../Helpers/AxiosHelper';
import Product from './Product';
import Search from './Search';

/*
const ResultPage = () => {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState(undefined)

    useEffect(async () => {
        let response = await AxiosRequest(`sites/MLA/search?q=:${search}`, 'get')
        if (response.code == 1) {
            setItems(response.data)
        } else {
            console.log(response)
        }
    }, [search])

    const getParams = (location, key) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(key);
    }

    setSearch(getParams('search'))





    return (
        <div className="result-page">
            {items.map((item, index) => {
                return (<Product
                    product={item}
                    key={index}
                />)
            })}

        </div>
        
    }
    
    export default ResultPage;
    )*/

    export default class PersonList extends React.Component {
        state = {
            items: []
        }
        
        componentDidMount() {
            axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:macbook pro`)
            .then(res => {
                const items = res.data.results.slice(0, 4);
                this.setState({ items });
                console.log("DATA:::", items)
            })
        }
        
        render() {
            return (
            <div>
                <Search/>
                <div className="cards">
                    { this.state.items.map(item => 
                        <a href={item.permalink} className="cards__item" title={item.title}>
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
                                    {item.shipping.free_shipping == true ? <img className="price__tag-free" src={free_shipping_icon} alt="Free shipping icon" />: null }
                                </div>
                                <div class="title">
                                    <h3 className="headline headline__l">{item.title}</h3>
                                </div>
                            </div>
                            <div class="cards__item__city">
                                <span className="headline headline__s">{item.address.state_name}</span>
                            </div>
                        </a>)
                    }
                </div>
            </div>
            )
        }
    }