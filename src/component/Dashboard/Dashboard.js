import  React, {Component} from 'react';
import Product from './../Product/Product';
import Form from './../Form/Form';

export default class Dashboard extends Component {

    render(){
        return(
            <div>
                <h2>Dashboard</h2>
                <Product/>
                
            </div>
        )
    }
}