import React, { Component } from "react";
import Header from "../../components/Header"
import ProductForm from "../../components/product/ProductFrom"
import Footer from "../../components/Footer"
import {connect} from "react-redux";
import {productFetch,productAdd,productUpdate} from "../../actions"
class ProductEdit extends Component {

componentDidMount(){
    console.log(this.props.match);
    
    if(this.props.match.params.id){
        this.props.productFetch(this.props.match.params.id)
    }

}
    render() {
        const {formValues,match,products,productAdd,productUpdate } = this.props;
        console.log(match);

        return (

            <div>
                <Header />
                <div className="container col-5">
                    {match.path.indexOf("add") > 0 && (
                        <div> 
                            <h3>add</h3>
                            {
                                products.save&&(
                                <div className="alert alert-secondary title">{products.msg}</div>
                                )
                            }
                            <ProductForm onProductSubmit={()=>productAdd(formValues)} /></div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div> 
                            <h3>edit</h3>
                            {
                                products.save&&(
                                <div className="alert alert-secondary title">{products.msg}</div>
                                )
                            }
                            <ProductForm onProductSubmit={()=>productUpdate(products.id,formValues)}/></div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}
function mapStateToProps({form,products}) {
   // console.log(form.productForm.values);
    
    return {formValues:form.productForm ? form.productForm.values :null ,products}
}
export default connect(mapStateToProps,{productFetch,productAdd,productUpdate})(ProductEdit);