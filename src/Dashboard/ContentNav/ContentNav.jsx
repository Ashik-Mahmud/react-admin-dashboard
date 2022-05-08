import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";
const ContentNav = () => {
  return (
    <div className="content-nav">
      <div className="menu-icon">
        <AiOutlineMenuFold /> Dashboard
      </div>
      <div className="search">
        <input type="search" placeholder="Search Anything.." id="search" />
        <button>
          <BiSearch />
        </button>
      </div>
      <div className="profile">
        <div className="avatar">
          <img
            src="https://avatars.githubusercontent.com/u/67781689?s=48&v=4"
            alt=""
          />
        </div>
        <div className="text">
          <div>
            <span>Ashik Mahmud</span>
            <small>ashik@gmail.com</small>
          </div>
          <VscChevronDown />
        </div>
      </div>
    </div>
  );
};

export default ContentNav;
