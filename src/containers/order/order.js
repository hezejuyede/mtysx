import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './order.css'

import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import Pagination from '../../component/pagination/pagination'


import { connect } from 'react-redux'





class order extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.selectValue =this.selectValue.bind(this);
        this.searchValue=this.searchValue.bind(this);
        this.getPage= this.getPage.bind(this);
        this.state = {
            data: [],
            searchOrder:[],
            userinfoState:false,
            leftState: this.props.iconState.iconState.iconState,
            myOrderList:true,
            myOrderListSearch:false,
            NoSearch:true,
            searchValue:"",
            selectValue:"",
            pageNumber:2,
            allNumber:"",
            page:0,

        }
    }

    render() {
        const userOrder = this.state.data;
        const searchOrder = this.state.searchOrder;

        return (
            this.state.userinfoState
                ?
                <div className="ysx-order">

                    <Header/>
                    <Left/>
                    <div id="myOrder" className={this.state.leftState ? "rightMoveUserOrder" : "myOrder"}>
                        <div>
                            <div className="myOrder-title">
                                订单管理
                            </div>
                            <div className="myOrder-select">
                                <select
                                    onChange={this.selectValue}
                                    type={this.state.selectValue}>
                                    <option value="">全部订单</option>
                                    <option value="已关闭">已关闭</option>
                                    <option value="未付款">未付款</option>
                                    <option value="已付款">已付款</option>
                                    <option value="已发货">已发货</option>
                                    <option value="待退货">待退货</option>
                                    <option value="待退款">待退款</option>
                                    <option value="未评价">未评价</option>
                                    <option value="已评价">已评价</option>
                                </select>
                                <input
                                    type="text"
                                    value={this.state.searchValue}
                                    onChange={this.searchValue}
                                    placeholder="订单号"/>
                                <button  onClick={this.OrderListSearch.bind(this)}>查询</button>

                            </div>
                            <div className={this.state.myOrderList ? "" : "myOrder-list"}>
                                <div className="myOrder-list-top">
                                    <div className="myOrder-list-top-number">订单号</div>
                                    <div className="myOrder-list-top-sjr">客户</div>
                                    <div className="myOrder-list-top-state">状态</div>
                                    <div className="myOrder-list-top-price">总价</div>
                                    <div className="myOrder-list-top-time">时间</div>
                                    <div className="myOrder-list-top-cz">操作</div>
                                </div>
                                <div className="myOrder-list-bottom">
                                    {userOrder.map((item, index) => {
                                        return <div key={index} className="myOrder-list-template">
                                            <div className="myOrder-list-template-number">
                                                <NavLink to={'/orderDetails/' + item.orderNumber}>
                                                    {item.orderNumber}
                                                </NavLink>
                                            </div>
                                            <div className="myOrder-list-template-sjr">{item.name}</div>
                                            <div className="myOrder-list-template-state">{item.orderState}</div>
                                            <div className="myOrder-list-template-price">{item.orderAmount}</div>
                                            <div className="myOrder-list-template-time">{item.orderTime}</div>
                                            <div className="myOrder-list-template-cz">
                                                <NavLink to={'/orderDetails/' + item.orderNumber}>操作</NavLink>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className={this.state.myOrderListSearch ? "" : "myOrder-list"}>
                                <div className="myOrder-list-top">
                                    <div className="myOrder-list-top-number">订单号</div>
                                    <div className="myOrder-list-top-sjr">客户</div>
                                    <div className="myOrder-list-top-state">状态</div>
                                    <div className="myOrder-list-top-price">总价</div>
                                    <div className="myOrder-list-top-time">时间</div>
                                    <div className="myOrder-list-top-cz">操作</div>
                                </div>
                                <div className="myOrder-list-bottom">
                                    {searchOrder.map((item, index) => {
                                        return <div key={index} className="myOrder-list-template">
                                            <div className="myOrder-list-template-number">
                                                <NavLink to={'/orderDetails/' + item.orderNumber}>
                                                    {item.orderNumber}
                                                </NavLink>
                                            </div>
                                            <div className="myOrder-list-template-sjr">{item.name}</div>
                                            <div className="myOrder-list-template-state">{item.orderState}</div>
                                            <div className="myOrder-list-template-price">{item.orderAmount}</div>
                                            <div className="myOrder-list-template-time">{item.orderTime}</div>
                                            <div className="myOrder-list-template-cz">
                                                <NavLink to={'/orderDetails/' + item.orderNumber}>操作</NavLink>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className={this.state.NoSearch ? "NoSearchHide" : "NoSearchShow"}>
                                 没有搜到的订单
                            </div>
                            <Pagination
                                getPage={this.getPage}
                                pageNumber={this.state.pageNumber}
                                allNumber={this.state.allNumber}/>
                        </div>
                    </div>
                    <Footer/>
                </div>
                :
                <NoLogin/>
        );
    }

    componentWillMount() {
        this._getUserOrder();

    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    }

    _getUserOrder() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);


        if (NowUserStates == null) {
            console.log(this.state.userinfoState);
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {

            axios.get("/admUserOrder")
                .then((res) => {
                    this.setState({
                        data: res.data.result,
                        allNumber:res.data.length,
                        userinfoState: true
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    };

    selectValue(e) {
        let value = e.target.value;
        this.setState({
            selectValue: value
        });
    }

    searchValue(e) {
        let value = e.target.value;
        this.setState({
            searchValue: value
        })
    }

    OrderListSearch() {

        axios.get("/admOrderState", {
            params: {
                select: this.state.selectValue,
                search: this.state.searchValue,
                page: this.state.page
            }
        })
            .then((res) => {
                if (res.data.length > 0) {

                    this.setState({
                        myOrderList: false,
                        myOrderListSearch: true,
                        NoSearch: true,
                        searchOrder: res.data.result,
                        allNumber: res.data.length
                    });


                }
                else if (res.data.length === 0) {
                    this.setState({
                        myOrderList: false,
                        myOrderListSearch: false,
                        NoSearch: false
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }

    getPage = nowPage => {
        axios.get("/admOrderState", {
            params: {
                select: this.state.selectValue,
                search: this.state.searchValue,
                page: nowPage
            }
        })
            .then((res) => {
                if (res.data.length > 0) {
                    this.setState({
                        myOrderList: false,
                        myOrderListSearch: true,
                        NoSearch: true,
                        searchOrder: res.data.result,
                    });
                }
                else if (res.data.length === 0) {
                    this.setState({
                        myOrderList: false,
                        myOrderListSearch: false,
                        NoSearch: false
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })

    };



}

function mapStateToProps(state) {

    return {
        iconState: state
    }

}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(order)
