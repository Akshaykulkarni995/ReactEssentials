import React from "react";

const Tabcomponents = ({children, onSelect}:any) => {
  return (
    <li>
      <button className="active" onClick={onSelect}>{children}</button>
    </li>
  );
};

export default Tabcomponents;
