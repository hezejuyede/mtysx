import React, {Component} from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom';
import Home from '../containers/home/home';
import Register from '../containers/register/register'
import setUp from '../containers/setUp/setUp'
import Message from '../containers/message/message'
import UserInfos from '../containers/userInfos/userInfos'
import Order from '../containers/order/order'
import orderDetails from '../containers/orderDetail/orderDetail'
import Classify from '../containers/classIfy/classify'
import Product from '../containers/product/product'
import productDetails from '../containers/productDetails/productDetails'
import productBj from '../containers/productBJ/productBJ'

import productAll from '../containers/productAll/productAll'
import productAdd from '../containers/productAdd/productAdd'
import indexLogin from '../containers/indexLogin/indexLogin'

class Routers extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route path="/indexLogin" component={indexLogin}>
                    </Route>
                    <Route path="/home" component={Home}>
                    </Route>
                    <Route path="/Register" component={Register}>
                    </Route>
                    <Route path="/setUp" component={setUp}>
                    </Route>
                    <Route path="/Message" component={Message}>
                    </Route>
                    <Route path="/userInfos" component={UserInfos}>
                    </Route>
                    <Route path="/order" component={Order}>
                    </Route>
                    <Route path="/orderDetails/:id" component={orderDetails}>
                    </Route>
                    <Route path="/classify" component={Classify}>
                    </Route>
                    <Route path="/product/:id" component={Product}>
                    </Route>
                    <Route path="/productAll" component={productAll}>
                    </Route>
                    <Route path="/productAdd" component={productAdd}>
                    </Route>
                    <Route path="/productBj/:id" component={productBj}>
                    </Route>
                    <Route path="/productDetails/:id" component={productDetails}>
                    </Route>
                    <Redirect from="/" to="/indexLogin">
                    </Redirect>
                </Switch>
            </Router>
        )
    }
}

export default Routers
