const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/cDgGpTz/banner3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-black">New Arrival!</h1>
            <p className="mb-5">
            Discover the latest arrivals at top retailers, featuring trendy fashion, accessories, and more for every style.
            </p>
            <button className="btn bg-red-400 rounded-none border-none">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
