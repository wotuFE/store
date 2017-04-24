import React, { Component } from 'react'
import './detail.scss'

class DetailView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { detail } = this.props;
        if (!detail) return <div>正在加载中.....</div>
        return (
            <div className="detail">
                <ul className="img-box">
                    <li>
                        <img src={detail.imgUrl} />
                    </li>
                </ul>
                <div className="info">
                    <div className="one">
                        <span>{detail.shopName}</span>
                        <span>{detail.disc}</span>
                    </div>
                    <div className="two">
                        <p>$ {detail.price}</p>
                        <p>
                            剩余数量: 999
                			</p>
                    </div>
                </div>
                <div className="buyNum">
                    <span>购买数量</span>
                    <p>
                        <span onClick={this.props.add} className="add">+</span>
                        <span ref="buyNum" className="num">{this.props.num}</span>
                        <span onClick={this.props.minus} className="minus">-</span>
                    </p>
                </div>
                <div className="buyNum">
                    图文详情
                </div>
                <div className="bottom">
                    {
                        !this.props.shopNum ? '' : <div className="icon-car">
                            <span>{this.props.shopNum}</span>
                        </div>
                    }
                    <div onClick={()=>{this.props.addToCar(detail.id,this.refs.buyNum.innerText
)}} 
className="addCar">加入到购物车</div>
                    <div className="buyNow">立即购买</div>
                </div>
            </div>
        )
    }
}
export default DetailView;