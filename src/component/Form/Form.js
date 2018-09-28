import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            product: '',
            price: 0,
            image: ''
        };
    }

    handleAddProduct(name, price, img) {
        this.setState({
            product: name,
            price: price,
            image: img
        });
    };


    render() {
        return (
            <div>
                <h2>Form</h2>
            </div>
        )
    }
}