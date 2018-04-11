import React, {Component} from 'react';
import './XXtop.css'
import '../../../common/icon/iconfont.css'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {withRouter} from "react-router-dom";

class WXTop extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);


        this.state = {


        }
    }

    render() {
        return (
            <div className="CustomerC-div-top">
                <i className="iconfont icon-left-trangle"
                   onClick={this.goBlackHome.bind(this)}></i>
                <span>信息</span>
                <i className="iconfont icon-jiahaocu"></i>
                <i className="iconfont icon-fangdajing"></i>
            </div>
        );
    }

    goBlackHome(e) {
        this.props.history.push('/home')

    }
}

export default withRouter (WXTop);