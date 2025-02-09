import React, { useEffect, useState } from "react";

function index({ url }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?limit=20&skip=${count * 20}`);
      const data = await response.json();

      if (data && data.products) {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      <div>error.message</div>;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count, url]);
  

  return (
    <div className="flex flex-col products h-full w-full mt-5 mb-5 items-center">
      <div className="flex flex-wrap items-center justify-center gap-5 w-[90vw] max-w-[1200px]">
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className="flex flex-col p-4 items-center justify-between product-container rounded-lg min-h-[270px] w-[250px] transform transition-transform border-2 border-gray-300 shadow-md mb-5 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-[200px] object-cover"
                />
                <p className="pb-2 pt-2 text-center font-semibold">
                  {item.title}
                </p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container mt-16">
        <button
          onClick={() => setCount(count + 1)}
          className=" border-black border-2 p-5 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-900"
        >
          Load more 20
        </button>
      </div>
    </div>
  );
}

export default index;
