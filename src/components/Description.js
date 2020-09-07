import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';


import '../scss/base.scss';
import '../scss/components/description.scss';

export default class Description extends Component {
    state = {
        description: ''
    }
    
    componentDidMount() {
        axios.get(`/productdescription`)
        .then(res => {
            const description = res.data.item_description.description;
            this.setState({ description });
        })
    }
    
    render() {
        return (
        <div>
            <div className="description o-container">
                <h3 className="headline headline__xl--2">
                    Descripción del producto
                </h3>
                <p className="body">
                    {this.state.description}
                </p>
            </div>
        </div>
        )
    }
}