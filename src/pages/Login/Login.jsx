// 登录
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Logincss.css';
import logo from './img/logo.png';
import xiala from './img/xiala.png';
import { Input, Button, message } from 'antd';
import cookie from 'react-cookies'

class Login extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            switchValue: "login",
            account: "",
            password: ""
        }
    }
    switch(key) {
        this.setState({
            switchValue: key
        })
        console.log(this.state)
    }
    onzhanghaoch(e) {
        this.setState({
            account: e.target.value
        })
    }
    onmimach(e) {
        this.setState({
            password: e.target.value
        })
    }
    denglu() {
        const { account, password } = this.state;
        let acc = "admin"
        let pas = "123"
        if (account === "" || password === "") {
            message.warning('账号密码不能为空');
            return;
        }
        if (account !== acc) {
            message.error('账号不存在');
            return;
        }
        if (password !== pas) {
            message.error('密码错误');
            return;
        }
        if (acc === account && pas === password) {
            message.success('登录成功');
            let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000);//一天
            cookie.save('account', account, { expires: inFifteenMinutes });
            cookie.save('password', password, { expires: inFifteenMinutes });
            this.props.history.push('/index')
        }

    }
    render() {
        const { switchValue, account, password } = this.state;
        return (
            <div className="Login">
                <div className="Login-img"></div>
                <div className="Login-r">
                    <div className="Login-r-top">
                        <div className="login-logo">
                            <img src={logo} alt="" />
                            <span>小米账号</span>
                        </div>
                        <div className="login-bottom">
                            <ul>
                                <li><span>用户协议</span></li>
                                <li><span>隐私政策</span></li>
                                <li><span>帮助中心</span></li>
                                <li className="login-xiala">
                                    <span>中文(简体)</span>
                                    <i><img src={xiala} alt="" /></i>
                                    <ul>
                                        <li>中文(简体)</li>
                                        <li>英文</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Login-r-cro">
                        <div className="mi-layout__card">
                            <ul className="clearfix">
                                <li onClick={this.switch.bind(this, "login")} className={switchValue === "login" ? "tabs-tab tabs-tab-active" : "tabs-tab"}>登录</li>
                                <li onClick={this.switch.bind(this, "zhuce")} className={switchValue === "zhuce" ? "tabs-tab tabs-tab-active" : "tabs-tab"}>注册</li>
                            </ul>
                            {
                                switchValue === "login" ?
                                    <div className="mi-password-field">
                                        <Input onChange={this.onzhanghaoch.bind(this)} value={account} placeholder="请输入账号" />
                                        <Input.Password onPressEnter={this.denglu.bind(this)} onChange={this.onmimach.bind(this)} value={password} placeholder="请输入密码" />
                                        <Button onClick={this.denglu.bind(this)} type="primary">登录</Button>
                                        <div className="mi-form-actions">
                                            <span>忘记密码？</span>
                                            <span>手机号登录</span>
                                        </div>
                                    </div> :
                                    <div className="mi-password-field">
                                        <Input placeholder="国家/地区" />
                                        <Input placeholder="请输入手机号" />
                                        <Input placeholder="短信验证码" />
                                        <Button type="primary">登录</Button>
                                        <div className="mi-form-actions">
                                            <span>收不到短信？</span>
                                        </div>
                                    </div>
                            }
                            <div className="mi-sns-login">
                                <p>其他方式登录</p>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Login--r-button">
                        小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);
