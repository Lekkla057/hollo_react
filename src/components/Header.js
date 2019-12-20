import React, { Component } from "react";
import { Link } from "react-router-dom"
// const Productitem=(props)=>{
//     const {productName,unitPrice} = props;

//     return (
//             <div>
// <p>{productName}</p>
//     <p>{unitPrice}</p>
//             </div>


//     )
// }

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        
    }
    componentDidMount(){
this.timer=setInterval(()=> this.tick(),1000)
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
clearInterval(this.timer);
    }


    tick(){
        this.setState({date: new Date()})
    }
    render() {


        return (
            <div className="container-fluid text-success"> 
            <div className="row">
                <div className="col-8 text-left">Tong Park </div>
                <div className="col-4 text-right">{this.state.date.toLocaleTimeString()}</div>
           </div> <hr/>
           <ul className="list-inline float right">
                <li className="list-inline-item title"><Link to="/">Home</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link to="/orders">Order</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link to="/products">Product</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link to="/about">About</Link></li>
           </ul>
            </div>


        )
    }
}

export default Header;