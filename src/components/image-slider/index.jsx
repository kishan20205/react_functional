import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function index({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImg(geturl) {
    try {
      setLoading(true);

      const response = await fetch(geturl + limit);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  }

  function nextImg(currentSlide) {
    setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1);
    console.log(images.length)
  }

  function prevImg(currentSlide) {
    setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide - 1);
  }

  useEffect(() => {
    if (url !== "") fetchImg(url);
  }, [url]);

  console.log(images);
  

  if (loading) {
    return <div>Loading data ! please wait !</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occur {errorMsg}</div>;
  }

  return (
    <div className="container h-screen w-full flex items-center justify-center">
      <div className="image-box h-[50vh] w-[50vw] flex items-center justify-between">
        <FaArrowCircleLeft
          onClick={() => prevImg(currentSlide)}
          className="ml-5 mr-5 text-2xl"
        />
        <div className="h-full w-full flex items-center justify-center overflow-hidden relative">
          {images && images.length
            ? images.map((imageItem, index) => (
                <img
                  key={imageItem.id}
                  src={imageItem.download_url}
                  alt={imageItem.download_url}
                  className={`absolute duration-300
                    ${currentSlide === index ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))
            : null}
        </div>
        <FaArrowCircleRight
          onClick={() => nextImg(currentSlide)}
          className="mr-5 ml-5 text-2xl"
        />
      </div>
    </div>
  );
}

export default index;
