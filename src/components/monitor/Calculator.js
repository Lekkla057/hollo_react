import React, { Component } from "react";



class Calculator extends Component {
    showOrders(orders){
        if(!orders || orders.length===0){
            return <li className="tect-right text-muted title">No Order</li>
        }
        else{
            return orders.map(orders =>{
                return(
            <li key={orders.product.productId}className="tect-right text-success title">
            {orders.product.productName}x{orders.quatity} = {(orders.product.unitPrice*orders.quatity)}
            <button className="btn btn-light btn-sm" onClick={()=>this.props.onDelOrder(orders)}>x</button>
                    </li>
                )    })
        }
    }
    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr/>
                <ul className="list-unstyled">
                  {this.showOrders(orders)}
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title" onClick={()=>this.props.onConfirmOrder()}>ยืนยัน</button>
                <button className="btn btn-block btn-secondary title" onClick={()=>this.props.onCancelOrder()}>ยกเลิก</button>
            </div>
        )
    }

}
export default Calculator;