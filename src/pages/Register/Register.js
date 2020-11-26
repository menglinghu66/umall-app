import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { reqRegister } from '../../utils/http'
import { successAlert } from "../../utils/alert"

export default class register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    submit() {
        console.log(this.state.user);
        reqRegister(this.state.user).then(res => {
            if (res.data.code   === 200) {
                successAlert(res.data.msg)
                this.props.history.push("/login")
            }

        })
    }
    render() {
        return (
            <div>
                <Header title="注册" back></Header>
                <div className="pass">
                    手机号：<input type="text" onChange={(e) => this.changeUser(e, "phone")} />
                </div>
                <div className="pass">
                    昵称：<input type="text" onChange={(e) => this.changeUser(e, "nickname")} />
                </div>
                <div className="pass">
                    密码：<input type="text" onChange={(e) => this.changeUser(e, "password")} />
                </div>
                <div className="btn" onClick={() => this.submit()}>登录</div>
            </div>
        )
    }
}
