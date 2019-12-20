import axios from "axios";
import { ORDERS_FETCH } from "./types";
export const orderFetch = () => {
    return dicpatch =>{
    axios.get("http://localhost:3001/orders").then(res=>{
        dicpatch({ type : ORDERS_FETCH ,payload : res.data});
    })}
}
export const orderDelete = id => {
    return dicpatch =>{
    axios.delete("http://localhost:3001/orders/" + id).then(res=>{
        axios.get("http://localhost:3001/orders").then(res=>{
            dicpatch({ type : ORDERS_FETCH ,payload : res.data});
        })
    })}
}