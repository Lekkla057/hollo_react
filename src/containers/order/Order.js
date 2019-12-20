import React, { Component } from "react";


import Header from "../../components/Header";
import Monitor from "../../components/monitor/Monitor"
import Footer from "../../components/Footer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { orderFetch, orderDelete } from "../../actions"
class Order extends Component {
    constructor(props){
      super(props);
      //this.state={orders:null};
    }
  componentDidMount(){
   this.props.orderFetch();  
  }
  delOrder(order){
    this.props.orderDelete(order.id); 

  }
  showOrder(){
        


        return this.props.orders&&this.props.orders.map(orders =>{
            const date= new Date(orders.orderDate)
          
            return (
          <div key={orders.id} className="col-4">
              <hr/>
              <p className="text-right">
                  <button className="btn btn-danger btn-sm title" onClick={()=>this.delOrder(orders)}> x </button>
              </p>
        <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
        <ul>
            {orders.orders && orders.orders.map(record=>{
                return(
            <li key={record.product.id}>{record.product.productName} x {record.quatity} = {record.product.unitPrice*record.quatity}</li>
                )
            })}
        </ul>
        <p className="title">total {orders.totalPrice}</p>
          </div>
       ) })

}
    render(){
    
    return (
      <div>
        <Header/>
            <div className="container " >
                <h3>Order</h3>
                <div className="row">
              {this.showOrder()}</div>
            </div>
 
  
       <Footer company="Tong" email="lekkla.tong@gmail.com"/>
      </div>
    );}
  }
  
  function mapStateToProps({orders}) {
    return {orders}
  }

export default connect(mapStateToProps, { orderFetch,orderDelete })(Order);