import React, {Component} from 'react';
import './My.css';
import '../../../common/icon/iconfont.css'



import Top from './../XXtop/XXtop'
import Bottom from './../XXbottom/XXbottom'


import NoLogin from '../../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'


class Child extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            userList: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,

            username:'',
            avatar:''

        }
    }

    render() {
        return (
            this.state.userinfoState
                ?
                <div className="CustomerC">
                    <Top/>
                    <div className="CustomerC-div-center">
                        <div className="CustomerC-avatar">
                            <div className="CustomerC-avatar-div">
                                <div className="CustomerC-avatar-left">
                                    <img src={this.state.avatar} alt=""/>
                                </div>
                                <div className="CustomerC-avatar-center">
                                    {this.state.username}
                                </div>
                                <div className="CustomerC-avatar-right">
                                    <i className="iconfont icon-erweima"></i>
                                </div>
                            </div>
                        </div>
                        <div className="CustomerC-div-center-top">
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-qianbao"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>钱包</span>
                                </div>
                            </div>
                        </div>
                        <div className="CustomerC-div-center-top">
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-favorite"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>收藏 </span>
                                </div>
                            </div>
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-xiangce1"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>相册</span>
                                </div>
                            </div>
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-biaoqing"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>表情</span>
                                </div>
                            </div>
                        </div>
                        <div className="CustomerC-div-center-top">
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-shezhi"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>设置</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Bottom/>
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
        this._getMobile();



    };

    _getMobile() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        let NowUser = localStorage.getItem("userInfos");
        NowUser = JSON.parse(NowUser);
        if (NowUserStates === null) {
            this.setState({
                userinfoState: false,
            })
        } else if (NowUserStates === "1") {
            this.setState({
                userinfoState: true,
                username:NowUser.username,
                avatar:NowUser.useravatar
            })
        }
    };





    ShowLT(index, username) {


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
)(Child)