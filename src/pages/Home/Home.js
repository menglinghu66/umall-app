import React, { Component } from 'react'
import Info from "./components/Info/Info"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"
import Header from "../../components/Header/Header"
import { reqHomeBanner, reqHomeGoods } from '../../utils/http'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            //列表数据
            goods: [],
            //轮播图数据
            banner:[]
        }
    }
    componentDidMount(){
        reqHomeGoods().then(res=>{
            this.setState({
                goods:res.data.list[0].content
            })
        })
        reqHomeBanner().then(res=>{
            this.setState({
                banner:res.data.list
            })
        })
    }
    render() {
        let {goods,banner} = this.state
        return (
            <div>
                <Header title="首页"></Header>
                
                {/* 信息 */}
                <Info></Info>

                {/* 轮播图 */}
                <Banner banner={banner}></Banner>

                {/* 导航 */}
                <Nav></Nav>

                {/* <div className="btn" onClick={() => this.push()}>push点完跳转shop</div>
                <div className="btn" onClick={() => this.replace()}>replace点完跳转shop</div> */}

                {/* 列表 */}
                <List  goods={goods}></List>
               
            </div>
        )
    }
}
