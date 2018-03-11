import React, {Component} from 'react';
import './Operation.css';
import '../../common/icon/iconfont.css'

import Modal from '../../component/modal/modal'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import axios from "axios"

class modal extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            showHideModal:this.props.showHideModal,
            ModalMessage:this.props.operationMessage,
            operationMessage: "",
            Message:"",
            showHide:false,
            orderNumber:''
        }
    }

    render() {
        return (
            <div className={this.state.showHideModal ? "show-modal":"hide-modal"}>
                <Modal
                    ModalMessage={this.state.Message}
                    showHideModal={this.state.showHide}/>
                <div className="modal-div">
                    <i className="iconfont icon-cuowu" onClick={this.closeModal.bind(this)}></i>
                    <div className="modal-div-top">
                        <div className="modal-div-top-left">当前订单状态:</div>
                        <div className="modal-div-top-right">{this.state.ModalMessage}</div>
                    </div>
                    <div className="modal-div-bottom" onClick={this.hideDiv.bind(this)}>
                        {this.state.operationMessage}
                    </div>

                </div>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.operationMessage === "已付款") {
            this.setState({
                showHideModal: nextProps.showHideModal,
                operationMessage: "确定发货",
                orderNumber: nextProps.orderNumber
            });
        }
        else if (nextProps.operationMessage === "待退货") {
            this.setState({
                showHideModal: nextProps.showHideModal,
                operationMessage: "同意退款",
                orderNumber: nextProps.orderNumber
            });
        }
        else if (nextProps.operationMessage === "待退款") {
            this.setState({
                showHideModal: nextProps.showHideModal,
                operationMessage: "确认退款",
                orderNumber: nextProps.orderNumber
            });
        }
        else {
            this.setState({
                showHideModal: nextProps.showHideModal,
                operationMessage: " 无需操作",
                orderNumber: nextProps.orderNumber
            });
        }
    }
    closeModal(){
        const { setValue } = this.props;
        setValue(false);
    }

    hideDiv() {
        if (this.state.operationMessage === "确定发货") {

            axios.post("/admChangeOrderState", {
                id: this.state.orderNumber,
                State: "已发货"
            })
                .then((res) => {
                    if (res.data === "1") {
                        this.setState({
                            Message: "发货成功",
                            showHide: true
                        });
                        const that = this;

                        function a() {
                            that.setState({
                                Message: "",
                                showHide: false,
                                showHideModal: false
                            });
                            const { setValue } = that.props;
                            setValue(false);

                        }

                        setTimeout(a, 2000);
                    }
                    else if (res.data === "-1") {
                        this.setState({
                            Message: "发货失败",
                            showHide: true
                        });
                        const that = this;

                        function e() {
                            that.setState({
                                Message: "",
                                showHide: false,
                                showHideModal: false
                            });
                            const { setValue } = that.props;
                            setValue(false);

                        }

                        setTimeout(e, 2000);
                    }

                })
                .catch((err) => {
                    console.log(err)
                });


        }
        else if (this.state.operationMessage === "同意退款") {
            axios.post("/admChangeOrderState", {
                id: this.state.orderNumber,
                State: "待退款"
            })
                .then((res) => {
                    if (res.data === "1") {
                        this.setState({
                            Message: "已同意退货",
                            showHide: true
                        });
                        const that = this;

                        function b() {
                            that.setState({
                                Message: "",
                                showHide: false,
                                showHideModal: false
                            });
                            const { setValue } = that.props;
                            setValue(false);

                        }

                        setTimeout(b, 2000);
                    }
                    else if (res.data === "-1") {
                        this.setState({
                            Message: "同意失败",
                            showHide: true
                        });
                        const that = this;

                        function e() {
                            that.setState({
                                Message: "",
                                showHide: false,
                                showHideModal: false
                            });
                            const { setValue } = that.props;
                            setValue(false);

                        }

                        setTimeout(e, 2000);
                    }

                })
                .catch((err) => {
                    console.log(err)
                });

        }
        else if (this.state.operationMessage === "确认退款") {
            axios.post("/admChangeOrderState", {
                id: this.state.orderNumber,
                State: "已退款"
            })
                .then((res) => {
                    if (res.data === "1") {
                        this.setState({
                            Message: "退款成功",
                            showHide: true
                        });
                        const that = this;

                        function c() {
                            that.setState({
                                Message: "",
                                showHide: false,
                                showHideModal: false
                            });
                            const { setValue } = that.props;
                            setValue(false);

                        }

                        setTimeout(c, 2000);
                    }
                    else if (res.data === "-1") {
                        this.setState({
                            Message: "退款失败",
                            showHide: true
                        });
                        const that = this;

                        function e() {
                            that.setState({
                                Message: "",
                                showHide: false,
                                showHideModal: false
                            });
                            const { setValue } = that.props;
                            setValue(false);

                        }

                        setTimeout(e, 2000);
                    }

                })
                .catch((err) => {
                    console.log(err)
                });

        }
        else {
            this.setState({
                Message: "无需操作",
                showHide: true
            });
            const that = this;

            function c() {
                that.setState({
                    Message: "",
                    showHide: false,
                });
                const { setValue } = that.props;
                setValue(false);

            }

            setTimeout(c, 2000);
        }

    }


}


export default modal