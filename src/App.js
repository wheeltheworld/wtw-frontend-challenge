import React from 'react';
import Slider from 'react-slick';
import './styles.css';
import hotels from './hotelsData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const imageSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      {hotels.map(hotel => (
        <div key={hotel.id} className="card">
          <h3>{hotel.name}</h3>
          <Slider {...imageSettings} className="image-slider">
            {hotel.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${hotel.name} ${index}`} />
              </div>
            ))}
          </Slider>
          <p>{hotel.description}</p>
          <div className="price">
            <p>${hotel.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;