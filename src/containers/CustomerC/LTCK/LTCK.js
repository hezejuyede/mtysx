import React, {Component} from 'react';
import './LTCK.css';
import '../../../common/icon/iconfont.css'


import NoLogin from '../../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import io from 'socket.io-client';
import {getNowTime} from '../../../api/api'



class Child extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.messageInfo = this.messageInfo.bind(this);
        this.state = {
            userList: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,
            SHDelete:true,
            ModalMessage:'',
            showHideConfirm:false,
            showHideModal:false,
            LTUserNmane:'',
            messageInfo:'',

            
            WXBQ: [
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/1.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/2.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/3.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/4.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/5.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/6.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/7.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/8.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/9.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/10.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/11.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/12.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/12.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/14.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/15.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/16.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/17.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/18.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/19.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/20.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/21.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/22.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/23.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/24.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/25.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/26.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/27.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/28.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/29.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/30.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/31.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/32.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/33.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/34.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/35.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/36.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/37.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/38.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/39.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/40.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/41.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/42.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/43.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/44.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/45.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/46.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/47.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/48.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/49.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/50.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/51.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/52.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/53.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/54.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/55.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/56.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/57.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/58.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/59.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/60.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/61.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/62.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/63.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/64.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/65.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/66.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/67.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/68.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/69.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/70.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/71.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/72.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/73.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/74.gif'},
                {"img": 'http://www.ilqiqi.top/images/mYC/arclist/75.gif'}
            ],
            onMessage:[],

           
            username:'',
            avatar:'',

            SHYY:false,
            SHJP:true,
            SHSR:true,
            SHSH:false,
            SHFS:false,
            SHJH:false,
            BottomFJ:true,
            WXFj:true,
            WXbq:false
        }
    }

    render() {
        return (
            this.state.userinfoState
                ?
                <div className="CustomerC">
                    <div className="CustomerC-div-top">
                        <i className="iconfont icon-left-trangle"
                           onClick={this.goBlack.bind(this)}></i>
                        <span>{this.state.LTUserNmane}</span>
                        <i className="iconfont icon-jiahaocu"></i>
                        <i className="iconfont icon-fangdajing"></i>
                    </div>
                    <div className="CustomerC-div-center1">
                        {this.state.onMessage}

                    </div>
                    <div className="LxKf-bottom" id="LxKf-bottom">
                        <div className="LxKf-bottom-left1">
                            <i  id="SHYY"
                                onClick={this.SHYYSR.bind(this)}
                                className={this.state.SHYY ? 'iconfont icon-yuyin' :''}></i>
                            <i
                                id="SHJP"
                                onClick={this.SHJPSR.bind(this)}
                                className={this.state.SHJP ? 'iconfont icon-jianpan':''}></i>
                        </div>
                        <div className="LxKf-bottom-left2">
                            <input
                                className={this.state.SHSR ? '' : 'HideBottom'}
                                value={this.state.messageInfo}
                                onChange={this.messageInfo}
                                id="bottomText"/>
                            <p className={this.state.SHSH ? '' : 'HideBottom'}>
                                按住&nbsp;说话
                            </p>
                        </div>


                        <div className="LxKf-bottom-right1">
                            <i
                                onClick={this.SHBQ.bind(this)}
                                className="iconfont icon-smiling"></i>
                        </div>
                        <div className="LxKf-bottom-right2">
                            <p
                                onClick={this.EimitMessage.bind(this)}
                                className={this.state.SHFS ? 'emitMessage' : 'HideBottom'}>发送</p>
                            <i
                                onClick={this.JiaHao.bind(this)}
                                className={this.state.SHJH ? '' : 'iconfont icon-jiahao'}></i>
                        </div>
                    </div>
                    <div className={this.state.BottomFJ ? 'HideBottom' :"LxKf-FJ"}>
                        <div

                            className={this.state.WXbq ? 'HideBottom' : "wxFace"}>
                            {this.state.WXBQ.map((item, index) => {
                                return <div key={index} className="LTTemplate1">
                                    <img src={item.img} alt=""/>
                                </div>
                            })}
                        </div>
                        <div className={this.state.WXFj ? 'HideBottom' : "WXFj"}>
                            <div className="">
                                <i className="iconfont icon-xiangce1"></i>
                                <span>相册</span>
                            </div>
                            <div className="">
                                <i className="iconfont icon-xiangji"></i>
                                <span>拍摄</span>
                            </div>
                            <div className="">
                                <i className="iconfont icon-shipin"></i>
                                <span>视频聊天</span>
                            </div>
                            <div className="">
                                <i className="iconfont icon-fujin1"></i>
                                <span>位置</span>
                            </div>
                            <div className="">
                                <i className="iconfont icon-icon-test"></i>
                                <span>红包</span>
                            </div>
                            <div className="">
                                <i className="iconfont icon-solid-person"></i>
                                <span>名片</span>
                            </div>
                            <div className="">
                                <i className="iconfont icon-ai01"></i>
                                <span>语音输入</span>
                            </div>
                            <div className="">
                                <i className="iconfont icon-favorite"></i>
                                <span>我的收藏</span>
                            </div>
                        </div>
                    </div>
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
    componentDidMount(){
        this.ShowLT();
        let that = this
        io('http://localhost:3000')
            .on('privateMsg',(from, to, msg) => {
                that.setState({
                    onMessage:msg
                })

            });

    }

    _getMobile() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        let NowUser = localStorage.getItem("userInfos");
        NowUser = JSON.parse(NowUser);
        if (NowUserStates === null) {
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {
            this.setState({
                userinfoState: true,
                username:NowUser.username,
                avatar:NowUser.useravatar
            });


        }
    };
    ShowLT(index, username) {
        const id = this.props.match.params.id
        this.setState({
            LTUserNmane:id
        })

        io('http://localhost:3000').emit('CustomerService', {
            username:this.state.username
        });
    }



    SHBQ(){
        let bottom = document.querySelector("#LxKf-bottom");
        bottom.style.bottom ="150px";
        this.setState({
            BottomFJ:false,
            WXbq:false,
            WXFj:true

        })
    }
    messageInfo(e){
        let value = e.target.value;
        if(value.length>0){
            this.setState({
                messageInfo: value,
                SHFS:true,
                SHJH:true,
            })
        }


    }

    EimitMessage(){
        let time = getNowTime();

        io('http://localhost:3000')
            .emit('privateMessage', this.state.username,this.state.LTUserNmane,{
            username:this.state.username,
            avatar:this.state.avatar,
            time:time,
            messageInfo:this.state.messageInfo
        });
        this.setState({
            messageInfo:''
        })
    }

    JiaHao(){
        let bottom = document.querySelector("#LxKf-bottom");
        bottom.style.bottom ="150px";
        this.setState({
            BottomFJ:false,
            WXbq:true,
            WXFj:false
        })
    }

    SHYYSR() {

        let SHYY = document.querySelector("#SHYY");
        if(SHYY.className==="iconfont icon-yuyin"){
            this.setState({
                SHYY:false,
                SHJP:true,
                SHSR:true,
                SHSH:false
            })

        }
    }

    SHJPSR() {
        let SHJP = document.querySelector("#SHJP");
        if(SHJP.className==="iconfont icon-jianpan"){
            this.setState({
                SHYY:true,
                SHJP:false,
                SHSR:false,
                SHSH:true
            })

        }


    }

    goBlack() {
        this.props.history.go("-1")
    }
}


function mapStateToProps(state) {

    return {
        iconState: state
    }

}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Child)