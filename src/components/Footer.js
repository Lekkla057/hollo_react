import React from "react";

const Footer = (props) =>{

    const {company,email}=props;
    return (
<div className="container-fluid" >
    <hr/>
    <div className="text-center title text-uppercase">powered by {company} | contact by email {email}</div></div>
    )
}
export default Footer;