import React from 'react'
import { filterPrice } from '../../../../filters';
import "./Info.styl"

export default function Info(props) {
    let { detail } = props;
    return (
        <div className="Info">
            <h3 className="Info-h3">{detail.goodsname}</h3>
            <div className="Info-div1">￥{filterPrice(detail.price)}</div>
            <div className="Info-div2">￥{filterPrice(detail.market_price)}</div>
            {detail.ishot === 1 ? <div className="Info-div3">热卖</div> : null}
            {detail.isnew === 1 ? <div className="Info-div4">新品</div> : null}
        </div>
    )
}
