import React, {Component} from 'react';
import './confirm.css';


import PureRenderMixin from 'react-addons-pure-render-mixin'

class confirm extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            showHideConfirm:this.props.showHideConfirm,
        }
    }

    render() {
        return (
            <div className=
                     {this.state.showHideConfirm ? "ysx-show-Confirm":"ysx-hide-Confirm"}>
                <div className="ysx-Confirm-div">
                    <div className="ysx-Confirm-div-top">
                        确认删除
                    </div>
                    <div className="ysx-Confirm-div-bottom">
                        <div className="ysx-Confirm-div-bottom-left">
                            <p onClick={this.confirm.bind(this)}>确认 </p>
                        </div>
                        <div className='ysx-Confirm-div-bottom-right'>
                            <p onClick={this.cancel.bind(this)}>取消</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            showHideConfirm: nextProps.showHideConfirm,
        });

    }

    confirm() {
        const {confirm} = this.props;
        confirm(true);
    }

    cancel() {
        const {cancel} = this.props;
        cancel(false);
    }


}


export default confirm