
import Navbar from "../../Sharedpages/Header/Navbar";
const Slider = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="carousel w-full h-[500px] lg:h-[400px]">
        <div id="item1" className="carousel-item w-full">
        <div className="hero bg-gray-300 lg:px-32">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/8MhNM7P/slider6.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl font-bold"><span className="text-red-500">20% Discount</span> Zara Men&apos; Collection</h1>
                <p className="py-6">
                Discover the latest Zara men&apos;s collection, showcasing trendsetting styles and timeless fashion for the modern man
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">

          <div className="hero bg-gray-300 lg:px-44">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/KxLCNDW/slider3.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl font-bold">See Our Bag Collection!</h1>
                <p className="py-6">
                Explore our exquisite bag collection, where fashion meets function in every stylish design and choice
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
        <div className="hero bg-gray-300 lg:px-32">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/y6d0ffm/slider1.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl font-bold">New MakeUp Collection!</h1>
                <p className="py-6">
                Get ready for our exciting new makeup and fragrance collection launch. Stay tuned for stunning beauty innovations!
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        
       
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs bg-red-400">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-red-300">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-red-100">
          3
        </a>
        
      </div>
    </div>
  );
};

export default Slider;
