// 头部
import React, { Component } from 'react';
import './Headercss.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <div className="Header">
                <div className="Header-container container">
                    <div className="Header-l fl">
                        <span>小米商城</span>
                        <span className="sep">|</span>
                        <span>MIUI</span>
                        <span className="sep">|</span>
                        <span>IoT</span>
                        <span className="sep">|</span>
                        <span>云服务</span>
                        <span className="sep">|</span>
                        <span>天星数科</span>
                        <span className="sep">|</span>
                        <span>有品</span>
                        <span className="sep">|</span>
                        <span>小爱开放平台</span>
                        <span className="sep">|</span>
                        <span>企业团购</span>
                        <span className="sep">|</span>
                        <span>资质证照</span>
                        <span className="sep">|</span>
                        <span>协议规则</span>
                        <span className="sep">|</span>
                        <span className="topbar-download">下载app</span>
                        <span className="sep">|</span>
                        <span>智能生活</span>
                        <span className="sep">|</span>
                        <span className="J_siteGlobalRegion">Select Location</span>
                    </div>
                    <div className="Header-r fr">
                        <span>登录</span>
                        <span className="sep">|</span>
                        <span>注册</span>
                        <span className="sep">|</span>
                        <span>消息通知</span>
                        <div className="cart-mini">
                            <i></i>
                            <i>购物车（0）</i>
                            <div className="J_miniCartMenu">
                                <span>购物车中还没有商品，赶紧选购吧！</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
