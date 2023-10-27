import About from "./About";
import Banner from "./Banner";
import Services from "./service/Services";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;