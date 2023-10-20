const ClientsReview = () => {
  return (
    <div>
      <div className="py-10 font-rancho text-center">
        <h2 className="text-4xl font-bold">What Our Client Say</h2>
      </div>
    <div className="grid grid-cols-3">
    <div>
    <div className="w-72 h-20">
      <img className="w-28 h-28 rounded-full mx-auto mt-8 relative" src="./user.png" alt="" />
      </div>
     
      <div className=" w-72 h-72 bg-gray-100 rounded-xl  ">
        <p className="py-20 px-2 font-rancho text-2xl"> &apos;&apos;Amazing beauty and apparel services, highly recommend for their quality and professionalism. Five stars! &apos;&apos;</p>
      </div>
    </div>
      <div>
      <div className="w-72 h-20">
      <img className="w-28 h-28 rounded-full mx-auto mt-8" src="./user.png" alt="" />
      </div>
     
      <div className=" w-72 h-72 bg-gray-100 rounded-xl ">
        <p className="py-20 px-2 font-rancho text-2xl"> &apos;&apos;Amazing beauty and apparel services, highly recommend for their quality and professionalism. Five stars! &apos;&apos;</p>
      </div>
      </div>
     <div>
     <div className="w-72 h-20">
      <img className="w-28 h-28 rounded-full mx-auto mt-8" src="./user.png" alt="" />
      </div>
     
      <div className=" w-72 h-72 bg-gray-100 rounded-xl ">
        <p className="py-20 px-2 font-rancho text-2xl"> &apos;&apos;Amazing beauty and apparel services, highly recommend for their quality and professionalism. Five stars! &apos;&apos;</p>
      </div>
     </div>
    </div>
    </div>
  );
};

export default ClientsReview;
