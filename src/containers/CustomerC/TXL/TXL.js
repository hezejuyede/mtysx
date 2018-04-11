import React, {Component} from 'react';
import './TXL.css';
import '../../../common/icon/iconfont.css'
import axios from 'axios'


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
            SHDelete:true,
            ModalMessage:'',
            showHideConfirm:false,
            showHideModal:false,

            username:''

        }
    }

    render() {
        return (
            this.state.userinfoState
                ?
                <div className="CustomerC">
                    <Top/>
                    <div className="CustomerC-div-center">
                        <div className="CustomerC-div-center-top">
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-tianjiayonghu"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>新的朋友</span>
                                </div>
                            </div>
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-ai-users"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>群聊</span>
                                </div>
                            </div>
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-msnui-tag"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>标签</span>
                                </div>
                            </div>
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-gongzhonghao"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>公众号</span>
                                </div>
                            </div>
                        </div>
                        <div className="CustomerC-div-center-bottom">
                            {this.state.userList.map((item, index) => {
                                return <div key={index} className="LTTemplate">
                                    <div
                                        onClick={this.ShowLT.bind(this, index, item.username)}
                                        className="LTTemplate-left">
                                        <img src={item.avatar} alt=""/>
                                    </div>
                                    <div className="LTTemplate-right1">
                                        <span>{item.username}</span>
                                    </div>
                                </div>
                            })}
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
        this._getLtList();


    };

    _getMobile() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);

        if (NowUserStates === null) {
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

    _getLtList() {
        axios.post("/AdmGetUserInfoList")
            .then((res) => {

                this.setState({
                    userList: res.data
                });
            })
            .catch((err) => {
                console.log(err)
            })

    };


    ShowLT(index, username) {
        this.props.history.push('/LTCK/' + username)
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