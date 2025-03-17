import React from "react";
import { SECONDARY_BG_COLOR, SECONDARY_TEXT_COLOR, HOME_PAGE_TITLE } from "../index";


const Footer: React.FC = () => {
  return (
    <footer className={`${SECONDARY_BG_COLOR} ${SECONDARY_TEXT_COLOR  } text-center p-4 mt-10`}>
      <p>&copy; {new Date().getFullYear()} {HOME_PAGE_TITLE}. All rights reserved.</p>
      <p>
        {/* X */}
        <a 
          href="https://x.com/mochi_dog_phys" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400"
        >
          X
        </a>{" "}
        |{" "}
        
        {/* GitHub */}
        <a 
          href="https://github.com/inuverse8" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
