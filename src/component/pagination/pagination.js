import React, {Component} from 'react';
import './pagination.css'


import PureRenderMixin from 'react-addons-pure-render-mixin'


class Pagination extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            activePage: "",
            pageList: [],
            index: 0,
            pageNumber: this.props.pageNumber,
            allNumber: this.props.allNumber
        }
    }


    componentWillMount() {

        this._getPageNumber();
    }

    render() {
        return (
            <div className="pagination">

                <div className="pagination-first" onClick={this.firstPage.bind(this)}>
                    <i className="iconfont icon-prev-arrow"></i>
                </div>
                <div className="pagination-prev" onClick={this.prevPage.bind(this)}>
                    <i className="iconfont icon-left-trangle"></i>
                </div>
                <div className="paginationPage">
                    <div className="pageDiv1 hidePage">
                        <i className="iconfont icon-more"></i>
                    </div>
                    {this.state.pageList.map((item, index) => {
                        return <div
                            key={index}
                            className="pagination-div"
                            onClick={this.changeThisPage.bind(this, index)}>
                            {item}
                        </div>
                    })}
                    <div className="pageDiv2 hidePage">
                        <i className="iconfont icon-more"></i>
                    </div>
                </div>
                <div className="pagination-next" onClick={this.nextPage.bind(this)}>
                    <i className="iconfont icon-right-trangle"></i>
                </div>
                <div className="pagination-last" onClick={this.lastPage.bind(this)}>
                    <i className="iconfont icon-next-arrow"></i>
                </div>

            </div>
        );
    }

    componentDidMount() {
        this._showPageNumber()

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pageNumber: nextProps.pageNumber,
            allNumber: nextProps.allNumber
        });

    }

    shouldComponentUpdate(nextProps, nextState) {
       return true
    }

    /*componentWillUpdate() {
        this._getPageNumber();
    }

    componentDidUpdate() {
        this._showPageNumber()
    }
*/

    _getPageNumber() {
        let pageNumber = this.state.pageNumber;
        let allNumber = this.state.allNumber;
        let number = Math.ceil(allNumber / pageNumber);

        let a = [];
        for (let i = 1; i < number + 1; i++) {
            a.push(i)
        }
        this.setState({
            pageList: a
        })

    }

    _showPageNumber() {
        let list = document.getElementsByClassName("pagination-div");

        let rightDiv = document.querySelector(".pageDiv2");
        let a = list.length - 1;
        for (let i = 0; i < list.length; i++) {
            if (i < 6) {
                list[i].className = "pagination-div"
            }
            else {

                list[i].className = "pagination-div hidePage";
                rightDiv.className = "pageDiv2";
            }

        }
        list[0].className = "pagination-div pageActive";
        list[a].className = "pagination-div";
        list[a].before(rightDiv)

    }


    firstPage() {
        let list = document.getElementsByClassName("pagination-div");
        let rightDiv = document.querySelector(".pageDiv2");
        let leftDiv = document.querySelector(".pageDiv1");
        if (list.length <= 5) {
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div";
            }
            rightDiv.className = "pageDiv2 hidePage";
            leftDiv.className = "pageDiv1 hidePage";
            list[0].className = "pagination-div pageActive";
            this.setState({
                index: 0
            });
            const {getPage} = this.props;
            getPage(0);

        }
        else {
            let a = list.length - 1;
            for (let i = 0; i < list.length; i++) {
                if (i < 6) {
                    list[i].className = "pagination-div"
                }
                else {

                    list[i].className = "pagination-div hidePage";
                    rightDiv.className = "pageDiv2";
                }
            }
            list[0].className = "pagination-div pageActive";
            leftDiv.className = "pageDiv1 hidePage";
            list[a].className = "pagination-div";
            list[a].before(rightDiv);
            this.setState({
                index: 0
            });
            const {getPage} = this.props;
            getPage(0);

        }
    }

    prevPage() {


        let index = this.state.index;
        let list = document.getElementsByClassName("pagination-div");
        let leftDiv = document.querySelector(".pageDiv1");
        let rightDiv = document.querySelector(".pageDiv2");
        let a = list.length - 1;
        let b = list.length - 2;
        let c = list.length - 3;
        if (list.length === 1) {
            list[0].className = 'pagination-div pageActive';
            this.setState({
                index: 0
            });
            const {getPage} = this.props;
            getPage(0);
        }
        else {
            index--;
            if (index >= 0 && index < 3) {
                leftDiv.className = "pageDiv1 hidePage";
                rightDiv.className = "pageDiv2 hidePage";

                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div"
                }
                for (let i = 0; i < list.length; i++) {
                    if (i < 6) {
                        list[i].className = "pagination-div"
                    }
                    else {

                        list[i].className = "pagination-div hidePage";
                        rightDiv.className = "pageDiv2";
                    }

                }
                list[index].className = 'pagination-div pageActive';
                list[a].className = "pagination-div";
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);
            }
            else if (index >= 3 && index < c) {


                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[a].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[index + 1].className = 'pagination-div';
                list[index + 2].className = 'pagination-div';
                list[index].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2";
                list[index - 2].before(leftDiv);
                list[index + 2].after(rightDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);

            }
            else if (index === c) {
                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[a].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[index + 1].className = 'pagination-div';
                list[index].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2 hidePage";
                list[index - 2].before(leftDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);

            }
            else if (index === b) {
                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[a].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[index].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2 hidePage";
                list[index - 2].before(leftDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);

            }
            else if (index === a) {
                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[a].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2 hidePage";
                list[index - 2].before(leftDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);

            }
            else if (index === 0) {
                for (let i = 0; i < list.length; i++) {
                    if (i < 6) {
                        list[i].className = "pagination-div"
                    }
                    else {

                        list[i].className = "pagination-div hidePage";
                        rightDiv.className = "pageDiv2";
                    }

                }
                list[0].className = "pagination-div pageActive";
                leftDiv.className = "pageDiv1 hidePage";
                list[a].className = "pagination-div";
                list[a].before(rightDiv);
                this.setState({
                    index: 0
                });
                const {getPage} = this.props;
                getPage(0);

            }
            else {
                list[0].className = "pagination-div pageActive";

            }
        }


    }

    nextPage() {

        let index = this.state.index;

        let list = document.getElementsByClassName("pagination-div");
        let leftDiv = document.querySelector(".pageDiv1");
        let rightDiv = document.querySelector(".pageDiv2");
        if (list.length === 1) {
            list[0].className = 'pagination-div pageActive';
            this.setState({
                index: 0
            });
            const {getPage} = this.props;
            getPage(0);

        }
        else {
            index++;
            let a = list.length - 1;
            let b = list.length - 2;
            let c = list.length - 3;

            if (index < 3) {
                leftDiv.className = "pageDiv1 hidePage";
                rightDiv.className = "pageDiv2 hidePage";

                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div"
                }
                for (let i = 0; i < list.length; i++) {
                    if (i < 6) {
                        list[i].className = "pagination-div"
                    }
                    else {

                        list[i].className = "pagination-div hidePage";
                        rightDiv.className = "pageDiv2";
                    }

                }
                list[index].className = 'pagination-div pageActive';
                list[a].className = "pagination-div";
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);
            }
            else if (index >= 3 && index < c) {


                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[a].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[index + 1].className = 'pagination-div';
                list[index + 2].className = 'pagination-div';
                list[index].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2";
                list[index - 2].before(leftDiv);
                list[index + 2].after(rightDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);

            }
            else if (index === c) {
                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[a].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[index + 1].className = 'pagination-div';
                list[index].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2 hidePage";
                list[index - 2].before(leftDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);
            }
            else if (index === b) {
                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[a].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[index].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2 hidePage";
                list[index - 2].before(leftDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);
            }
            else if (index === a) {
                for (let i = 0; i < list.length; i++) {
                    list[i].className = "pagination-div hidePage"
                }
                list[0].className = "pagination-div";
                list[index - 1].className = 'pagination-div';
                list[index - 2].className = 'pagination-div';
                list[a].className = 'pagination-div pageActive';
                leftDiv.className = "pageDiv1";
                rightDiv.className = "pageDiv2 hidePage";
                list[index - 2].before(leftDiv);
                this.setState({
                    index: index
                });
                const {getPage} = this.props;
                getPage(index);
            }
            else {
                list[0].className = "pagination-div active";
                rightDiv.className = "pageDiv2 hidePage";
            }
        }


    }

    lastPage() {
        let list = document.getElementsByClassName("pagination-div");
        let leftDiv = document.querySelector(".pageDiv1");
        let rightDiv = document.querySelector(".pageDiv2");
        if (list.length === 1) {
            list[0].className = 'pagination-div pageActive';
            rightDiv.className = "pageDiv2 hidePage";
            leftDiv.className = "pageDiv1 hidePage";
            this.setState({
                index: 0
            });
            const {getPage} = this.props;
            getPage(0);

        }
        else if(list.length === 2){
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div";
            }
            rightDiv.className = "pageDiv2 hidePage";
            leftDiv.className = "pageDiv1 hidePage";
            list[1].className = 'pagination-div pageActive';
            this.setState({
                index: 1
            });
            const {getPage} = this.props;
            getPage(1);

        }
        else if(list.length === 3){
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div";
            }
            rightDiv.className = "pageDiv2 hidePage";
            leftDiv.className = "pageDiv1 hidePage";
            list[2].className = 'pagination-div pageActive';
            this.setState({
                index: 2
            });
            const {getPage} = this.props;
            getPage(2);
        }
        else if(list.length === 4){
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div";
            }
            rightDiv.className = "pageDiv2 hidePage";
            leftDiv.className = "pageDiv1 hidePage";
            list[3].className = 'pagination-div pageActive';
            this.setState({
                index: 3
            });
            const {getPage} = this.props;
            getPage(3);
        }
        else if(list.length === 5){
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div";
            }
            rightDiv.className = "pageDiv2 hidePage";
            leftDiv.className = "pageDiv1 hidePage";
            list[4].className = 'pagination-div pageActive';
            this.setState({
                index: 4
            });
            const {getPage} = this.props;
            getPage(4);
        }
        else if(list.length === 6){
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div";
            }
            rightDiv.className = "pageDiv2 hidePage";
            leftDiv.className = "pageDiv1 hidePage";
            list[5].className = 'pagination-div pageActive';
            this.setState({
                index: 5
            });
            const {getPage} = this.props;
            getPage(5);
        }
        else {
            let a = list.length - 1;

            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div hidePage"
            }
            list[0].className = "pagination-div";
            list[a - 1].className = 'pagination-div';
            list[a - 2].className = 'pagination-div';
            list[a].className = 'pagination-div pageActive';
            leftDiv.className = "pageDiv1";
            rightDiv.className = "pageDiv2 hidePage";
            list[a - 2].before(leftDiv);
            this.setState({
                index: a
            });
            const {getPage} = this.props;
            getPage(a);
        }
    }

    changeThisPage(index) {
        let list = document.getElementsByClassName("pagination-div");
        let leftDiv = document.querySelector(".pageDiv1");
        let rightDiv = document.querySelector(".pageDiv2");
        let a = list.length - 1;
        let b = list.length - 2;
        let c = list.length - 3;

        if (index < 3) {
            leftDiv.className = "pageDiv1 hidePage";
            rightDiv.className = "pageDiv2 hidePage";

            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div"
            }
            for (let i = 0; i < list.length; i++) {
                if (i < 6) {
                    list[i].className = "pagination-div"
                }
                else {

                    list[i].className = "pagination-div hidePage";
                    rightDiv.className = "pageDiv2";
                }

            }
            list[index].className = 'pagination-div pageActive';
            list[a].className = "pagination-div";
            const {getPage} = this.props;
            getPage(index);

            this.setState({
                index: index
            });


        }
        else if (index >= 3 && index < c) {
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div hidePage"
            }
            list[0].className = "pagination-div";
            list[a].className = "pagination-div";
            list[index - 1].className = 'pagination-div';
            list[index - 2].className = 'pagination-div';
            list[index + 1].className = 'pagination-div';
            list[index + 2].className = 'pagination-div';
            list[index].className = 'pagination-div pageActive';
            leftDiv.className = "pageDiv1";
            rightDiv.className = "pageDiv2";
            list[index - 2].before(leftDiv);
            list[index + 2].after(rightDiv);
            const {getPage} = this.props;
            getPage(index);
            this.setState({
                index: index
            });

        }
        else if (index === c) {
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div hidePage"
            }
            list[0].className = "pagination-div";
            list[a].className = "pagination-div";
            list[index - 1].className = 'pagination-div';
            list[index - 2].className = 'pagination-div';
            list[index + 1].className = 'pagination-div';
            list[index].className = 'pagination-div pageActive';
            leftDiv.className = "pageDiv1";
            rightDiv.className = "pageDiv2 hidePage";
            list[index - 2].before(leftDiv);
            const {getPage} = this.props;
            getPage(index);
            this.setState({
                index: index
            })

        }
        else if (index === b) {
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div hidePage"
            }
            list[0].className = "pagination-div";
            list[a].className = "pagination-div";
            list[index - 1].className = 'pagination-div';
            list[index - 2].className = 'pagination-div';
            list[index].className = 'pagination-div pageActive';
            leftDiv.className = "pageDiv1";
            rightDiv.className = "pageDiv2 hidePage";
            list[index - 2].before(leftDiv);
            const {getPage} = this.props;
            getPage(index);
            this.setState({
                index: index
            })
        }

        else if (index === a) {
            for (let i = 0; i < list.length; i++) {
                list[i].className = "pagination-div hidePage"
            }
            list[0].className = "pagination-div";
            list[index - 1].className = 'pagination-div';
            list[index - 2].className = 'pagination-div';
            list[a].className = 'pagination-div pageActive';
            leftDiv.className = "pageDiv1";
            rightDiv.className = "pageDiv2 hidePage";
            list[index - 2].before(leftDiv);
            const {getPage} = this.props;
            getPage(index);
            this.setState({
                index: index
            })
        }


    }


}


export default Pagination