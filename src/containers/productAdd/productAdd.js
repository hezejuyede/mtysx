import React, {Component} from 'react';
import './productAdd.css'

import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Editor from 'wangeditor';


import Header from '../../component/header/herder'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import { connect } from 'react-redux'

class productAdd extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.img = this.img.bind(this);
        this.fl = this.fl.bind(this);
        this.sl = this.sl.bind(this);
        this.state1 = this.state1.bind(this);
        this.id = this.id.bind(this);
        this.number = this.number.bind(this);
        this.price = this.price.bind(this);
        this.gg = this.gg.bind(this);
        this.name = this.name.bind(this);
        //设置初始值
        this.state={
            img:'',
            fl:'',
            sl:'',
            state1:'',
            id:'',
            number:'',
            price:'',
            gg:'',
            name:'',
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState
        }
    }

    render() {
        return (

            this.state.userinfoState
                ?
                <div className="ysx-productAdd">
                    <Header/>
                    <Left/>
                    <div className={this.state.leftState ? "rightMove11" : "productAdd"}>
                        <div className="productAdd-top">
                            商品管理 -- 增加商品
                        </div>
                        <div className="productAdd-bottom">
                            <div className="productAdd-bottom-top">
                                <div className="productAdd-bottom-div">
                                    <div className="productAdd-bottom-div-left">
                                        <p>商品名称:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="text"
                                               value={this.state.name} onChange={this.name}/>
                                    </div>
                                </div>
                                <div className="productAdd-bottom-div">
                                    <div className="productAdd-bottom-div-left">
                                        <p>商品描述:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="text" value={this.state.gg} onChange={this.gg}/>
                                    </div>
                                </div>
                                <div className="productAdd-bottom-div">
                                    <div className="productAdd-bottom-div-left">
                                        <p>商品价格:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="text" value={this.state.price} onChange={this.price}/>
                                    </div>
                                </div>
                                <div className="productAdd-bottom-div">
                                    <div className="productBJ-bottom-div-left">
                                        <p>商品库存:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="text" value={this.state.number} onChange={this.number}/>
                                    </div>
                                </div>
                                <div className="productAdd-bottom-div">
                                    <div className="productBJ-bottom-div-left">
                                        <p>商品ID:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="text" value={this.state.id} onChange={this.id}/>
                                    </div>
                                </div>
                                <div className="productAdd-bottom-div">
                                    <div className="productBJ-bottom-div-left">
                                        <p>销售状态:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="text" value={this.state.state1} onChange={this.state1}/>
                                    </div>
                                </div>
                                <div className="productAdd-bottom-div">
                                    <div className="productBJ-bottom-div-left">
                                        <p>默认数量:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="text" value={this.state.sl} onChange={this.sl}/>
                                    </div>
                                </div>
                                <div className="productAdd-bottom-div">
                                    <div className="productAdd-bottom-div-left">
                                        <p>所属分类:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <select value={this.state.fl} onChange={this.fl}>
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
                                <div className="productAdd-bottom-div">
                                    <div className="productAdd-bottom-div-left">
                                        <p>添加图片:</p>
                                    </div>
                                    <div className="productAdd-bottom-div-right">
                                        <input type="file" value={this.state.img} onChange={this.img}/>
                                    </div>
                                </div>
                                <button type="button" onClick={this.addProduct}>提交信息</button>
                            </div>
                            <div className="productAdd-bottom-bottom">
                                <p className="productXQ">商品详情:</p>
                                <div id="editor">
                                </div>
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
    };

    componentWillMount() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        if (NowUserStates == null) {
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates === "1") {

            this.setState({
                userinfoState: true,
            })

        }

    };

    componentDidMount() {
        this.createProduct();
    };

    createProduct() {

        const editor = new Editor('#editor');
        editor.create();
    }

    img(e) {
        let value = e.target.value;
        this.setState({img: value})
    };

    fl(e) {
        let value = e.target.value;
        this.setState({fl: value})
    };

    sl(e) {
        let value = e.target.value;
        this.setState({sl: value})
    };

    state1(e) {
        let value = e.target.value;
        this.setState({state1: value})
    };

    id(e) {
        let value = e.target.value;
        this.setState({id: value})
    }

    number(e) {
        let value = e.target.value;
        this.setState({number: value})
    }

    price(e) {
        let value = e.target.value;
        this.setState({price: value})
    }

    gg(e) {
        let value = e.target.value;
        this.setState({gg: value})
    }

    name(e) {
        let value = e.target.value;
        this.setState({name: value})
    }

    addProduct(){
        const data = {

            img: this.state.img,
            name: this.state.name,
            fl: this.state.fl,
            id: this.state.id,
            price: this.state.price,
            number: this.state.number,
            gg: this.state.gg,
            state: this.state.state1,
            sl: this.state.sl,

        };

        axios.post('/admAddProduct',{
            str:data,
            fl:this.state.fl,
            name:this.state.name,
            state:this.state.state1,
            id:this.state.id,
            number:this.state.number,
            price:this.state.price,
            img:this.state.img,
        }).then((res)=>{
            if (res.data === "1") {
                alert("添加成功");
                window.location="/"
            } else if (res.data === "-1") {
                alert("添加失败")
            }

        }).catch((err)=>{
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
)(productAdd)
