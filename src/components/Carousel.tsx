import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const sliders = [
    {
      title: "Lorem ipsum dolor sit amet",
      image: "https://picsum.photos/1920/1080",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      image: "https://picsum.photos/1920/1080",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings} className="w-full overflow-hidden h-[100vh]">
        {sliders.map((slider, i) => (
          <div key={i} className="h-screen relative">
            <img
              src={slider.image}
              alt="carousel"
              className="w-full h-full object-cover bg-center bg-no-repeat absolute top-0 left-0 grayscale-[60%]"
            />
            <div className="absolute max-w-screen-xl mx-auto py-60 px-20">
              <h1 className="text-6xl font-bold text-white py-3">
                {slider.title}
              </h1>
              <h2 className="text-xl font-normal text-white">
                {slider.subtitle}
              </h2>
              <button className="bg-[#EC730D] text-white px-4 py-2 mt-5">
                Decouvrir
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
