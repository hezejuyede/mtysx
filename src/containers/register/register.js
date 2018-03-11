import React, {Component} from 'react';
import axios from 'axios'
import './register.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Modal from '../../component/modal/modal'

import {connect} from 'react-redux'


class register extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.UserName = this.UserName.bind(this);
        this.UserNameOnFocus = this.UserNameOnFocus.bind(this);
        this.UserNameOnBlur = this.UserNameOnBlur.bind(this);
        this.PassWorld1 = this.PassWorld1.bind(this);
        this.PassWorld1OnFocus = this.PassWorld1OnFocus.bind(this);
        this.PassWorld1OnBlur = this.PassWorld1OnBlur.bind(this);
        this.PassWorld2 = this.PassWorld2.bind(this);
        this.PassWorld2OnFocus = this.PassWorld2OnFocus.bind(this);
        this.PassWorld2OnBlur = this.PassWorld2OnBlur.bind(this);
        this.PhoneNumber = this.PhoneNumber.bind(this);
        this.PhoneNumberOnFocus = this.PhoneNumberOnFocus.bind(this);
        this.PhoneNumberOnBlur = this.PhoneNumberOnBlur.bind(this);
        this.state = {
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,

            UserName: '',
            UserNameErrInfo: true,
            UserNameErrText: "",

            PassWorld1: '',
            PassWorld1ErrInfo: true,
            PassWorld1ErrText: "",

            PassWorld2: '',
            PassWorld2ErrInfo: true,
            PassWorld2ErrText: "",

            PhoneNumber: '',
            PhoneNumberErrText: '',
            PhoneNumberErrInfo: true,
            errIcon: false,
            ModalMessage:"",
            showHideModal:false,

        }
    }

    render() {
        return (

            this.state.userinfoState
                ?
                <div className="register">
                    <Modal ModalMessage={this.state.ModalMessage}
                           showHideModal={this.state.showHideModal}/>
                    <Header/>
                    <Left/>
                    <div className={this.state.leftState ? "rightMove" : "content-home"}>
                        <div className="ysx-register-div">
                            <div className="ysx-register-div-title">新用户注册</div>
                            <div className="ysx-register-input">
                                <i className="iconfont icon-iconfonticonfontwode1"></i>
                                <input
                                    type="text"
                                    value={this.state.UserName}
                                    onChange={this.UserName}
                                    onFocus={this.UserNameOnFocus}
                                    onBlur={this.UserNameOnBlur}
                                    placeholder='输入6-16位用户名'/>
                                <div className={this.state.UserNameErrInfo ? "NoErrContext" : "errContext"}>
                                    <i className={this.state.errIcon ? "iconfont icon-cuowu" : ""}></i>
                                    <span>{this.state.UserNameErrText}</span>
                                </div>
                            </div>
                            <div className="ysx-register-input">
                                <i className="iconfont icon-mima1"></i>
                                <input
                                    id="passWord"
                                    value={this.state.PassWorld1}
                                    onChange={this.PassWorld1}
                                    type="password"
                                    onFocus={this.PassWorld1OnFocus}
                                    onBlur={this.PassWorld1OnBlur}
                                    placeholder="建议使用2种字符组合"/>
                                <div className={this.state.PassWorld1ErrInfo ? "NoErrContext" : "errContext"}>
                                    <i className={this.state.errIcon ? "iconfont icon-cuowu" : ""}></i>
                                    <span>{this.state.PassWorld1ErrText}</span>
                                </div>
                            </div>
                            <div className="ysx-register-input">
                                <i className="iconfont icon-mima1"></i>
                                <input
                                    value={this.state.PassWorld2}
                                    onChange={this.PassWorld2}
                                    type="password"
                                    onFocus={this.PassWorld2OnFocus}
                                    onBlur={this.PassWorld2OnBlur}
                                    placeholder="确认密码"/>
                                <div className={this.state.PassWorld2ErrInfo? "NoErrContext" : "errContext"}>
                                    <i className={this.state.errIcon ? "iconfont icon-cuowu" : ""}></i>
                                    <span>{this.state.PassWorld2ErrText}</span>
                                </div>
                            </div>
                            <div className="ysx-register-input">
                                <i className="iconfont icon-shouji1"></i>
                                <input
                                    value={this.state.PhoneNumber}
                                    onChange={this.PhoneNumber}
                                    onFocus={this.PhoneNumberOnFocus}
                                    onBlur={this.PhoneNumberOnBlur}
                                    type="text"
                                    placeholder="11位手机号"/>
                                <div className={this.state.PhoneNumberErrInfo ? "NoErrContext" : "errContext"}>
                                    <i className={this.state.errIcon ? "iconfont icon-cuowu" : ""}></i>
                                    <span>{this.state.PhoneNumberErrText}</span>
                                </div>
                            </div>
                            <button onClick={this.admRegister.bind(this)}>确认注册</button>
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

    _getRegister() {
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
            })

        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    };

    UserName(e) {
        let value = e.target.value;
        this.setState({
            UserName: value
        })


    };

    UserNameOnFocus(e) {
        this.setState({
            errIcon: false,
            UserNameErrInfo: false,
            UserNameErrText: "支持中文，字母，数字，'-'，'_'的组合"
        })


    };

    UserNameOnBlur(e) {

        let value = e.target.value;
        if (value.length === "0") {
            this.setState({
                UserNameErrInfo: true,
                UserNameErrText: "用户名不能为空 ",
                errIcon: false,
            })
        }
        else if (value.length > 0 && value.length < 6) {
            this.setState({
                UserNameErrInfo: false,
                UserNameErrText: "长度只能在6-16个字符之间 ",
                errIcon: false,
            })
        }
        else if (value.length >= 6 && !isNaN(value)) {
            this.setState({
                UserNameErrInfo: false,
                UserNameErrText: "用户名不能为纯数字 ",
                errIcon: true,
            })
        }
        else {
            this.setState({
                UserNameErrInfo: true,
                UserNameErrText: " ",
                errIcon: true,
            })
        }

    };

    PassWorld1(e) {
        let value = e.target.value;
        this.setState({
            PassWorld1: value
        })
    };

    PassWorld1OnFocus(e) {
        this.setState({
            errIcon: false,
            PassWorld1ErrInfo: false,
            PassWorld1ErrText: "建议使用字母、数字和符号两种以上的组合"
        });
    };

    PassWorld1OnBlur(e) {

        let value = e.target.value;
        if (value.length === "0") {
            this.setState({
                PassWorld1ErrInfo: true,
                PassWorld1ErrText: "密码不能为空",
                errIcon: false,
            })
        }
        else if (value.length > 0 && value.length < 6) {
            this.setState({
                PassWorld1ErrInfo: false,
                PassWorld1ErrText: " 长度只能在6-20个字符之间",
                errIcon: false,
            })
        }
        else {
            this.setState({
                PassWorld1ErrInfo: true,
                UserNameErrText: " ",
                errIcon: false,
            })
        }


    };

    PassWorld2(e) {

        let value = e.target.value;
        this.setState({
            PassWorld2: value
        });

    };

    PassWorld2OnFocus(e) {
        this.setState({
            errIcon: false,
            PassWorld2ErrInfo: false,
            PassWorld2ErrText: "请输入确认密码"
        })


    };

    PassWorld2OnBlur(e) {
        let passWord = document.querySelector("#passWord").value;
        let value = e.target.value;
        if (value.length === "0") {
            this.setState({
                PassWorld2ErrInfo: true,
                PassWorld2ErrText: "密码不能为空",
                errIcon: false,
            });
        }
        else if (passWord !== value) {
            this.setState({
                PassWorld2ErrInfo: false,
                PassWorld2ErrText: "两次密码不匹配",
                errIcon: false,
            });
        }
        else {
            this.setState({
                PassWorld2ErrInfo: true,
                UserNameErrText: " ",
                errIcon: false,
            })
        }

    };

    PhoneNumber(e) {
        let value = e.target.value;
        this.setState({
            PhoneNumber:value
        })
    };

    PhoneNumberOnFocus(e) {
        this.setState({
            errIcon: false,
            PhoneNumberErrInfo: false,
            PhoneNumberErrText: "你可以使用该手机登陆和找回密码"
        })
    };

    PhoneNumberOnBlur(e) {
        let value = e.target.value;
        if (value.length === "0") {
            this.setState({
                PhoneNumberErrInfo: true,
                PhoneNumberErrText: "手机号不能为空",
                errIcon: true,
            })
        }
        else if (value.length !== "11") {
            this.setState({
                PhoneNumberErrInfo: false,
                PhoneNumberErrText: "手机号格式不正确 ",
                errIcon: true,
            })
        }
        else {
            this.setState({
                PhoneNumberErrInfo: true,
                PhoneNumberErrText: "",
                errIcon: true,
            })
        }


    };

    admRegister() {
        let userName = this.state.UserName;
        let PostuserName = "";

        if (userName === "0") {
            this.setState({
                UserName: ''
            })
        }
        else if (userName.length > 0 && userName.length < 6) {
            this.setState({
                UserName: ''
            })
        }
        else if (userName.length >= 6 && !isNaN(userName)) {
            this.setState({
                UserName: ""
            })
        }
        else {
            PostuserName = userName
        }

        let PassWorld1 = this.state.PassWorld1;
        let PostPassWorld1 = "";
        if (PassWorld1.length === 0) {
            this.setState({
                PassWorld1: ''
            })
        }
        else if (PassWorld1.length > 0 && PassWorld1.length < 6) {
            this.setState({
                PassWorld1: ''
            })
        }
        else {
            PostPassWorld1 = PassWorld1
        }

        let PostPassWorld0 = this.state.PassWorld1;
        let PostPassWorld2 = this.state.PassWorld2;
        let PostPassWorld3 = "";
        if (PostPassWorld2.length === 0) {
            this.setState({
                PassWorld2: ""
            });
        }
        else if (PostPassWorld1 !== PostPassWorld0) {
            this.setState({
                PassWorld2: ""
            });
        }
        else {
            PostPassWorld3 = PostPassWorld2
        }

        let phoneNumber = this.state.PhoneNumber;

        let PostPhoneNumber = "";


        if (phoneNumber.length === 0) {
            this.setState({
                PhoneNumber: ""
            })
        }
        else if (phoneNumber.length !== 11) {
            this.setState({
                PhoneNumber: ""
            })
        }
        else {
            PostPhoneNumber = phoneNumber
        }


        if (PostuserName.length > 0 && PostPassWorld1.length > 0
            && PostPassWorld3.length > 0 && PostPhoneNumber.length > 0) {

            axios.post("/admRegester", {
                username1: PostuserName,
                password1: PostPassWorld1,
                password2: PostPassWorld3,
                phoneNumber: PostPhoneNumber
            }).then((res) => {

                if (res.data === "-2") {

                    this.setState({
                        ModalMessage: "服务器错误",
                        showHideModal: true
                    });
                    const that = this;

                    function a() {
                        that.setState({
                            ModalMessage: "",
                            showHideModal: false
                        });

                    }

                    setTimeout(a, 2000);


                }
                else if (res.data === "2") {

                    this.setState({
                        ModalMessage: "用户已经注册",
                        showHideModal: true
                    });
                    const that = this;

                    function b() {
                        that.setState({
                            ModalMessage: "",
                            showHideModal: false
                        });

                    }

                    setTimeout(b, 2000);

                }
                else if (res.data === "-1") {

                    this.setState({
                        ModalMessage: "注册失败",
                        showHideModal: true
                    });
                    const that = this;

                    function c() {
                        that.setState({
                            ModalMessage: "",
                            showHideModal: false
                        });
                    }

                    setTimeout(c, 2000);

                }
                else if (res.data === "1") {
                    this.setState({
                        ModalMessage: "注册成功",
                        showHideModal: true
                    });
                    const that = this;

                    function d() {
                        that.setState({
                            ModalMessage: "",
                            showHideModal: false
                        });
                        window.location ="/"

                    }

                    setTimeout(d, 2000);
                }

            }).catch((err) => {
                console.log(err)
            })


        }
        else {
            this.setState({
                ModalMessage: "填写信息有误",
                showHideModal: true
            });
            const that = this;

            function a() {
                that.setState({
                    ModalMessage: "",
                    showHideModal: false
                });

            }

            setTimeout(a, 2000);
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
)(register)