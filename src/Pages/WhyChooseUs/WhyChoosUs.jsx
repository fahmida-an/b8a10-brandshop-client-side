import {FaAward, FaDollarSign} from "react-icons/fa"
import {SiCodesignal} from "react-icons/si"
import {HiOutlineUserGroup} from "react-icons/hi"

const WhyChoosUs = () => {
  return (
    <div>
      <div className="py-10 font-rancho text-center">
        <h5 className="text-xl">People</h5>
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
      </div>

      <div className="bg-gray-200 ">
        <div className=" h-[300px] max-w-5xl mx-auto flex gap-5 items-center justify-center ">
          <div className="w-52">
          <p className="text-center"><FaAward className="w-10 h-10"></FaAward></p>
            <h2 className="font-rancho text-2xl mt-3">
              Award Winning Services
            </h2>
            <p className=" text-sm mt-3">
              Highly recognized for exceptional services, acknowledged with
              prestigious industry awards.
            </p>
          </div>
          <div className="w-52">
          <p className="text-center"><SiCodesignal className="w-10 h-10"></SiCodesignal></p>
            <h2 className="font-rancho text-2xl mt-3">Amazing Designs</h2>
            <p className=" text-sm mt-3">
            Celebrated for remarkable, innovative designs, renowned with prestigious industry accolades.
            </p>
          </div>
          <div className="w-52">
          <p className="text-center"><HiOutlineUserGroup className="w-10 h-10"></HiOutlineUserGroup></p>
            <h2 className="font-rancho text-2xl mt-3">Full Satisfaction</h2>
            <p className="text-sm mt-3">
            Dedicated to ensuring complete client satisfaction, our highest priority always.
            </p>
          </div>
          <div className="w-52">
          <p className="text-center"><FaDollarSign className="w-10 h-10"></FaDollarSign></p>
            <h2 className="font-rancho text-2xl mt-3">Lowest Prices</h2>
            <p className=" text-sm mt-3">
            Offering unbeatable value with the most competitive and budget-friendly pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosUs;
