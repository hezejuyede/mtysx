import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import img from '../../common/imgs/logo.png'
import './header.css'
import '../../common/icon/iconfont.css'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'


class header extends Component {
    //context可以跨组件传递数据
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            userName: Object,
            userAvatar: Object,
            icon: true,
            changeLeft:Object

        }
    }

    render() {
        const userName = this.state.userName;
        const userAvatar = this.state.userAvatar;
        const close= "iconfont icon-liebiao";
        const open = "iconfont icon-liebiao-copy";
        return (
            <div className="header">
                <div className="header-left">
                    <img src={img} alt=""/>
                </div>
                <div className="header-center">
                    <div className="openCloseLeft">
                        <i onClick={this.openCloseLeft.bind(this)}
                           className={this.state.icon ? close : open}></i>
                    </div>
                    <div className="home">
                        <NavLink exact to="/home">
                            <i className="iconfont icon-zhuye1"></i>
                        </NavLink>
                    </div>
                    <div className="set">
                        <NavLink to="/Register">
                            <i className="iconfont icon-icon-copy"></i>
                        </NavLink>
                    </div>
                    <div className="set">
                        <NavLink to="/setUP">
                            <i className="iconfont icon-shezhi"></i>
                        </NavLink>
                    </div>
                    <div className="message">
                        <NavLink to="/Message">
                            <i className="iconfont icon-lingdang"></i>
                        </NavLink>
                    </div>
                    <div className="MLogOut" onClick={this.UserOut.bind(this)}>
                        退出
                    </div>
                </div>
                <div className="header-right">
                    <div className="userInfo-avatar">
                        <img src={userAvatar} alt=""/>
                    </div>
                    <div className="userInfo-name">
                        <p >{userName}</p>
                        <p onClick={this.UserOut.bind(this)}>退出</p>
                    </div>
                </div>
            </div>
        )

    }

    componentWillMount() {
        this._getHeader();
    };

    _getHeader() {
        let NowUserInfos = localStorage.getItem("userInfos");
        NowUserInfos = JSON.parse(NowUserInfos);
        this.setState({
                userName: NowUserInfos.username,
                userAvatar: NowUserInfos.useravatar
            }
        )
    };

    openCloseLeft() {
        if (this.state.icon === true) {
            this.setState({
                icon: false
            });
            this.props.changeLeft.leftMove({
                iconState:true

            });
        }
        else if (this.state.icon === false) {
            this.setState({
                icon: true
            });
            this.props.changeLeft.rightMove({
                iconState:false

            });
        }
    }

    UserOut() {
        localStorage.clear();
        window.location.reload();
    }

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        changeLeft: bindActionCreators(actions, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(header)

