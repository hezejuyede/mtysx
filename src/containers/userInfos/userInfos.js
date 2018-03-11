import React, {Component} from 'react';
import './userInfos.css'
import axios from 'axios'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import { connect } from 'react-redux'


class userInfos extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            admUserList: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState
        }
    }

    render() {
        const admUserList = this.state.admUserList;
        return (

            this.state.userinfoState
                ?
                <div className="yc-userInfo">
                    <Header/>
                    <Left/>
                    <div className={this.state.leftState ? "rightMove7" : "ysx-userInfos-div"}>
                        <div className="ysx-userInfos-top">
                            用户管理
                        </div>
                        <div className="ysx-userInfos-bottom">
                            <div className="bottom-top">
                                <p className="user-id">ID</p>
                                <p className="user-name">用户名</p>
                                <p className="user-email">邮箱</p>
                                <p className="user-phone">电话</p>
                            </div>
                            <div className="bottom-center">
                                {admUserList.map((item, index) => {
                                    return <div key={index} className="user-template">
                                        <p className="user-id">{item._id}</p>
                                        <p className="user-name">{item.username}</p>
                                        <p className="user-email">{item.email}</p>
                                        <p className="user-phone">{item.phone}</p>
                                    </div>
                                })}


                            </div>
                            <div className="bottom-bottom">
                                <div className="">
                                    <i className="iconfont icon-left-trangle"></i>
                                </div>
                                <div className="blue">
                                    1
                                </div>
                                <div className="">
                                    2
                                </div>
                                <div className="">
                                    3
                                </div>
                                <div className="">
                                    ...
                                </div>
                                <div className="">
                                    199
                                </div>
                                <div className="">
                                    <i className="iconfont icon-right-trangle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                : <NoLogin/>
        );
    }

    componentDidMount() {
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
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {
            axios.get("/admUserList")
                .then((res) => {
                    this.setState({
                        admUserList: res.data,
                        userinfoState: true
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }

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
)(userInfos)