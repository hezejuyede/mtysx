import React, {Component} from 'react';
import './Find.css';
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
                                    <i className="iconfont icon-icon1"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>朋友圈</span>
                                </div>
                            </div>
                        </div>
                        <div className="CustomerC-div-center-top">
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-saoyisao1"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>扫一扫 </span>
                                </div>
                            </div>
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-yaoyiyao"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>摇一摇</span>
                                </div>
                            </div>
                        </div>
                        <div className="CustomerC-div-center-top">
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-fujin1"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>附近的人</span>
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
                        </div>
                        <div className="CustomerC-div-center-top">
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-shangpin-"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>购物</span>
                                </div>
                            </div>
                            <div className="LTTemplate">
                                <div className="LTTemplate-left">
                                    <i className="iconfont icon-youxi"></i>
                                </div>
                                <div className="LTTemplate-right1">
                                    <span>游戏</span>
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