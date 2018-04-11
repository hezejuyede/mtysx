import React, {Component} from 'react';
import './XXbottom.css'
import '../../../common/icon/iconfont.css'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {withRouter} from "react-router-dom";
class WXBottom extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);


        this.state = {
            bottomList:[
                {
                    "icon":"iconfont icon-xiaoxi1",
                    "text":"信息"
                },
                {
                    "icon":"iconfont icon-tongxunlu",
                    "text":"通讯录"
                },
                {
                    "icon":"iconfont icon-faxian",
                    "text":"发现"
                },
                {
                    "icon":"iconfont icon-solid-person",
                    "text":"我"
                }
            ]


        }
    }



    render() {
        return (
            <div className="CustomerC-div-bottom">
                {this.state.bottomList.map((item, index) => {
                    return <div key={index}
                                onClick={this.changeB.bind(this,index)}
                                className="BTDIV">
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </div>
                })}


            </div>
        );
    }

    componentDidMount() {
        this._getBottom();


    };

    _getBottom() {
        let BTDIV = document.getElementsByClassName('BTDIV');
        let URL = window.location.href;
        let str = URL.slice(22);
        if (str === 'CustomerCommunication') {
            BTDIV[0].className = "BTDIV green"
        }
        else if (str === 'TXL') {
            BTDIV[1].className = "BTDIV green"
        }
        else if (str === 'Find') {
            BTDIV[2].className = "BTDIV green"
        }
        else if (str === 'My') {
            BTDIV[3].className = "BTDIV green"
        }



    }


    changeB(index) {
        if(index===0){
            this.props.history.push('/CustomerCommunication')
        }
        else  if(index===1){
            this.props.history.push('/TXL')
        }
        else  if(index===2){
            this.props.history.push('/Find')
        }
        else  if(index===3){
            this.props.history.push('/My')
        }


    }
}

export default withRouter (WXBottom);






