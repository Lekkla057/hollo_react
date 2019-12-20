import React, { Component } from "react";
import { reduxForm , Field } from "redux-form";
import FormField from "../common/FormField";
import {formFields }from "./ProductFieldForm";
import {connect} from "react-redux";
class ProductForm extends Component {

renderFields(formFields){
    

    return formFields.map(({label,name,type,required})=>{
        return(
        <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
        )
    })

}

render(){
    const {onProductSubmit}=this.props
    return(
        <div>
            <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                {this.renderFields(formFields)}
                <button className="btn btn-info btn-block" type="submit">save</button>
            </form>
        </div>
    )
}

}
function validate(values) {
    console.log(values);
    
    const errors={};
    formFields.forEach(({name,required})=>{
        if(!values[name]&&required){
            errors[name]='กรุณากรอกข้อมูลด้วย'
        }
        
    })

return errors;

}
function mapStateToProps({products}) {
  if(products&&products.id){
  
    return { initialValues:products };
}else{
    return {};
}}

ProductForm = reduxForm({ validate,form:"productForm"})(ProductForm)
export default connect(mapStateToProps)(ProductForm);