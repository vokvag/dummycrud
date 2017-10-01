import React, {Component} from 'react';


class CreateItem extends Component{
  constructor(props){
    super(props);
    this.state= {productName: '',productPrice: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange1(e){
    this.setState({
      productName: e.target.value
    })
  }
  handleChange1(e){
    this.setState({
      productPrice: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const products = {
      name: this.state.productName,
      price: this.state.productPrice
    }
    let uri = 'http://localhost:8000/items';
    axios.post(uri, products).then((response) =>{
      browserHistory.push('/display-item');
    });
  }
  render(){
    return(
      <div>
        <h1>Create An Item</h1>
        <form>
          <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                  <label>Item Name:</label>
                  <input type="text" className="form-control"/>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" className="form-control col-md-6"/>
                </div>
            </div>
          </div><br/>
          <div className="form-group">
            <button className="btn btn-primary">Add Item</button>
          </div>
        </form>
      </div>
    )
  }
}


export default CreateItem;
