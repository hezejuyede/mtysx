import React, {Component} from 'react';
import './child.css';
import '../../../common/icon/iconfont.css'
import Header from '../../../component/header/herder'
import Left from '../../../component/left/left'
import Modal from '../../../component/modal/modal'
import Confirm from '../../../component/confirm/confirm'
import axios from 'axios'


import NoLogin from '../../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'


class Child extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.confirm= this.confirm.bind(this);
        this.cancel= this.cancel.bind(this);




        this.ID = this.ID.bind(this);
        this.IDOnFocus = this.IDOnFocus.bind(this);
        this.IDOnBlur = this.IDOnBlur.bind(this);

        this.URL = this.URL.bind(this);
        this.URLOnFocus = this.URLOnFocus.bind(this);
        this.URLOnBlur = this.URLOnBlur.bind(this);

        this.name = this.name.bind(this);
        this.nameOnFocus = this.nameOnFocus.bind(this);
        this.nameOnBlur = this.nameOnBlur.bind(this);


        this.price = this.price.bind(this);
        this.priceOnFocus = this.priceOnFocus.bind(this);
        this.priceOnBlur = this.priceOnBlur.bind(this);


        this.index = this.index.bind(this);
        this.indexOnFocus = this.indexOnFocus.bind(this);
        this.indexOnBlur = this.indexOnBlur.bind(this);

        this.state = {
            data: [],
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState,
            Data:[],
            ModalMessage:'',
            showHideConfirm:false,
            showHideModal:false,
            addMP:false,
            upMP:false,
            img:'',

            ID:'',
            IDErrInfo: true,
            IDErrText: "",
            IDState:false,

            URL:'',
            URLErrInfo: true,
            URLErrText: "",
            URLState:false,

            name:'',
            nameErrInfo: true,
            nameErrText: "",
            nameState:false,

            price:'',
            priceErrInfo: true,
            priceErrText: "",
            priceState:false,


            index:'',
            indexErrInfo: true,
            indexErrText: "",
            indexState:false,

        }
    }

    render() {
        return (
            this.state.userinfoState
                ?
                <div className="yc-Mobile">
                    <div className={this.state.addMP ? 'addMProduct':'addMProduct1'}>
                        <div className="addMProduct-top" >
                            <i className="iconfont icon-cuowu"
                               onClick={this.closeAddMP.bind(this)}></i>
                        </div>
                        <div className="addMProduct-bottom">
                            <div className="proInfo">填写商品信息</div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.URL}
                                        onChange={this.URL}
                                        onFocus={this.URLOnFocus}
                                        onBlur={this.URLOnBlur}
                                        type="text"
                                        placeholder='请输入图片网络地址'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.URLErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.name}
                                        onChange={this.name}
                                        onFocus={this.nameOnFocus}
                                        onBlur={this.nameOnBlur}
                                        type="text"
                                        placeholder='请输入商品名字'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.nameErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.price}
                                        onChange={this.price}
                                        onFocus={this.priceOnFocus}
                                        onBlur={this.priceOnBlur}
                                        type="number"
                                        placeholder='请输入价格'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.priceErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.ID}
                                        onChange={this.ID}
                                        onFocus={this.IDOnFocus}
                                        onBlur={this.IDOnBlur}
                                        type="text"
                                        placeholder='请输入ID'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.IDErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.index}
                                        onChange={this.index}
                                        onFocus={this.indexOnFocus}
                                        onBlur={this.indexOnBlur}
                                        type="number"
                                        placeholder='请输入索引值'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.indexErrText}
                                </div>
                            </div>
                            <button onClick={this.addMobileProduct.bind(this)}>确认提交</button>
                        </div>
                    </div>
                    <div className={this.state.upMP ? 'addMProduct':'addMProduct1'}>
                        <div className="addMProduct-top" >
                            <i className="iconfont icon-cuowu"
                               onClick={this.closeUpMP.bind(this)}></i>
                        </div>
                        <div className="addMProduct-bottom">
                            <div className="proInfo">修改商品信息</div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.URL}
                                        onChange={this.URL}
                                        onFocus={this.URLOnFocus}
                                        onBlur={this.URLOnBlur}
                                        type="text"
                                        placeholder='请输入图片网络地址'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.URLErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.name}
                                        onChange={this.name}
                                        onFocus={this.nameOnFocus}
                                        onBlur={this.nameOnBlur}
                                        type="text"
                                        placeholder='请输入商品名字'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.nameErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.price}
                                        onChange={this.price}
                                        onFocus={this.priceOnFocus}
                                        onBlur={this.priceOnBlur}
                                        type="number"
                                        placeholder='请输入价格'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.priceErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.ID}
                                        onChange={this.ID}
                                        onFocus={this.IDOnFocus}
                                        onBlur={this.IDOnBlur}
                                        type="text"
                                        placeholder='请输入ID'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.IDErrText}
                                </div>
                            </div>
                            <div className="">
                                <div className="addMProduct-bottom-top">
                                    <input
                                        value={this.state.index}
                                        onChange={this.index}
                                        onFocus={this.indexOnFocus}
                                        onBlur={this.indexOnBlur}
                                        type="number"
                                        placeholder='请输入索引值'/>
                                </div>
                                <div className="addMProduct-bottom-bottom">
                                    {this.state.indexErrText}
                                </div>
                            </div>
                            <button onClick={this.UpMobileProduct.bind(this)}>确认提交</button>
                        </div>
                    </div>
                    <Header/>
                    <Left/>
                    <div id="contentMobile"
                         className={this.state.leftState ?
                             "rightMoveMobile1" : "content-Mobile1"}>
                        <div className="">
                            <div className="SPGL">
                                商品管理
                            </div>
                            <div className="Mobile-addProduct"
                                 onClick={this.showAddMP.bind(this)}>
                                <p className="">新增商品</p>
                            </div>
                            <div className="MobileChild">
                                <div className='MobileChild-div'>
                                    {this.state.Data.map((item, index) => {
                                        return <div key={index} className='MobileChild-top'>
                                            <div className="MobileChild-top-left">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="MobileChild-top-right">
                                                <p className="MobileChild-top-right-title">
                                                    {item.title}
                                                </p>
                                                <p className="MobileChild-top-right-delete"
                                                   onClick={this.DeMobileProduct.bind(this,item.img)}>
                                                    删除
                                                </p>
                                                <p className="MobileChild-top-right-update"
                                                   onClick={this.showUpMp.bind(this,item.img,item.title,item.price,item.id,item.sindex)}>
                                                    修改
                                                </p>
                                            </div>
                                        </div>
                                    })}
                                </div>



                            </div>
                        </div>
                    </div>
                    <Modal
                        ModalMessage={this.state.ModalMessage}
                        showHideModal={this.state.showHideModal}/>
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
        this._getMobileInfo()


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

    _getMobileInfo() {
        axios.post("/admGetSYRM")
            .then((res) => {
                this.setState({
                    Data: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    ID(e) {
        let value = e.target.value;
        this.setState({
            ID: value
        });


    }

    IDOnFocus() {
        this.setState({
            IDErrInfo: false,
            IDErrText: "请输入ID"
        })
    }

    IDOnBlur(e) {
        let value = e.target.value;
        if (value.length === 0) {
            this.setState({
                IDErrInfo: true,
                IDErrText: "ID不能为空"
            })
        }
        else {
            this.setState({
                IDErrInfo: true,
                IDState:true,
                IDErrText: " "
            })
        }

    }


    URL(e) {
        let value = e.target.value;
        this.setState({
            URL: value
        })

    }

    URLOnFocus() {
        this.setState({
            URLErrInfo: false,
            URLErrText: "请输入网络地址"
        })
    }

    URLOnBlur(e) {
        let value = e.target.value;
        if (value.length === 0) {
            this.setState({
                URLErrInfo: true,
                URLErrText: "图片地址不能为空 ",
            })
        }
        else {
            this.setState({
                URLErrInfo: true,
                URLState:true,
                URLErrText: " "
            })
        }

    }


    price(e) {
        let value = e.target.value;
        this.setState({
            price: value
        })

    }

    priceOnFocus() {
        this.setState({
            priceErrInfo: false,
            priceErrText: "请输入商品价格"
        })
    }

    priceOnBlur(e) {
        let value = e.target.value;
        if (value.length === 0) {
            this.setState({
                priceErrInfo: true,
                priceErrText: "价格不能为空 "
            })
        }
        else {
            this.setState({
                priceErrInfo: true,
                priceState:true,
                priceErrText: " "
            })
        }

    }



    name(e) {
        let value = e.target.value;
        this.setState({
            name: value
        })

    }

    nameOnFocus() {
        this.setState({
            errIcon: false,
            nameErrInfo: false,
            nameErrText: "支持中文，字母，数字，'-'，'_'的组合"
        })
    }

    nameOnBlur(e) {
        let value = e.target.value;
        if (value.length === 0) {
            this.setState({
                nameErrInfo: true,
                nameErrText: "商品名不能为空 ",
            })
        }
        else {
            this.setState({
                nameErrInfo: true,
                nameErrText: " ",
                nameState:true
            })
        }

    }



    index(e) {
        let value = e.target.value;
        this.setState({
            index: value
        })

    }

    indexOnFocus() {
        this.setState({
            indexErrInfo: false,
            indexErrText: " 请输入索引"
        })
    }

    indexOnBlur(e) {
        let value = e.target.value;
        if (value.length === 0) {
            this.setState({
                indexErrInfo: true,
                indexErrText: "索引不能为空 "
            })
        }
        else {
            this.setState({
                indexErrInfo: true,
                indexErrText: " ",
                indexState:true
            })
        }

    }

    closeAddMP() {
        this.setState({
            addMP: false
        })

    }

    closeUpMP() {
        this.setState({
            upMP: false
        })
    }

    showAddMP() {
        this.setState({
            addMP: true
        })
    }

    showUpMp(img,title,price,id,sindex) {
        this.setState({
            upMP: true,
            URL:img,
            name:title,
            price:price,
            ID:id,
            index:sindex
        })
    }

    addMobileProduct() {
        if (this.state.indexState === true && this.state.priceState === true && this.state.nameState === true && this.state.IDState === true && this.state.URLState === true) {
            axios.post('/admAddSYRM', {
                img: this.state.URL,
                title: this.state.name,
                price: this.state.price,
                id: this.state.ID,
                sindex: this.state.index
            })
                .then((res) => {
                    if (res.data === '1') {
                        this.setState({
                            ModalMessage: "添加成功",
                            showHideModal: true
                        });
                        const that = this;

                        function a() {
                            that.setState({
                                ModalMessage: "",
                                showHideModal: false
                            });
                            that.props.history.go(0)
                        }


                        setTimeout(a, 2000);


                    }
                    else if (res.data === '-1') {
                        this.setState({
                            ModalMessage: "添加失败",
                            showHideModal: true,
                        });
                        const that = this;

                        function b() {
                            that.setState({
                                ModalMessage: "",
                                showHideModal: false,
                            });
                        }


                        setTimeout(b, 2000);

                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            this.setState({
                ModalMessage: "请确认填写信息",
                showHideModal: true
            });
            const that = this;

            function a() {
                that.setState({
                    ModalMessage: "",
                    showHideModal: false
                });
            }


            setTimeout(a, 2000);

        }
    }

    DeMobileProduct(img) {
        this.setState({
            showHideConfirm:true,
            img:img
        });
    }

    confirm = value => {
        if(value===true){
            axios.post('/admDeleteSYRM', {
                img: this.state.img
            })
                .then((res) => {
                    if (res.data === '1') {
                        alert( '删除成功');
                        this.props.history.go(0)
                    }
                    else if (res.data === '-1') {
                        alert( '删除失败')
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


    UpMobileProduct(img) {
        if (this.state.indexState === true && this.state.priceState === true && this.state.nameState === true && this.state.IDState === true && this.state.URLState === true) {
            axios.post('/admUpdateSYRM', {
                img: this.state.URL,
                title: this.state.name,
                price: this.state.price,
                id: this.state.ID,
                sindex: this.state.index
            })
                .then((res) => {
                    if (res.data === '1') {
                        this.setState({
                            ModalMessage: "修改成功",
                            showHideModal: true
                        });
                        const that = this;

                        function a() {
                            that.setState({
                                ModalMessage: "",
                                showHideModal: false
                            });
                            that.props.history.go(0)
                        }


                        setTimeout(a, 2000);


                    }
                    else if (res.data === '-1') {
                        this.setState({
                            ModalMessage: "修改失败",
                            showHideModal: true,
                        });
                        const that = this;

                        function b() {
                            that.setState({
                                ModalMessage: "",
                                showHideModal: false,
                            });
                        }


                        setTimeout(b, 2000);

                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            this.setState({
                ModalMessage: "请确认填写信息",
                showHideModal: true
            });
            const that = this;

            function a() {
                that.setState({
                    ModalMessage: "",
                    showHideModal: false
                });
            }


            setTimeout(a, 2000);

        }
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