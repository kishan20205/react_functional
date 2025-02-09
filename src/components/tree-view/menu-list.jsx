import React from "react";
import MenuItem from "./menu-item";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem list={listItem}/>)
        : null}
    </ul>
  );
}

export default MenuList;
