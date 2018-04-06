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
import MobileModule from '../containers/MobileModule/MobileModule'


//移动端路由
import SYRM from '../containers/MobileModule/child/SYRM'
import SXTT from '../containers/MobileModule/child/SXTT'
import SYTJ from '../containers/MobileModule/child/SYTJ'
import SYMS from '../containers/MobileModule/child/SYMS'
import JXHU from '../containers/MobileModule/child/JXHU'
import XPCJ from '../containers/MobileModule/child/XPCJ'
import SYFJ from '../containers/MobileModule/child/SYFJ'
import SYFL from '../containers/MobileModule/child/SYFL'
import SPSU from '../containers/MobileModule/child/SPSU'
import XPTJ from '../containers/MobileModule/child/XPTJ'
import YCJX from '../containers/MobileModule/child/YCJX'
import DZSX from '../containers/MobileModule/child/DZSX'
import XSMS from '../containers/MobileModule/child/XSMS'
import SYST from '../containers/MobileModule/child/SYST'
import TSCY from '../containers/MobileModule/child/TSCY'
import JXLH from '../containers/MobileModule/child/JXLH'
import BZRM from '../containers/MobileModule/child/BZRM'
import SYLB from '../containers/MobileModule/child/SYLB'







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

                    <Route path="/SYLB" component={SYLB}>
                    </Route>
                    <Route path="/SYRM" component={SYRM}>
                    </Route>
                    <Route path="/SXTT" component={SXTT}>
                    </Route>
                    <Route path="/SYTJ" component={SYTJ}>
                    </Route>
                    <Route path="/SYMS" component={SYMS}>
                    </Route>
                    <Route path="/JXHU" component={JXHU}>
                    </Route>
                    <Route path="/XPCJ" component={XPCJ}>
                    </Route>
                    <Route path="/SYFJ" component={SYFJ}>
                    </Route>
                    <Route path="/SYFL" component={SYFL}>
                    </Route>
                    <Route path="/SPSU" component={SPSU}>
                    </Route>
                    <Route path="/XPTJ" component={XPTJ}>
                    </Route>
                    <Route path="/YCJX" component={YCJX}>
                    </Route>
                    <Route path="/DZSX" component={DZSX}>
                    </Route>
                    <Route path="/XSMS" component={XSMS}>
                    </Route>
                    <Route path="/SYST" component={SYST}>
                    </Route>
                    <Route path="/TSCY" component={TSCY}>
                    </Route>
                    <Route path="/BZRM" component={BZRM}>
                    </Route>
                    <Route path="/JXLH" component={JXLH}>
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
                    <Route path="/MobileModule" component={MobileModule}>
                    </Route>
                    <Route path="/productBj/:id" component={productBj}>
                    </Route>
                    <Route path="/productDetails/:id" component={productDetails}>
                    </Route>


                </Switch>
            </Router>
        )
    }
}

export default Routers
