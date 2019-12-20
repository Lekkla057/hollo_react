import React, { Component } from "react";


import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor"
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { productsFetch } from "../actions"
import axios from "axios";
import AllProduct from "../components/product/Allproduct"
class Home extends Component {


  constructor(props) {
    super(props);
    this.state = { count: 0, product: null, value: null, id: '', productname: '', price: '' }
    this.testchangeProps = this.testchangeProps.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log("constructor",count);




  }




  componentWillMount() {
    let allProduct = []
    axios.get("http://localhost:3001/products").then(res => {

      allProduct = res.data;
      //console.log(allProduct);
      this.setState({ product: allProduct })
      

    })
    // console.log("componentWillMount",count);
    this.setState({ date: new Date() })
    //console.log(this.state);

  }


  componentDidMount() {

    //  this.props.productsFetch();
    //this.time=setInterval(()=>this.tick(),1000);
    // console.log("componentDidMount",count);
    //console.log(this.props);
    //  this.setState({count:count})



  }

  testchangeProps(count) {
    count++
    this.setState({ count: count })
  }

  selectProduct(productSelect) {

  

    this.setState({ id: productSelect.id, productname: productSelect.productName, price: productSelect.unitPrice })


  }
  handleChange(e) {
    
 

    e.preventDefault();
   
   

    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(event) {
    //salert('A name was submitted: ' + this.state);
    const { id, productname, price } = this.state
   
    const objProduct = { id: id, productName: productname, unitPrice: price }


    if (id != "") {


      axios.put("http://localhost:3001/products/" + id, objProduct).then(res => {
        axios.get("http://localhost:3001/products").then(res => {
          this.setState({ product: res.data })
        })

      })
    } else {
      alert("select order")
    }

    event.preventDefault();
  }
  render() {
    //console.log("render",this.state.date);
    //console.log(this.props);
    const { count, product, select, id, productname, price } = this.state
   
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-8">
            {product && (
              <AllProduct allProduct={product} selectProduct={this.selectProduct}/>
            )}

            {/* <Monitor count={count} TestchangeProps={this.testchangeProps}/> */}
          </div><div className="col-4 text-center">
            <form onSubmit={this.handleSubmit}>
              <label>
                product name :

                  <input name="productname" type="text"  value={this.state.productname} onChange={this.handleChange} required />

              </label>
              <br />
              <label>
                price :

                <input name="price" type="number" value={this.state.price} onChange={this.handleChange} required/>

              </label><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <Footer company="Tong" email="lekkla.tong@gmail.com" />
      </div>
    );
  }

}
//// 1/////
// function mapStateToProps(state) {
//   console.log(state);
//   return {products:state.products}
// }

/////2/////
function mapStateToProps({ products }) {
  return { products }
}


export default connect(mapStateToProps, { productsFetch })(Home);
