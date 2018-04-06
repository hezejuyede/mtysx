import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './MobileModule.css'
import '../../common/icon/iconfont.css'

import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'


import {connect} from 'react-redux'


class order extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            searchOrder: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,


        }
    }

    render() {

        return (
            this.state.userinfoState
                ?
                <div className="MobileModule">
                    <Header/>
                    <Left/>
                    <div id="ysx-MobileModule"
                         className={this.state.leftState ? "rightMoveMobile" : "ysx-Mobile"}>
                        <div className='MobileModule-div'>
                            <div className="" onClick={this.SYLB.bind(this)}>
                                <i className="iconfont icon-lunbotu"></i>
                                <span>首页轮播</span>
                            </div>
                            <div className="" onClick={this.SXTT.bind(this)}>
                                <i className="iconfont icon-toutiao"></i>
                                <span>生鲜头条</span>
                            </div>
                            <div className="" onClick={this.SYTJ.bind(this)}>
                                <i className="iconfont icon-tuijian"></i>
                                <span>首页推荐</span>
                            </div>
                            <div className="" onClick={this.SYMS.bind(this)}>
                                <i className="iconfont icon-miaosha"></i>
                                <span>首页秒杀</span>
                            </div>
                            <div className="" onClick={this.JXHU.bind(this)}>
                                <i className="iconfont icon-jingxuan"></i>
                                <span>精选好货</span>
                            </div>
                            <div className="" onClick={this.XPCJ.bind(this)}>
                                <i className="iconfont icon-xinpin"></i>
                                <span>新品初见</span>
                            </div>
                            <div className="" onClick={this.SYRM.bind(this)}>
                                <i className="iconfont icon-remai1"></i>
                                <span>首页热卖</span>
                            </div>
                            <div className="" onClick={this.SYFL.bind(this)}>
                                <i className="iconfont icon-leimupinleifenleileibie"></i>
                                <span>生鲜分类</span>
                            </div>
                            <div className="" onClick={this.SYFJ.bind(this)}>
                                <i className="iconfont icon-fujin"></i>
                                <span>首页附近</span>
                            </div>
                            <div className="" onClick={this.SPSU.bind(this)}>
                                <i className="iconfont icon-sousuo"></i>
                                <span>商品搜索</span>
                            </div>
                            <div className="" onClick={this.XPTJ.bind(this)}>
                                <i className="iconfont icon-xinpinbiaoqian"></i>
                                <span>新品推荐</span>
                            </div>
                            <div className="" onClick={this.BZRM.bind(this)}>
                                <i className="iconfont icon-remai"></i>
                                <span>本周热卖</span>
                            </div>
                            <div className="" onClick={this.YCJX.bind(this)}>
                                <i className="iconfont icon-chuangxinjingxuan"></i>
                                <span>亿成精选</span>
                            </div>
                            <div className="" onClick={this.DZSX.bind(this)}>
                                <i className="iconfont icon-dazhehuodong"></i>
                                <span>打折生鲜</span>
                            </div>
                            <div className="" onClick={this.XSMS.bind(this)}>
                                <i className="iconfont icon-miaosha1"></i>
                                <span>限时秒杀</span>
                            </div>
                            <div className="" onClick={this.SYST.bind(this)}>
                                <i className="iconfont icon-shitang-"></i>
                                <span>深夜食堂</span>
                            </div>
                            <div className="" onClick={this.TSCY.bind(this)}>
                                <i className="iconfont icon-tesefuwu"></i>
                                <span>特色菜肴</span>
                            </div>
                            <div className="" onClick={this.JXLH.bind(this)}>
                                <i className="iconfont icon-lihe"></i>
                                <span>精选礼盒</span>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
                :
                <NoLogin/>
        );
    }

    componentWillMount() {
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


        if (NowUserStates === null) {
            console.log(this.state.userinfoState);
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

    SYLB() {
        this.props.history.push('/SYLB');
    }

    SXTT() {
        this.props.history.push('/SXTT');
    }

    SYTJ() {
        this.props.history.push('/SYTJ');
    }

    SYMS() {
        this.props.history.push('/SYMS');
    }
    JXHU(){
        this.props.history.push('/JXHU');
    }
    XPCJ(){
        this.props.history.push('/XPCJ');
    }
    SYRM(){
        this.props.history.push('/SYRM');
    }
    SYFL(){
        this.props.history.push('/SYFL');
    }
    SYFJ(){
        this.props.history.push('/SYFJ');
    }
    SPSU(){
        this.props.history.push('/SPSU');
    }
    XPTJ(){
        this.props.history.push('/XPTJ');
    }
    YCJX(){
        this.props.history.push('/YCJX');
    }
    DZSX(){
        this.props.history.push('/DZSX');
    }

    XSMS(){
        this.props.history.push('/XSMS');
    }
    SYST(){
        this.props.history.push('/SYST');
    }
    TSCY(){
        this.props.history.push('/TSCY');
    }
    JXLH(){
        this.props.history.push('/JXLH');
    }
    BZRM(){
        this.props.history.push('/BZRM');
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
)(order)
