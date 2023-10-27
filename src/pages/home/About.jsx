import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mt-20 mb-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="lg:w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 absolute right-5 top-40 md:top-72 lg:top-1/2 border-8 border-white rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="font-bold text-xl text-[#FF3811] mt-12 lg:mt-0 mb-5">About Us</h1>
          <h1 className="font-bold text-5xl text-[#151515] mb-7">We are qualified & of experience in this field</h1>
          <p className="py-6 text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. 
          </p>
          <p className="py-6 text-[#737373]">
          the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. 
          </p>
          <button className="btn  bg-[#FF3811] font-semibold text-lg text-white hover:bg-orange-400">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
