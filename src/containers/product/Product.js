import React, { Component } from "react";

import ProductList from "../../components/product/ProductList";
import Header from "../../components/Header";

import Footer from "../../components/Footer";


import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions"
class Product extends Component {
    constructor(props){
      super(props);
     
      this.delProduct=this.delProduct.bind(this)
      this.editProduct=this.editProduct.bind(this)
    }
  componentDidMount(){
    this.props.productsFetch()
  }
  delProduct(product){
    // this.props.productDelete(product.id);
        this.props.productDelete(product.id)
  }
  editProduct(product){
      console.log('gg');
      
    this.props.history.push('/products/edit/'+product.id)
  }
    render(){
    
    return (
      <div >
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-6"><h3>Order</h3></div>
                <div className="col-6"><button className="btn btn-success title float-right" onClick={()=>this.props.history.push('/products/add')}>add</button></div>
            </div>
        </div>
        {this.props.products && Array.isArray(this.props.products)&&(
            <ProductList products={this.props.products} onDelProduct={this.delProduct} onEditProduct={this.editProduct}/>
 )}
  
       <Footer company="Tong" email="lekkla.tong@gmail.com"/>
      </div>
    );}
  }
  
  function mapStateToProps({products}) {
    return { products }
  }

export default withRouter(connect(mapStateToProps, { productsFetch,productDelete })(Product));