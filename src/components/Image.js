import { useState } from "react";

const Image = ({ src, alt, width, height }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <>
      {imageLoading && <div className="lds-hourglass"></div>}
      <img
        src={src}
        alt={alt}
        width={width || "auto"}
        height={height || "auto"}
        onLoad={handleImageLoad}
        onError={() => setImageLoading(false)}
        style={{ display: imageLoading ? "none" : "block" }}
      />
    </>
  );
};

export default Image;
