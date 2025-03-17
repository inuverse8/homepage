import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={`flex`}>
      <Input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <Button 
        label="Search" 
        onClick={() => console.log(query)} 
      />
    </div>
  );
};

export default SearchBar;
