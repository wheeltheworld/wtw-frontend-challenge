import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFormattedPrice } from "../utils/priceStrategy";
import { useFetchHotelsData } from "../hooks/useFetchHotelsData";
import Image from "../components/Image";

const Hotels = () => {
  const imageSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
  };

  const { hotels, isLoading, IsError } = useFetchHotelsData();

  return (
    <>
      {IsError && <p>Something went wrong. Please try again later.</p>}
      {isLoading ? (
        <div className="lds-hourglass"></div>
      ) : (
        <ul className="card-container">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="card">
              <h3>{hotel.name}</h3>
              <Slider {...imageSettings} className="image-slider">
                {hotel.images
                  .slice(0, MAX_IMAGE_TO_SHOW)
                  .map((image, index) => (
                    <div key={index}>
                      <Image src={image} alt={`${hotel.name} ${index}`} />
                    </div>
                  ))}
              </Slider>
              <p className="card__description">{hotel.description}</p>
              <div className="price">
                <p>{getFormattedPrice(hotel.price, hotel.priceStrategy)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Hotels;

const MAX_IMAGE_TO_SHOW = 10;
