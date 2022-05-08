import React from "react";
import { AiOutlineDashboard, AiOutlinePlus } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { VscChevronDown } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import ContentNav from "../ContentNav/ContentNav";
import "./Admin.css";
const Admin = () => {
  return (
    <section id="dashboard">
      <div className="dashboard-container">
        <aside className="sidebar">
          <div>
            <h1>Dashboard Sidebar</h1>
            <menu>
              <ul>
                <li>
                  <NavLink to="/dashboard">
                    <AiOutlineDashboard /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <Link to="/">
                    <VscChevronDown /> SubMenu
                  </Link>
                </li>
                <li>
                  <NavLink to="/add-product">
                    {" "}
                    <AiOutlinePlus /> Add Product{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manage-products">
                    {" "}
                    <BiCategoryAlt /> Products Management{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/analytics">
                    {" "}
                    <SiGoogleanalytics /> Analytics
                  </NavLink>
                </li>
              </ul>
            </menu>
          </div>
        </aside>
        <div className="dashboard-content">
          <ContentNav />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Admin;
