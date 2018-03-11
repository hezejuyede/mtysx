import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './product.css'

import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'


import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'

import { connect } from 'react-redux'

class product extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            productInfo: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,

        }
    }

    render() {
        const productInfo = this.state.productInfo;
        const id = this.props.match.params.id;
        return (
            this.state.userinfoState
                ?
                <div className="product">
                    <Header/>
                    <Left/>
                    <div id="product" className={this.state.leftState ? "rightMove" : "ysx-product"}>
                        <div className="">
                            <div className="product-top">
                                <div className="product-top-left">
                                    <span>商品管理</span>
                                </div>
                                <div className="product-top-right">
                                    <i className="iconfont icon-add"></i>
                                    <NavLink to="/productAdd">添加商品</NavLink>
                                </div>

                            </div>
                            <div className="product-cx">
                                <div className="product-cx-left">
                                    <select>
                                        <option value="id">根据商品ID查询</option>
                                        <option value="name">根据商品名称查询</option>
                                    </select>
                                </div>
                                <div className="product-cx-right">
                                    <input type="text" placeholder="关键字"/>
                                    <button type="submit">查询</button>
                                </div>
                            </div>
                            <div className="product-center">
                                <div className="product-center-top">
                                    <div className="product-template-id">
                                        ID
                                    </div>
                                    <div className="product-template-title">
                                        商品名称
                                    </div>
                                    <div className="product-template-price">
                                        价格
                                    </div>
                                    <div className="product-template-state">
                                        状态
                                    </div>
                                    <div className="product-template-cz">
                                        操作
                                    </div>
                                </div>
                                <div className="product-center-bottom">
                                    {productInfo.map((item, index) => {
                                        return <div key={index} className="product-template">
                                            <div className="product-template-id">
                                                {item.id}
                                            </div>
                                            <div className="product-template-title">
                                                {item.title}
                                            </div>
                                            <div className="product-template-price">
                                                {item.price}
                                            </div>
                                            <div className="product-template-state">
                                                <span className="state-zs">在售</span>
                                                <span className="state-xj">下架</span>
                                            </div>
                                            <div className="product-template-cz">
                                                <NavLink
                                                    to={"/productDetails/" + index + this.props.match.params.id}
                                                    className="cz-ck">
                                                    查
                                                </NavLink>
                                                <NavLink
                                                    to={"/productBj/" + index + this.props.match.params.id}
                                                    className="cz-bj">
                                                    编
                                                </NavLink>
                                                <span className="cz-sc"
                                                      onClick={this.deleteProduct.bind(this, index, id)}>
                                            删
                                        </span>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                :
                <NoLogin/>
        );
    }

    componentDidMount() {
        this._getUserOrder();

    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    };

    _getUserOrder() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        if (NowUserStates == null) {
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {
            const id = this.props.match.params.id;
            axios.get("/admProduct", {
                params: {
                    id: id
                }
            })
                .then((res) => {
                    this.setState({
                        productInfo: res.data[0].goodsImg,
                        userinfoState: true,
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    };

    deleteProduct(index, id) {


        axios.post('/admDeleteProduct', {
            index: index,
            id: id,
        }).then((res) => {
            if (res.data === "1") {
                alert("已经删除");
                window.location.reload();
            }
        }).catch((err) => {
            console.log(err)
        })


    }
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
)(product)