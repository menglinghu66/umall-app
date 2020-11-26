import React, { Component } from 'react'
import Header from "../../components/Header/Header"

export default class login extends Component {
    render() {
        return (
            <div>
              <Header title="登录" register></Header>
              <div className="pass">
                    账号：<input type="text"/>
                </div>
                <div className="pass">
                    密码：<input type="text"/>
                </div>
                <div className="btn">登录</div>
            </div>
        )
    }
}
