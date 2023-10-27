import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
import image5 from "../../assets/images/banner/5.jpg";
import image6 from "../../assets/images/banner/6.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="carousel rounded-xl lg:my-12 w-full lg:h-[700px]">
      {/* slide 1  */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full lg:h-[700px]" />
        <div className="absolute gap-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-11/12 lg:w-1/3 h-[700px] pl-8 md:pl-16 lg:pl-28 text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl mt-4 md:mt-20 lg:mt-32 mb-2 md:mb-6 lg:mb-7">
            Affordable Price For Car Servicing
          </h2>
          <p className="lg:text-lg md:mb-4 lg:mb-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <button className="btn btn-outline text-white lg:text-lg mr-4 hover:bg-[#ff3811] hover:border-[#ff3811] ">
            Discover More
          </button>
          <button className="btn btn-outline text-white lg:text-lg hover:bg-[#ff3811] hover:border-[#ff3811]">
            Latest Project
          </button>
        </div>
        <div
          className="absolute flex lg:justify-end gap-10 transform -translate-y-1/2 right-[150px]
        md:right-[305px] lg:right-12 bottom-0 lg:bottom-4"
        >
          <a
            href="#slide6"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      {/* slide 2  */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full lg:h-[700px]" />
        <div className="absolute gap-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-11/12 lg:w-1/3 h-[700px] pl-8 md:pl-16 lg:pl-28 text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl mt-4 md:mt-20 lg:mt-32 mb-2 md:mb-6 lg:mb-7">
            Affordable Price For Car Servicing
          </h2>
          <p className="lg:text-lg md:mb-4 lg:mb-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <button className="btn btn-outline text-white lg:text-lg mr-4 hover:bg-[#ff3811] hover:border-[#ff3811] ">
            Discover More
          </button>
          <button className="btn btn-outline text-white lg:text-lg hover:bg-[#ff3811] hover:border-[#ff3811]">
            Latest Project
          </button>
        </div>
        <div
          className="absolute flex lg:justify-end gap-10 transform -translate-y-1/2 right-[150px]
        md:right-[305px] lg:right-12 bottom-0 lg:bottom-4"
        >
          <a
            href="#slide1"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      {/* slide 3  */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full lg:h-[700px]" />
        <div className="absolute gap-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-11/12 lg:w-1/3 h-[700px] pl-8 md:pl-16 lg:pl-28 text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl mt-4 md:mt-20 lg:mt-32 mb-2 md:mb-6 lg:mb-7">
            Affordable Price For Car Servicing
          </h2>
          <p className="lg:text-lg md:mb-4 lg:mb-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <button className="btn btn-outline text-white lg:text-lg mr-4 hover:bg-[#ff3811] hover:border-[#ff3811] ">
            Discover More
          </button>
          <button className="btn btn-outline text-white lg:text-lg hover:bg-[#ff3811] hover:border-[#ff3811]">
            Latest Project
          </button>
        </div>
        <div
          className="absolute flex lg:justify-end gap-10 transform -translate-y-1/2 right-[150px]
        md:right-[305px] lg:right-12 bottom-0 lg:bottom-4"
        >
          <a
            href="#slide2"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      {/* slide 4  */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full lg:h-[700px]" />
        <div className="absolute gap-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-11/12 lg:w-1/3 h-[700px] pl-8 md:pl-16 lg:pl-28 text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl mt-4 md:mt-20 lg:mt-32 mb-2 md:mb-6 lg:mb-7">
            Affordable Price For Car Servicing
          </h2>
          <p className="lg:text-lg md:mb-4 lg:mb-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <button className="btn btn-outline text-white lg:text-lg mr-4 hover:bg-[#ff3811] hover:border-[#ff3811] ">
            Discover More
          </button>
          <button className="btn btn-outline text-white lg:text-lg hover:bg-[#ff3811] hover:border-[#ff3811]">
            Latest Project
          </button>
        </div>
        <div
          className="absolute flex lg:justify-end gap-10 transform -translate-y-1/2 right-[150px]
        md:right-[305px] lg:right-12 bottom-0 lg:bottom-4"
        >
          <a
            href="#slide3"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide5"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      {/* slide 5  */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src={image5} className="w-full lg:h-[700px]" />
        <div className="absolute gap-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-11/12 lg:w-1/3 h-[700px] pl-8 md:pl-16 lg:pl-28 text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl mt-4 md:mt-20 lg:mt-32 mb-2 md:mb-6 lg:mb-7">
            Affordable Price For Car Servicing
          </h2>
          <p className="lg:text-lg md:mb-4 lg:mb-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <button className="btn btn-outline text-white lg:text-lg mr-4 hover:bg-[#ff3811] hover:border-[#ff3811] ">
            Discover More
          </button>
          <button className="btn btn-outline text-white lg:text-lg hover:bg-[#ff3811] hover:border-[#ff3811]">
            Latest Project
          </button>
        </div>
        <div
          className="absolute flex lg:justify-end gap-10 transform -translate-y-1/2 right-[150px]
        md:right-[305px] lg:right-12 bottom-0 lg:bottom-4"
        >
          <a
            href="#slide4"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide6"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      {/* slide 6  */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src={image6} className="w-full lg:h-[700px]" />
        <div className="absolute gap-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-11/12 lg:w-1/3 h-[700px] pl-8 md:pl-16 lg:pl-28 text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl mt-4 md:mt-20 lg:mt-32 mb-2 md:mb-6 lg:mb-7">
            Affordable Price For Car Servicing
          </h2>
          <p className="lg:text-lg md:mb-4 lg:mb-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <button className="btn btn-outline text-white lg:text-lg mr-4 hover:bg-[#ff3811] hover:border-[#ff3811] ">
            Discover More
          </button>
          <button className="btn btn-outline text-white lg:text-lg hover:bg-[#ff3811] hover:border-[#ff3811]">
            Latest Project
          </button>
        </div>
        <div
          className="absolute flex lg:justify-end gap-10 transform -translate-y-1/2 right-[150px]
        md:right-[305px] lg:right-12 bottom-0 lg:bottom-4"
        >
          <a
            href="#slide5"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn glass btn-circle hover:bg-[#ff3811] text-white font-bold lg:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
