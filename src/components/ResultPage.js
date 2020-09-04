import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../scss/base.scss';
import '../scss/components/search.scss';
import { AxiosRequest } from '../Helpers/AxiosHelper';
import Product from './Product';

const ResultPage = () => {

    const [items, setItems] = useState([])
    const [search, setSearch] = useState('undefined')

   

    const getParams = (location, key) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(key);
        
    }

    setSearch(getParams('search'))
    

    useEffect(async () => {
        let response = await AxiosRequest(`sites/MLA/search?q=:${search}`, 'get')
        if (response.code == 1) {
            setItems(response.data)
        } else {
            console.log(response)
        }
    }, [search])



    return (
        <div className="result-page">
            {items.map((item, index) => {
                return (<Product
                    product={item}
                    key={index}
                />)
            })}

        </div>
    )
}

export default ResultPage;