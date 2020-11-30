import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import { successAlert } from '../../utils/alert'
import { reqLogin } from '../../utils/http'

export default class login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
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
    login(){
        reqLogin(this.state.user).then(res=>{
            if (res.data.code === 200) {
                sessionStorage.setItem("userInfo",JSON.stringify(res.data.list))
                successAlert(res.data.msg)
                this.props.history.push("/index")
            }
        })
    }
    render() {
        return (
            <div>
                <Header title="登录" register></Header>
                <div className="pass">
                    账号：<input type="text" onChange={(e) => this.changeUser(e, "phone")} />
                </div>
                <div className="pass">
                    密码：<input type="text" onChange={(e) => this.changeUser(e, "password")} />
                </div>
                <div className="btn" onClick={()=>this.login()}>登录</div>
            </div>
        )
    }
}
