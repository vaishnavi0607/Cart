import React, { Component } from 'react';

class AddItem extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state = {
     productName:"",
     productPrice:""
    }
  }
  render() {
    return (
    <form className='row mb-5' onSubmit={(e) => {e.preventDefault();
        this.props.addItem(this.state.productName,Number(this.state.productPrice))}}>
      <div className="mb-3 col-6" >
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="name"
          name = "productName"
          onChange={(e)=>{
            this.setState({productName:e.currentTarget.value})
          }}
          value={this.productName}

        />
        <label htmlFor="inputPassword5" className="form-label mt-3">
          Price
        </label>
        <input
          type="number"
          id="price"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          name="productPrice"
          onChange={(e)=>{
            this.setState({productPrice:Number(e.currentTarget.value)})
          }}
          value={this.productPrice}
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and
          must not contain spaces, special characters, or emoji.
        </div>
        <button type='submit' className='btn btn-primary' >Add</button>
      </div></form>
    );
  }
}

export default AddItem;
