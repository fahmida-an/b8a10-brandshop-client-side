import { useLoaderData } from "react-router-dom";
import Navbar from "../../Sharedpages/Header/Navbar";
import Banner from "../../Sharedpages/Header/banner";
import Brand from "../Brands/Brand";
import WhyChoosUs from "../WhyChooseUs/WhyChoosUs";
import ClientsReview from "../ClientsReview/ClientsReview";
import Footer from "../Footer/Footer";
import Logo from "../../Sharedpages/Header/Logo";

const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);

    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="py-10 items-center justify-center">
            <h2 className="text-center font-rancho text-4xl text-gray-900">Our Luxury Brand</h2>
          <div className="max-w-5xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-3">
         {
                brands.map((brand) => (
                    <Brand key={brand.brandname} brand={brand}></Brand>
                ))
            }
         </div>
          </div>
            </div>

            <WhyChoosUs></WhyChoosUs>
           <div className="max-w-5xl mx-auto">
           <ClientsReview></ClientsReview>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;