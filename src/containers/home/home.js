import React, {Component} from 'react';
import './home.css';
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import axios from 'axios'


import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

class home extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,
            ProductNumber:0,
            UserNumber:0,
            OrderNumber:0,
            DFK:0,
            DFH:0,
            WFK:0
        }
    }

    render() {
        return (
            this.state.userinfoState
                ?
                <div className="yc-home">
                    <Header/>
                    <Left/>
                    <div id="contentHome"
                         className={this.state.leftState ? "rightMoveHome" : "content-home"}>
                        <div className="">
                            <h2 className="home-top">
                                首页
                            </h2>
                            <div className="home-bottom">
                                <div className="home-bottom-one">
                                    <div className="home-bottom-FOrder"
                                         onClick={this.goToOrderDFK.bind(this)}>
                                        <i className="iconfont icon-weifukuan"></i>
                                        <div className="home-bottom-right">
                                            <p className="">{this.state.WFK}</p>
                                            <p className="">等待付款</p>
                                        </div>
                                    </div>
                                    <div className="home-bottom-HOrder"
                                         onClick={this.goToOrderDFH.bind(this)}>
                                        <i className="iconfont icon-ccgl-yundanguanli-1"></i>
                                        <div className="home-bottom-right">
                                            <p>{this.state.DFH}</p>
                                            <p>等待发货</p>
                                        </div>
                                    </div>
                                    <div className="home-bottom-TOrder"
                                         onClick={this.goToOrderDTK.bind(this)}>
                                        <i className="iconfont icon-chulizhong"></i>
                                        <div className="home-bottom-right">
                                            <p>{this.state.DTK}</p>
                                            <p>等待退款</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-bottom-two">
                                    <div className="home-bottom-user" onClick={this.goToUserList.bind(this)}>
                                        <i className="iconfont icon-kehuqunzu"></i>
                                        <div className="home-bottom-right">
                                            <p className="">{this.state.UserNumber}</p>
                                            <p className="">用户总数</p>
                                        </div>
                                    </div>
                                    <div className="home-bottom-product"
                                         onClick={this.goToProductNumber.bind(this)}>
                                        <i className="iconfont icon-shangpin-"></i>
                                        <div className="home-bottom-right">
                                            <p className="">{this.state.ProductNumber}</p>
                                            <p className="">商品总数</p>
                                        </div>
                                    </div>
                                    <div className="home-bottom-product"
                                         onClick={this.goToOrderDFK.bind(this)}>
                                        <i className="iconfont icon-dingdan1"></i>
                                        <div className="home-bottom-right">
                                            <p className="">{this.state.OrderNumber}</p>
                                            <p className="">订单总数</p>
                                        </div>
                                    </div>
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
    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    }

    componentWillMount() {
        this._getHome();
        this._getUserNumber();
        this._getOrderNumber();
        this._getProductNumber();
        this._getWFK();
        this._getDFH();
        this._getDTK();

    };

    _getHome() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);

        if (NowUserStates == null) {
            console.log(this.state.userinfoState);
            this.setState({
                userinfoState: false,
            })
        } else if (NowUserStates === "1") {
            this.setState({
                userinfoState: true
            })
        }

    };

    _getUserNumber() {
        axios.get("/admUserNumber")
            .then((res) => {
                this.setState({
                    UserNumber: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })


    }

    _getOrderNumber() {
        axios.get("/admOrderNumber")
            .then((res) => {
                this.setState({
                    OrderNumber: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    _getProductNumber() {
        axios.get("/admProductNumber")
            .then((res) => {
                this.setState({
                    ProductNumber: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    _getWFK() {
        axios.get("/admOrderWFK")
            .then((res) => {
                this.setState({
                    WFK: res.data.length
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    _getDFH() {
        axios.get("/admOrderDFH")
            .then((res) => {
                this.setState({
                    DFH: res.data.length
                })
            })
            .catch((err) => {
                console.log(err)
            })


    }

    _getDTK() {
        axios.get("/admOrderDTK")
            .then((res) => {
                this.setState({
                    DTK: res.data.length
                })
            })
            .catch((err) => {
                console.log(err)
            })


    }
    goToOrderDTK(){
        this.props.history.push('/order');
    }
    goToOrderDFH(){
        this.props.history.push('/order');
    }

    goToOrderDFK(){
        this.props.history.push('/order');
    }
    goToUserList(){
        this.props.history.push('/userInfos');
    }
    goToProductNumber(){
        this.props.history.push('/productAll');
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
)(home)
