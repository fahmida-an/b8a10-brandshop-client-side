import Navbar from "../../Sharedpages/Header/Navbar";
import Banner from "../../Sharedpages/Header/banner";
import Brand from "../Brands/Brand";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="py-10 items-center justify-center">
                <h2 className="text-center font-rancho text-4xl text-gray-900">Our Luxury Brand</h2>
                <Brand></Brand>
            </div>
        </div>
    );
};

export default Home;