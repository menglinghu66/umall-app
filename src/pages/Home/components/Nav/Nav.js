import React from 'react'
import "./Nav.styl"
import { NavLink } from "react-router-dom"
import js from "../../../../assets/images/js.png"

export default function Nav() {
    return (
        <div className="nav">
            <ul className="nav-ul">
                <li className="nav-li">
                    <img src={js} className="nav-span" />
                    <NavLink to="/index/shop" className="nav-p">限时抢购</NavLink>
                </li>
                <li className="nav-li">
                    <img src={js} className="nav-span" />
                    <NavLink to="/index/shop" className="nav-p">积分商城</NavLink>
                </li>
                <li className="nav-li">
                    <img src={js} className="nav-span" />
                    <NavLink to="/index/mine" className="nav-p">联系我们</NavLink>
                </li>
                <li className="nav-li">
                    <img src={js} className="nav-span" />
                    <NavLink to="/index/cate" className="nav-p">商品分类</NavLink>
                </li>
            </ul>

        </div>
    )
}
