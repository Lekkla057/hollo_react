import React, { Component } from "react";
import Productitem from "./Productitem"
class ProductList extends Component{


    showProducts(){
        
        console.log(this.props);
    
            return this.props.products&&this.props.products.map(products =>(
                <Productitem key={products.productId}  product={products} onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct}/>
            ))
   
    }

    render(){
        return(
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}
export default ProductList;