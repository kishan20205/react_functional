import React from "react";
import MenuList from "./menu-list";

function Index({ menu = [] }) {
  return (
    <div>
      <MenuList list={menu} />
    </div>
  );
}

export default Index;