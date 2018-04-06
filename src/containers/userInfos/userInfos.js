import React, {Component} from 'react';
import './userInfos.css'
import axios from 'axios'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import { connect } from 'react-redux'
import Pagination from '../../component/pagination/pagination'


class userInfos extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.getPage= this.getPage.bind(this);
        this.state = {
            admUserList: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,
            pageNumber:2,
            allNumber:"",
            page:0,
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
                                <p className="user-name">用户名</p>
                                <p className="user-email">邮箱</p>
                                <p className="user-phone">电话</p>
                                <p className="user-name">注册时间</p>
                            </div>
                            <div className="bottom-center">
                                {admUserList.map((item, index) => {
                                    return <div key={index} className="user-template">
                                        <div className="list-user-id">
                                            <div className="list-user-id-avatar">
                                                <img src={item.avatar} alt=""/>

                                            </div>
                                            <div className="list-user-id-name">
                                                {item.username}
                                            </div>
                                        </div>
                                        <div className="list-user-email">{item.email}</div>
                                        <div className="list-user-phone">{item.phone}</div>
                                        <div className="list-user-time">{item.time}</div>
                                    </div>
                                })}


                            </div>
                            <Pagination
                                getPage={this.getPage}
                                pageNumber={this.state.pageNumber}
                                allNumber={this.state.allNumber}/>
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
            axios.get("/admUserList",{
                params: {
                    page: 0
                }
            })
                .then((res) => {
                    this.setState({
                        admUserList: res.data.result,
                        allNumber:res.data.length,
                        userinfoState: true
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    };

    getPage = nowPage => {
        axios.get("/admUserList", {
            params: {
                page: nowPage
            }
        })
            .then((res) => {
                this.setState({
                    admUserList: res.data.result
                });

            })
            .catch((err) => {
                console.log(err)
            })

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