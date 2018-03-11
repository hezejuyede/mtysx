import React, {Component} from 'react';
import './modal.css';


import PureRenderMixin from 'react-addons-pure-render-mixin'

class modal extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            showHideModal:this.props.showHideModal,
            ModalMessage:this.props.ModalMessage
        }
    }

    render() {
        return (
            <div className=
                     {this.state.showHideModal ? "ysx-show-modal":"ysx-hide-modal"}>
                <div className="ysx-modal-div">
                    {this.props.ModalMessage}
                </div>
            </div>
        );
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            showHideModal: nextProps.showHideModal,
        });

    }



}


export default modal