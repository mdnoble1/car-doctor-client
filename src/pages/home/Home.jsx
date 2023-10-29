import About from "./About";
import Banner from "./Banner";
import Services from "./service/Services";
import Footer from "../shared/footer/Footer"

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;