import React from "react";
import Selection from "./components/accordian/index";
import Rating from "./components/rating/index";
import ImageSlider from "./components/image-slider/index";
import LoaderMore from "./components/loader-more/index";
import TreeView from "./components/tree-view/index";
import Menus from "./components/tree-view/data"

function App() {
  return (
    <>
      {/* <Selection /> */}
      {/* <Rating noOfStars={7}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list?page=2&limit="} limit={7}/> */}
      {/* <LoaderMore url={"https://dummyjson.com/products"}/> */}
      <TreeView menu={Menus}/>
    </>
  );
}

export default App;
