import React, {Component} from 'react';
import './classify.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

import NoLogin from '../../component/Nologin/Nologin'
import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
class classify extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            userinfoState:false,
            leftState: this.props.iconState.iconState.iconState
        }
    }
    render() {
        const classify = this.state.data;
        return (
            this.state.userinfoState
                ?
                <div className="ysx-classify">
                    <Header/>
                    <Left/>
                    <div id="" className={this.state.leftState ? "rightMoveClassify" : "classify"}>
                        <div>
                            <div className="classify-title">
                                <div className="classify-title-left">
                                    商品品类
                                </div>
                                <div className="classify-title-right">
                                    添加品类
                                </div>
                            </div>
                            <div className="classify-top">
                                <div className="classify-top-ID">ID</div>
                                <div className="classify-top-name">品类名称</div>
                                <div className="classify-top-cz">操作</div>
                            </div>
                            <div className="classify-bottom">
                                {classify.map((item, index) => {
                                    return <div key={index} className="classify-bottom-template">
                                        <div className="classify-bottom-ID">{item.id}</div>
                                        <div className="classify-bottom-name">
                                            {item.goodsName}
                                        </div>
                                        <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                            <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                                        </div>
                                    </div>
                                })}
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
        this._getProductClassify();
    };

    _getProductClassify() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);


        if (NowUserStates == null) {
            console.log(this.state.userinfoState);
            this.setState({
                userinfoState: false,
            })
        } else if (NowUserStates === "1") {

            axios.get("/admProductClassify")
                .then((res) => {
                console.log(res.data);
                    this.setState({
                        data: res.data,
                        userinfoState: true
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
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
)(classify)