import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";
let count=0;
class Monitor extends Component {
   constructor(props){
       super(props);
       this.state = {test:''}
       this.addOrders=this.addOrders.bind(this)
       this.delOrders=this.delOrders.bind(this)
       this.cancelOrders=this.cancelOrders.bind(this)
       this.confirmOrder=this.confirmOrder.bind(this)
       console.log("constructor",this.props.count);
   }
   
    addOrders(product){
      
       
        
        let findOrder= this.state.orders.find(order=> order.product.productId===product.productId);
        if(findOrder){
            findOrder.quatity++;
            
        }
        else{
            this.state.orders.push({product:product,quatity:1});
        }
        
        const totalPrice = this.state.totalPrice+parseInt(product.unitPrice);
        this.setState({totalPrice:totalPrice,orders:this.state.orders}) 
        console.log(product.productId,this.state);
    }
    delOrders(product){
        console.log(product.product.productId);
        
        let findOrder= this.state.orders.find(order=> order.product.productId===product.product.productId);
        let resultOrder=this.state.orders.filter(order=>order.product.productId!==product.product.productId)
        let totalPrice=this.state.totalPrice-(parseInt(product.product.unitPrice)*findOrder.quatity)
        this.setState({totalPrice:totalPrice,orders:resultOrder}) 
       console.log(resultOrder);
    }
    cancelOrders(){
        this.setState({totalPrice:0,orders:[],confirm:false,msg:""})
    }
    confirmOrder(){
       console.log(this.state.orders.length);
       const {totalPrice,orders}=this.state;
       if(this.state.orders.length===0){
        this.setState({totalPrice:0,orders:[],confirm:false,msg:"โปรดเลือกสินค้าค่ะ"})
       }else{
        axios.post("http://localhost:3001/orders",{orderDate:new Date(),totalPrice,orders}).then(res=>{
            this.setState({totalPrice:0,orders:[],confirm:true,msg:"บันทึกรายการสินค้าเรีบยร้อยค่ะ"})
        })
    }
        // axios.post("http://localhost:3001/orders",{orderDate:new Date(),totalPrice,orders}).then(res=>{
        //    if(orders.length){
        // this.setState({totalPrice:0,orders:[],confirm:true,msg:"บันทึกรายการสินค้าเรีบยร้อยค่ะ"})}
        // else{
        //     this.setState({totalPrice:0,orders:[],confirm:false,msg:"โปรดเลือกสินค้าค่ะ"})
        // } 
        //   })

    }

    componentWillMount(){
        console.log("componentWillMount",count);
        //this.setState({date:new Date()})
       //console.log(this.state);
        
      }
      
      
      componentDidMount(){
        
      //  this.props.productsFetch();
       //this.time=setInterval(()=>this.tick(),1000);
       console.log("componentDidMount",count);
       //console.log(this.props);
      
       
       count++
      
      }
    
    
      componentDidUpdate(){
        
        console.log("componentDidUpdate",count);
        count++
      }
    componentWillUpdate(){
      console.log("componentWillUpdate",count);
      // clearInterval(this.time)
    }
    componentWillReceiveProps(){
      console.log("componentWillReceiveProps",count);
      
    }
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate",count);
      return true;
    }
    changestate(){
        this.setState({test:"s"}) 
    }
    render() {
        console.log("render",count);
        
        return (
            <div className="container-fluid ">
                <div className="alert alert-secondary title text-right">{this.state.msg}</div>
                <div className="row">
                    <div className="col-9 ">
                        <a onClick={() => this.props.TestchangeProps(this.props.count)}>กด</a>
                        <a onClick={()=>this.changestate()}>กด state</a>
                        {/* <ProductList products={this.props.products} onAddOrder={this.addOrders}/> */}
                    </div>
                    {/* <div className="col-3 "><Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrders} onCancelOrder={this.cancelOrders} onConfirmOrder={this.confirmOrder}/></div> */}
                    
                </div> 
            </div>
        )
        
    }

}
export default Monitor;