import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import querystring from "querystring"

export default class Detail extends Component {
    componentDidMount(){
        console.log(this.props);
        let str = this.props.location.search
        let result = querystring.parse(str.slice(1))
        console.log(result);
        //ajax
    }
    render() {
        return (
            <div>
              <Header title="商品详情" back></Header>
            </div>
        )
    }
}
