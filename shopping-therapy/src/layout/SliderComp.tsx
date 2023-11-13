import Slider from "react-slick";

export default function SliderComp() {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    //autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="p-6 m-8">
            <div className="text-5xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              reprehenderit incidunt eius eveniet possimus officiis quod cumque
              doloremque dignissimos exercitationem porro ut unde placeat, nisi
              obcaecati vero, iusto beatae consequatur?
            </div>
            <div className="border rounded-full cursor-pointer text-3xl w-48 h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>

            <img
              className="w-56 h-72"
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png"
            />
          </div>
        </div>

        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
