import React, {Component} from 'react';
import './productBJ.css'

import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Editor from 'wangeditor';
import { connect } from 'react-redux'

import Header from '../../component/header/herder'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'


class productBJ extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            productInfo: [],
            productImg: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState
        }
    }

    render() {
        const productImg = this.state.productImg;
        const productInfo = this.state.productInfo;
        return (

            this.state.userinfoState
                ?
                <div className="ysx-productBJ">
                    <Header/>
                    <Left/>
                    <div className={this.state.leftState ? "rightMove5": "productBJ"}>
                        <div className="productBJ-top">
                            商品管理 -- 修改商品
                        </div>
                        <div className="productBJ-bottom">
                            {productInfo.map((item, index) => {
                                return <div key={index} className="productBJ-bottom-top">
                                    <div className="productBJ-bottom-div">
                                        <div className="productBJ-bottom-div-left">
                                            <p>商品名称:</p>
                                        </div>
                                        <div className="productBJ-bottom-div-right">
                                            <input type="text" value={item.name}/>
                                        </div>
                                    </div>
                                    <div className="productBJ-bottom-div">
                                        <div className="productBJ-bottom-div-left">
                                            <p>商品描述:</p>
                                        </div>
                                        <div className="productBJ-bottom-div-right">
                                            <input type="text" value={item.gg}/>
                                        </div>
                                    </div>
                                    <div className="productBJ-bottom-div">
                                        <div className="productBJ-bottom-div-left">
                                            <p>商品价格:</p>
                                        </div>
                                        <div className="productBJ-bottom-div-right">
                                            <input type="text" value={item.price}/>
                                        </div>
                                    </div>
                                    <div className="productBJ-bottom-div">
                                        <div className="productBJ-bottom-div-left">
                                            <p>商品库存:</p>
                                        </div>
                                        <div className="productBJ-bottom-div-right">
                                            <input type="text" value={item.number}/>
                                        </div>
                                    </div>
                                    <div className="productBJ-bottom-div">
                                        <div className="productBJ-bottom-div-left">
                                            <p>所属分类:</p>
                                        </div>
                                        <div className="productBJ-bottom-div-right">
                                            <select>
                                                <option value={item.fl}>{item.fl}</option>
                                                <option value="螃蟹类">螃蟹类</option>
                                                <option value="大虾类">大虾类</option>
                                                <option value="鲜鱼类">鲜鱼类</option>
                                                <option value="羊肉类">羊肉类</option>
                                                <option value="牛肉类">牛肉类</option>
                                                <option value="猪肉类">猪肉类</option>
                                                <option value="火锅丸">火锅丸</option>
                                                <option value="调味料">调味料</option>
                                                <option value="面点类">面点类</option>
                                                <option value="鸡系列">鸡系列</option>
                                                <option value="鸭系列">鸭系列</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="productBJ-bottom-div">
                                        <div className="productBJ-bottom-div-left">
                                            <p>商品图片:</p>
                                        </div>
                                        <div className="productBJ-bottom-div-right">
                                            <img src={item.img} alt=""/>
                                        </div>
                                    </div>
                                    <div className="productBJ-bottom-div">
                                        <div className="productBJ-bottom-div-left">
                                            <p>更改图片:</p>
                                        </div>
                                        <div className="productBJ-bottom-div-right">
                                            <input type="file"/>
                                        </div>
                                    </div>
                                </div>
                            })}

                            <div className="productBJ-bottom-bottom">
                                <p className="productXQ">商品详情:</p>
                                <div id="editor">
                                </div>
                                <div className="productImg">
                                    {productImg.map((item, index) => {
                                        return <div key={index} id='productImg'>

                                            <img src={item.pimg} alt=""/>

                                        </div>
                                    })}
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                :
                <NoLogin/>
        );
    }
    componentWillMount(){}
    componentDidMount() {
        this._getProductDetail();
        this.createProduct();
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    }

    _getProductDetail() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        if (NowUserStates == null) {
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {
            let str = this.props.match.params.id;
            let l = str.length;
            let id;
            let index;
            if (l <= 4) {
                id = str.slice(1);
                index = str.slice(0, 1);
            }
            else if (l === 5) {
                index = str.slice(0, 2);
                id = str.slice(2);
            }
            else if (l === 6) {
                index = str.slice(0, 3);
                id = str.slice(3);
            }
            axios.get("/admProductDetails", {
                params: {
                    id: id
                }
            })
                .then((res) => {
                    let goodsData = res.data[0].goodsImg;
                    this.setState({
                        productInfo: goodsData[index].goodsInfo,
                        productImg: goodsData[index].productImg,
                        productdetails: goodsData[index].details,
                        userinfoState: true
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    };
    createProduct() {

        const editor = new Editor('#editor');
        editor.create();
        editor.txt.html('<p>用 JS 设置的内容</p>')
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
)(productBJ)
