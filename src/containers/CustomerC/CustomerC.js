import React, {Component} from 'react';
import './CustomerC.css';
import '../../common/icon/iconfont.css'
import axios from 'axios'

import Confirm from '../../component/confirm/confirm'
import Top from './XXtop/XXtop'
import Bottom from './XXbottom/XXbottom'


import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'


class Child extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.confirm= this.confirm.bind(this);
        this.cancel= this.cancel.bind(this);

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
                        {this.state.userList.map((item, index) => {
                            return <div key={index} className="LTTemplate">
                                <div
                                    onClick={this.ShowLT.bind(this, index, item.username)}
                                    className="LTTemplate-left">
                                    <img src={item.avatar} alt=""/>
                                </div>
                                <div
                                    onClick={this.SHdelete.bind(this, index)}
                                    className="LTTemplate-right">
                                    <span>{item.username}</span>
                                    <span>{item.lastText}</span>
                                </div>
                                <div
                                    onClick={this.deleteLT.bind(this, item.username)}
                                    className="hideDelete sct">
                                    删除
                                </div>
                            </div>
                        })}
                    </div>
                    <Bottom/>

                    <Confirm
                        cancel={this.cancel}
                        confirm={this.confirm}
                        showHideConfirm={this.state.showHideConfirm}/>
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
        axios.post("/AdmGetLtList")
            .then((res) => {
                this.setState({
                    userList: res.data
                });
            })
            .catch((err) => {
                console.log(err)
            })

    };

    goBlackHome() {
        this.props.history.go(-1)
    }

    ShowLT(index, username) {
        this.props.history.push('/LTCK/' + username)

    }

    SHdelete(index) {
        let d = document.getElementsByClassName("sct")
        if (d[index].className === "deleteText sct"){
            d[index].className="hideDelete sct"

        }
        else if ( d[index].className==="hideDelete sct"){
            d[index].className="deleteText sct"
        }




    }

    deleteLT(username) {
        this.setState({
            showHideConfirm:true,
            username: username
        });

    }

    DeMobileProduct(img) {
        this.setState({
            showHideConfirm: true,
            img: img
        });
    }

    confirm = value => {

        if (value === true) {
            axios.post('/admDeleteLT', {
                username: this.state.username
            })
                .then((res) => {
                    if (res.data === '1') {
                        alert('删除成功');
                        this.props.history.go(0)
                    }
                    else if (res.data === '-1') {
                        alert('删除失败')
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }


    cancel = value => {
        this.setState({
            showHideConfirm: value
        })
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