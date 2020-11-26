import React from 'react'
import "./List.styl"
import { Link } from "react-router-dom"

export default function List(props) {
    let { goods } = props
    return (
        <div className="list">
            {
                goods.map(item => {
                    return (
                        <Link to={"/detail?id=" + item.id} className="item-list" key={item.id}>
                            <img className="list-img" src={item.img} alt="" />
                            <span className="list-span">{item.goodsname}</span>
                            <p className="list-p">￥{item.price} </p>
                            <div className="btn1">立即抢购</div>
                        </Link>
                    )
                })
            }



        </div>
    )
}
