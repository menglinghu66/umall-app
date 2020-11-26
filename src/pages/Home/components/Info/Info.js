import React from 'react'
import logo from "../../../../assets/images/xiao.png"
import "./Info.styl"

export default function Info() {
    return (
        <div className="info">
           <img src={logo} className="info-logo"/>
           <input type="search" className="info-search" placeholder="输入商品" />
        </div>
    )
}
