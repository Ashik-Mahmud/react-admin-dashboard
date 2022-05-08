import React from "react";
import "./addProduct.css";
const AddProduct = () => {
  return (
    <div className="addProduct">
      <div className="title">
        <h2>Add Product</h2>
        <span>you can add product from here</span>
      </div>
      <form action="" className="form-wrapper">
        <div className="input-group">
          <label htmlFor="name">Product Name</label>
          <input type="text" placeholder="Product Name" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="brand">Brand</label>
          <input type="text" placeholder="Product Brand" id="brand" />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input type="text" placeholder="Product Price" id="price" />
        </div>
        <div className="input-group">
          <label htmlFor="textarea">Description</label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="6"
            placeholder="Description."
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="url">URL</label>
          <input type="url" placeholder="Featured Image URL" id="url" />
        </div>
        <div className="btn-group">
          <button>Save Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
