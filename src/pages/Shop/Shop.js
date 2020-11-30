import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import "./Shop.styl"
import radio_nor from "../../assets/images/radio_nor.png"
import radio_hig from "../../assets/images/radio_hig.png"
import { reqShopEdit, reqShopList, reqShopDel } from '../../utils/http'
import { confirmAlert, successAlert } from '../../utils/alert'
import { filterPrice } from "../../filters"
export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            //购物车的list
            list: [],
            //编辑状态
            isEdit: false,
            //全选状态
            isAll: false
        }
    }
    componentDidMount() {
        this.init()

    }
    init() {
        //发请求
        reqShopList().then(res => {
            if (res.data.code === 200) {
                let list = res.data.list ? res.data.list : []
                //添加选中的状态
                list.forEach(item => {
                    item.checked = false
                })
                this.setState({
                    list: list
                }, () => {
                    console.log(this.state.list);
                })
            }
        })
    }
    //购物车+ 
    add(id) {
        reqShopEdit({
            id: id,
            type: 2
        }).then(res => {
            if (res.data.code === 200) {
                this.init()
            }
        })
    }
    //购物车 - 
    sub(id, num) {
        if (num <= 1) {
            successAlert("亲，宝贝不能再少了！")
            return;
        }
        reqShopEdit({
            id: id,
            type: 1
        }).then(res => {
            if (res.data.code === 200) {
                this.init()
            }
        })
    }
    //点了编辑
    edit() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    //点了删除
    del(id) {
        confirmAlert(() => {
            reqShopDel(id).then(res => {
                if (res.data.code === 200) {
                    this.init()
                }
            })
        })

    }
    //点了某一条数据
    checkOne(index) {
        let { list } = this.state;
        list[index].checked = !list[index].checked;
        this.setState({
            list: list,
            //全选：如果list的每条数据的checked都是true,那么isAll 就是true;否则就是false
            isAll: list.every(item => item.checked)
        })
    }
    //点了全选
    checkedAll() {
        this.setState({
            isAll: !this.state.isAll,
            list: this.state.list.map(item => {
                item.checked = !this.state.isAll
                return item
            })
        })
    }
    render() {
        //展示
        let { list, isEdit, isAll } = this.state

        //计算总价
        let sum=0;
        list.forEach(item=>{
            if(item.checked){
                sum+=item.price*item.num
            }
        })

        return (
            <div className="shop">
                <Header title="购物车"></Header>
                {/* 购物车没有内容 */}
                {
                    list.length === 0 ? <div>购物车空空，快去逛街吧</div> : null
                }

                {
                    list.map((item, index) => {
                        return (
                            <div className="item" key={item.id}>
                                {/* 使用isEdit */}
                                <div className={isEdit ? "inner inner-show-del" : "inner"}>
                                    <img className="shop-img1" onClick={() => this.checkOne(index)} src={item.checked ? radio_hig : radio_nor} alt="" />
                                    <div className="info">
                                        <img src={item.img} alt="" className="shop-img2"/>
                                        <h3 className="shop-h3">{item.goodsname}</h3>
                                        
                                        <div className="shop-price">价格：{filterPrice(item.price)}</div>
                                        <div>
                                            <button className="shop-btn1" onClick={() => this.sub(item.id, item.num)}>-</button>
                                            {item.num}
                                            <button className="shop-btn2" onClick={() => this.add(item.id)}>+</button>
                                        </div>
                                        <div>总价：{filterPrice(item.price * item.num)}</div>
                                    </div>
                                    <div className="del" onClick={() => this.del(item.id)}>删除</div>
                                </div>
                            </div>
                        )
                    })
                }



                {/* 底部操作区 */}
                <div className="footer">
                    <div className="quanxuan" onClick={() => this.checkedAll()}>
                        {/*使用isAll */}
                        <img src={isAll ? radio_hig : radio_nor} alt="" />
                        <div>全选</div>
                    </div>
                    <div className="edit" onClick={() => this.edit()}>
                        <img src={isEdit ? radio_hig : radio_nor} alt="" />
                        <div>编辑</div>
                    </div>
                    <div className="price">
                        总价：{filterPrice(sum)}
                    </div>
                </div>
            </div>
        )
    }
}
