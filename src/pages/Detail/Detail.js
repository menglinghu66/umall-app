import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import querystring from "querystring"
import { reqDetail } from '../../utils/http';
import Info from "./components/Info/Info"
import "./Detail.styl"
import Picker from './components/Picker/Picker';

export default class Detail extends Component {
    constructor() {
        super()
        this.state = {
            detail: {},
            isshow: false
        }
        this.des = React.createRef()
    }
    componentDidMount() {
        console.log(this.props);
        let str = this.props.location.search
        let result = querystring.parse(str.slice(1))
        console.log(result);
        //ajax
        reqDetail(result.id).then(res => {
            let list = res.data.list[0]
            list.specsattr = JSON.parse(list.specsattr)
            this.setState({
                detail: list
            }, () => {
                this.des.current.innerHTML = this.state.detail.description
            })


        })
    }
    show() {
        this.setState({
            isshow: true
        })
    }
    hide() {
        this.setState({
            isshow: false
        })
    }
    render() {
        let { detail, isshow } = this.state
        return (
            <div className="detail">
                <Header title="商品详情" back></Header>
                <img src={detail.img} alt="" />
                {detail.goodsname ? <Info detail={detail}></Info> : null}
                <div ref={this.des}></div>
                <div className="footer">
                    <div className="btn2" onClick={() => this.show()}>加入购物车</div>
                </div>
                {detail.goodsname && isshow ? <Picker detail={detail} hide={() => this.hide()}></Picker> : null}
            </div>
        )
    }
}
