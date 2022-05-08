import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import "./products.css";
const AllProducts = () => {
  return (
    <section className="products">
      <div className="title">
        <h2>Product Management</h2>
        <span>you can add product management.</span>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>Category</th>
              <th>Price</th>
              <th width={200}>Image</th>
              <th width={100}>Status</th>
              <th width={100}>Edit</th>
              <th width={100}>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Laptop here</td>
              <td>Category</td>
              <td>433$</td>
              <td>
                <img
                  src="https://m.media-amazon.com/images/I/71gUVfWdOvL._AC_SX679_.jpg"
                  alt="product"
                  width={100}
                />
              </td>
              <td>Active</td>
              <td>
                <button>
                  <FaRegEdit />
                </button>
              </td>
              <td>
                <button>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Laptop here</td>
              <td>Category</td>
              <td>433$</td>
              <td>
                <img
                  src="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SX466_.jpg"
                  alt="product"
                  width={100}
                />
              </td>
              <td>Active</td>
              <td>
                <button>
                  <FaRegEdit />
                </button>
              </td>
              <td>
                <button>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Laptop here</td>
              <td>Category</td>
              <td>433$</td>
              <td>
                <img
                  src="https://static-01.daraz.com.bd/p/d9e51c6ee58f0957c12244208caecf00.jpg"
                  alt="product"
                  width={100}
                />
              </td>
              <td>Active</td>
              <td>
                <button>
                  <FaRegEdit />
                </button>
              </td>
              <td>
                <button>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Laptop here</td>
              <td>Category</td>
              <td>433$</td>
              <td>
                <img
                  src="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg"
                  alt="product"
                  width={100}
                />
              </td>
              <td>Active</td>
              <td>
                <button>
                  <FaRegEdit />
                </button>
              </td>
              <td>
                <button>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <select name="page" id="page">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
