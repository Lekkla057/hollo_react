import React, { Component } from "react";

class Allproduct extends Component {
    constructor(props) {
        super(props);

        // console.log("constructor",this.props);
    }
    showAll(products) {

        console.log(products.allProduct);
        const AllProduct = products.allProduct.map((product) =>
            <div key={product.id} className="col-3  mt-2 text-center" onClick={()=>this.props.selectProduct(product)}>
                <div className="card">
                    <div className="container mt-2">
                    <h3  > {product.productName}</h3>
                    <hr />
                    <p  >{product.unitPrice}</p></div>
                </div>
            </div>
        );

        return (
            <div className="row">
                {AllProduct}
            </div>
        )
    }
    render() {
        const { allProduct } = this.props;
        console.log(allProduct);

        return (
            <div>
                <div className="container-fluid">
                    {this.showAll({ allProduct })}</div>
            </div>
        )
    }

}
export default Allproduct;