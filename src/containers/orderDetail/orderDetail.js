import React, {Component} from 'react';
import './orderDetails.css'
import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'


import Header from '../../component/header/herder'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import Operation from '../../component/Operation/Operation'

import { connect } from 'react-redux'


class orderDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.setValue= this.setValue.bind(this);
        this.state = {
            orderDetail: [],
            orderInfo: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,
            showHideModal:false,
            operationMessage:"",
            orderNumber:""
        }
    }

    render() {
        const orderDetail = this.state.orderDetail;
        const orderInfo = this.state.orderInfo;
        return (
            this.state.userinfoState
                ?
                <div className="ysx-orderDetail">
                    <Operation
                        setValue={this.setValue}
                        orderNumber={this.state.orderNumber}
                        operationMessage={this.state.operationMessage}
                        showHideModal={this.state.showHideModal}/>
                    <Header/>
                    <Left/>
                    <div className={this.state.leftState ? "rightMove2" : "myOrderDetail"}>
                        <div className="myOrderDetail-top">
                            订单详情
                        </div>
                        {orderInfo.map((item, index) => {
                            return <div key={index} className="myOrderDetail-bottom">
                                <div className="myOrderDetail-bottom-div">
                                    <div className="">订单号:</div>
                                    <div className="">{item.orderNumber}</div>
                                </div>
                                <div className="myOrderDetail-bottom-div">
                                    <div className="">创建时间:</div>
                                    <div className="">{item.orderTime}</div>
                                </div>
                                <div className="myOrderDetail-bottom-div">
                                    <div className="">收件人:</div>
                                    <div className="">
                                        <span>{item.name}</span>
                                        <span>{item.phoneNumber}</span>
                                    </div>
                                </div>
                                <div className="myOrderDetail-bottom-div">
                                    <div className="">地址:</div>
                                    <div className="">
                                        {item.address}
                                    </div>
                                </div>
                                <div className="myOrderDetail-bottom-div">
                                    <div className="">订单状态:</div>
                                    <div className="">
                                        <span>{item.orderState}</span>
                                        <div className="">
                                            <button
                                                onClick={this.operationState.bind(this)}>
                                                点击处理
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="myOrderDetail-bottom-div">
                                    <div className="">支付方式:</div>
                                    <div className="">{item.orderStyle}</div>
                                </div>
                                <div className="myOrderDetail-bottom-div">
                                    <div className="">支付金额:</div>
                                    <div className="">{item.orderAmount}</div>
                                </div>
                            </div>
                        })}
                        <div className="OrderDetail-div">
                            <div className="OrderDetail-div-top">订单详情:</div>
                            <div className="OrderDetail-div-bottom">
                                <div className="OrderDetail-div-bottom-top">
                                    <div className="goods-img">图片</div>
                                    <div className="goods-infos">信息</div>
                                    <div className="goods-price">单价</div>
                                    <div className="goods-number">数量</div>
                                    <div className="goods-hj">合计</div>
                                </div>
                                {orderDetail.map((item, index) => {
                                    return <div key={index} className="OrderDetail-div-template">
                                        <div className="OrderDetail-template-img">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="OrderDetail-template-title">
                                            {item.title}
                                        </div>
                                        <div className="OrderDetail-template-price">
                                            {item.pirce}
                                        </div>
                                        <div className="OrderDetail-template-number">
                                            {item.number}
                                        </div>
                                        <div className="OrderDetail-template-zj">
                                            {item.hj}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <NoLogin/>
        );
    }

    componentDidMount() {
        this._getOrderDetail()
    }

    _getOrderDetail() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        if (NowUserStates == null) {
            console.log(this.state.userinfoState);
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {

            const id = this.props.match.params.id;
            axios.get("/admUserOrderDetail", {
                params: {
                    id: id
                }
            })
                .then((res) => {
                    this.setState({
                        orderDetail: res.data[0].orderDetail,
                        orderInfo: res.data,
                        userinfoState: true,
                        orderNumber:res.data[0].orderNumber,
                        operationMessage:res.data[0].orderState

                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    }

    operationState() {
       this.setState({
           showHideModal:true
       })
    }
    setValue = value => {
        this.setState({
            showHideModal:value
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
)(orderDetail)