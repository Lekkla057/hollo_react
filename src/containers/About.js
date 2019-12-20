import React, { Component } from "react";


import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor"
import Footer from "../components/Footer";

class About extends Component {
    constructor(props){
      super(props);
      
    }
  
  
    render(){
    
    return (
      <div>
        <Header/>
            <div className="container col-5" >
                <h3>Hi</h3>
                <p className="title text-justify col-4">ของดี กินอร่อย เเข็งเเรง</p>
                <h4 className="text-success"> From Tong park</h4>
            </div>
 
  
       <Footer company="Tong" email="lekkla.tong@gmail.com"/>
      </div>
    );}
  }
  

export default About;