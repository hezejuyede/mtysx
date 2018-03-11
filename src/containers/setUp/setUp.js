import React, {Component} from 'react';
import './setUp.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Modal from '../../component/modal/modal'

import {connect} from 'react-redux'
import axios from 'axios'

class setUp extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.userID = this.userID.bind(this);
        this.phoneNumber = this.phoneNumber.bind(this);
        this.password1 = this.password1.bind(this);
        this.password2 = this.password2.bind(this);
        this.password3 = this.password3.bind(this);

        this.state = {
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,
            ModalMessage: "",
            showHideModal: false,
            userID: "",
            phoneNumber: '',
            UserName: '',
            password1: '',
            password2: '',
            password3: ''
        }
    }

    render() {
        return (
            this.state.userinfoState
                ?
                <div className="setUp">
                    <Modal
                        ModalMessage={this.state.ModalMessage}
                        showHideModal={this.state.showHideModal}/>
                    <Header/>
                    <Left/>
                    <div className={this.state.leftState ? "rightMove" : "ysx-setUp"}>
                        <div className="ysx-setUp-big">
                            <div className="ysx-setUp-div">
                                <div className="div-input">
                                    <div className="div-input-left">
                                        <i className="iconfont icon-iconfonticonfontwode1"></i>
                                    </div>
                                    <div className="div-input-center">
                                        <input
                                            type="text"
                                            value={this.state.userID}
                                            onChange={this.userID}
                                            placeholder="昵称"/>
                                    </div>
                                    <div className="div-input-right">
                                        <span onClick={this.changeId.bind(this)}>修改</span>
                                    </div>
                                </div>
                                <div className="div-input">
                                    <div className="div-input-left">
                                        <i className="iconfont icon-shouji1"></i>
                                    </div>
                                    <div className="div-input-center">
                                        <input
                                            type="text"
                                            value={this.state.phoneNumber}
                                            onChange={this.phoneNumber}
                                            placeholder="手机号"/>
                                    </div>
                                    <div className="div-input-right">
                                        <span onClick={this.changePhoneNumber.bind(this)}>修改</span>
                                    </div>
                                </div>
                            </div>
                            <div className="changePassword">
                                <h2>修改密码</h2>
                                <div className="div-input">
                                    <div className="div-input-left">
                                        <i className="iconfont icon-mima"></i>
                                    </div>
                                    <div className="div-input-center">
                                        <input
                                            value={this.state.password1}
                                            onChange={this.password1}
                                            type="password"
                                            placeholder="输入原始密码"/>
                                    </div>
                                </div>
                                <div className="div-input">
                                    <div className="div-input-left">
                                        <i className="iconfont icon-mima"></i>
                                    </div>
                                    <div className="div-input-center">
                                        <input
                                            value={this.state.password2}
                                            onChange={this.password2}
                                            type="password"
                                            placeholder="输入新密码"/>
                                    </div>
                                </div>
                                <div className="div-input">
                                    <div className="div-input-left">
                                        <i className="iconfont icon-mima"></i>
                                    </div>
                                    <div className="div-input-center">
                                        <input
                                            value={this.state.password3}
                                            onChange={this.password3}
                                            type="password"
                                            placeholder="确认密码"/>
                                    </div>
                                </div>
                                <div className="changePassword-div">
                                    <button onClick={this.changePassWord.bind(this)}>点击修改</button>
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
        this._getRegister();

    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    }

    _getRegister() {
        let NowUserInfos = localStorage.getItem("userInfos");
        NowUserInfos = JSON.parse(NowUserInfos);
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        if (NowUserStates == null) {
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {
            this.setState({
                userinfoState: true,
            });
            axios.post("/admUserInfos", {
                username: NowUserInfos.username
            })
                .then((res) => {
                    this.setState({
                        userID: res.data.id,
                        phoneNumber: res.data.phoneNumber
                    })

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    };

    userID(e) {
        let vaule = e.target.value;
        this.setState({
            userID: vaule
        })

    }

    phoneNumber(e) {
        let vaule = e.target.value;
        this.setState({
            phoneNumber: vaule
        })

    }

    password1(e) {
        let vaule = e.target.value;
        this.setState({
            password1: vaule
        })
    }

    password2(e) {
        let vaule = e.target.value;
        this.setState({
            password2: vaule
        })
    }

    password3(e) {
        let vaule = e.target.value;
        this.setState({
            password3: vaule
        })
    }


    changeId() {
        let NowUserInfos = localStorage.getItem("userInfos");
        NowUserInfos = JSON.parse(NowUserInfos);
        axios.post("/admChangeUserID", {
            username: NowUserInfos.username,
            id: this.state.userID
        })
            .then((res) => {
                if (res.data === "1") {

                    this.setState({
                        ModalMessage: "修改成功",
                        showHideModal: true
                    });
                    const that = this;

                    function a() {
                        that.setState({
                            ModalMessage: "",
                            showHideModal: false
                        });
                        window.location.reload();
                    }

                    setTimeout(a, 2000);

                }

            })
            .catch((err) => {
                console.log(err)
            })

    }

    changePhoneNumber() {
        let NowUserInfos = localStorage.getItem("userInfos");
        NowUserInfos = JSON.parse(NowUserInfos);
        console.log(this.state.phoneNumber);
        axios.post("/admChangePhoneNumber", {
            username: NowUserInfos.username,
            PhoneNumber: this.state.phoneNumber
        })
            .then((res) => {
                if (res.data === "1") {

                    this.setState({
                        ModalMessage: "修改成功",
                        showHideModal: true
                    });
                    const that = this;

                    function a() {
                        that.setState({
                            ModalMessage: "",
                            showHideModal: false
                        });
                        window.location.reload();
                    }

                    setTimeout(a, 2000);

                }

            })
            .catch((err) => {
                console.log(err)
            })
    }

    changePassWord() {
        let NowUserInfos = localStorage.getItem("userInfos");
        NowUserInfos = JSON.parse(NowUserInfos);
        let password1 = this.state.password1;
        let password2 = this.state.password2;
        let password3 = this.state.password3;
        if (password2 === password3) {
            axios.post("/admChangePassWord", {
                username: NowUserInfos.username,
                password1: password1,
                password2: password2
            })
                .then((res) => {
                    if (res.data === "1") {

                        this.setState({
                            ModalMessage: "修改成功",
                            showHideModal: true
                        });
                        const that = this;

                        function a() {
                            that.setState({
                                ModalMessage: "",
                                showHideModal: false
                            });
                            window.location.reload();
                        }

                        setTimeout(a, 2000);

                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }

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
)(setUp)