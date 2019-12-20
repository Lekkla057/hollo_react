import React, { Component } from "react";
// const Productitem=(props)=>{
//     const {productName,unitPrice} = props;

//     return (
//             <div>
// <p>{productName}</p>
//     <p>{unitPrice}</p>
//             </div>


//     )
// }

class Productitem extends Component {
    constructor(props) {
        super(props);
        console.log('constructor|' + props.product);

    }
    doSomething(productName) {
        console.log(productName);

    }
    render() {
        const { productName, unitPrice } = this.props.product;
        return (
            <div className="col-4">
                <p>{productName} </p>
                <p>{unitPrice}</p>
                {this.props.onAddOrder &&
                    <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>ซื้อ</button>
                }
                {(this.props.onDelProduct||this.props.onEditProduct) &&

                    <button className="btn btn-block btn-success title" onClick={() => this.props.onEditProduct(this.props.product)}>แก้ไข</button>
                }
                {(this.props.onDelProduct||this.props.onEditProduct) &&

<button className="btn btn-block btn-danger title" onClick={() => this.props.onDelProduct(this.props.product)}>ลบ</button>
}
            </div>


        )
    }
}

export default Productitem;