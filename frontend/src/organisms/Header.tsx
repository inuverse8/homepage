import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../molecules/SerchBar";
import { HOME_PAGE_TITLE, SECONDARY_BG_COLOR, SECONDARY_TEXT_COLOR } from "../index";


const Header: React.FC = () => {
  return (
    <nav className={`
      ${SECONDARY_BG_COLOR} 
      ${SECONDARY_TEXT_COLOR} 
      p-4 
      flex 
      justify-between`}>

      {/* logo and title */}
      <h1 className="text-xl font-bold">
        {HOME_PAGE_TITLE}
      </h1>

      {/* navigation */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contact</Link>
      </div>

      {/* search form */}
      <SearchForm />
    </nav>
  );
};

export default Header;
