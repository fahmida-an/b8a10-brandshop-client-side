const Brand = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="card w-72 shadow-xl hover:shadow-3xl bg-base-100 mt-10 ">
          <figure>
            <img
              src="https://i.ibb.co/kxYHW0y/nike.jpg"
              alt="nike"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-block">NIKE</button>
            </div>
          </div>
        </div>
        <div className="card w-72 shadow-xl bg-base-100 mt-10 ">
          <figure>
            <img
              src="https://i.ibb.co/Jz6CbMM/dior.jpg"
              alt="dior"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-block">DIOR</button>
            </div>
          </div>
        </div>
        <div className="card w-72 shadow-xl bg-base-100 mt-10 ">
          <figure>
            <img
              src="https://i.ibb.co/BHhZj2K/gucchi.jpg"
              alt="gucci"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-block">GUCCI</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="card w-72 shadow-xl bg-base-100 mt-10 ">
          <figure>
            <img
              src="https://i.ibb.co/R77dcdD/aarong1.jpg"
              alt="aarong"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-block">AARONG</button>
            </div>
          </div>
        </div>
        <div className="card w-72 shadow-xl bg-base-100 mt-10 ">
          <figure>
            <img
              src="https://i.ibb.co/fC5HbzB/zara.jpg"
              alt="zara"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-block">ZARA</button>
            </div>
          </div>
        </div>
        <div className="card w-72 shadow-xl bg-base-100 mt-10 ">
          <figure>
            <img
              src="https://i.ibb.co/r6hx6Fh/adidas1.jpg"
              alt="adidas"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-block">ADDIDAS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
