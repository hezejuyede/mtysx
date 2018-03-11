import React, {Component} from 'react';
import './Nologin.css';
import img from '../../common/imgs/logo.png';
import {NavLink} from 'react-router-dom';


class NoLogin extends Component {
    render() {
        return (
            <div className="NoLogin">
                <div className="NoLogin-top">
                    <img src={img} alt=""/>
                </div>
                <h1>你好，只有登录才能查看管理系统</h1>
                <NavLink to="/indexLogin">点击前往去往登录页</NavLink>
            </div>
        );
    }
}

export default NoLogin;
