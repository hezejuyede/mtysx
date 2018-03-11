import React, {Component} from 'react';
import './message.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'

class Message extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            userinfoState: false,
            xtxxdown:false,
            xtxxright:true,
            xtxxbottomHideShow:true,
            leftState: this.props.iconState.iconState.iconState,
            sttzdown:false,
            sttzright:true,
            sttzbottomHideShow:true,
        }
    }

    render() {
        return (

            this.state.userinfoState
                ?
                <div className="message">
                    <Header/>
                    <Left/>
                    <div id="ysx-message" className={this.state.leftState ? "rightMoveMessage" : "ysx-message"}>
                        <div className="">
                            <div className="sttz">
                                <div className="sttz-top" onClick={this.showSttz.bind(this)}>
                                    <div className="sttz-top-left">
                                        <i className="iconfont icon-laba"></i>
                                    </div>
                                    <div className="sttz-top-center">
                                        <span className="">系统通知</span>
                                        <span className="">无未读信息</span>
                                    </div>
                                    <div className="sttz-top-right">
                                        <i className={this.state.sttzright ? "iconfont icon-right-trangle" : ""}></i>
                                        <i className={this.state.sttzdown ? "iconfont icon-down-trangle1" : ""}></i>
                                    </div>
                                </div>
                                <div className={this.state.sttzbottomHideShow ? "sttz-bottom" :"sttz-bottom-hide"}>
                                    <p className="">无未读信息</p>
                                </div>
                            </div>
                            <div className="xtxx">
                                <div className="sttz-top" onClick={this.showXtxx.bind(this)}>
                                    <div className="sttz-top-left">
                                        <i className="iconfont icon-xiaoxi1"></i>
                                    </div>
                                    <div className="sttz-top-center">
                                        <span className="">系统通知</span>
                                        <span className="">无未读信息</span>
                                    </div>
                                    <div className="sttz-top-right">
                                        <i className={this.state.xtxxright ? "iconfont icon-right-trangle" : ""}></i>
                                        <i className={this.state.xtxxdown ? "iconfont icon-down-trangle1" : ""}></i>
                                    </div>
                                </div>
                                <div className={this.state.xtxxbottomHideShow ? "sttz-bottom" :"sttz-bottom-hide"}>
                                    <p className="">无未读信息</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                : <NoLogin/>
        );
    }
    componentWillMount() {
        this._Message();
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    }
    _Message() {
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

    showSttz(e) {
        if (this.state.sttzbottomHideShow === false) {
            this.setState({
                sttzdown: true,
                sttzright: false,
                sttzbottomHideShow: true,
            })
        }
        else if (this.state.sttzbottomHideShow === true) {
            this.setState({
                sttzdown: false,
                sttzright: true,
                sttzbottomHideShow: false,
            })
        }

    };

    showXtxx(e) {
        if (this.state.xtxxbottomHideShow === false) {
            this.setState({
                xtxxdown: true,
                xtxxright: false,
                xtxxbottomHideShow: true,
            })
        }
        else if (this.state.xtxxbottomHideShow === true) {
            this.setState({
                xtxxdown: false,
                xtxxright: true,
                xtxxbottomHideShow: false,
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
)(Message)
