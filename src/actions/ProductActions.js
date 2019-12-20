import axios from "axios";
import { PRODUCTS_FETCH,PRODUCT_CREATE, PRODUCT_UPDATE,PRODUCT_FETCH} from "./types";
export const productsFetch = () => {
    return dicpatch =>{
    axios.get("http://localhost:3001/products").then(res=>{
        dicpatch({ type : PRODUCTS_FETCH ,payload : res.data});
    })}
}
export const productFetch = id => {
    console.log(id);
    
    return dicpatch =>{
    axios.get("http://localhost:3001/products/" + id).then(res=>{
      
            dicpatch({ type : PRODUCT_FETCH ,payload : res.data});
    
    })}
}
export const productDelete = id => {
    console.log(id);
    
    return dicpatch =>{
    axios.delete("http://localhost:3001/products/" + id).then(res=>{
        axios.get("http://localhost:3001/products").then(res=>{
            dicpatch({ type : PRODUCTS_FETCH ,payload : res.data});
        })
    })}
}
export const productAdd = values => {
    console.log(values);
    
    return dicpatch =>{
    axios.post("http://localhost:3001/products",values).then(res=>{
        dicpatch({ type : PRODUCT_CREATE ,payload : res.data});
    })}
}
export const productUpdate = (id,values) => {
    console.log(id,values);
    
    return dicpatch =>{
    axios.put("http://localhost:3001/products/"+id,values).then(res=>{
        dicpatch({ type : PRODUCT_UPDATE ,payload : res.data});
    })}
}