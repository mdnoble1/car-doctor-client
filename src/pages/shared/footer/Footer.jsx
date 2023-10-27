import { Link } from "react-router-dom";
import logoFooter from "../../../assets/logofooter.svg";
import { AiFillGoogleCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="p-10 bg-[#151515] text-white">
      <div className="container mx-auto flex justify-between ">
        <div>
          <div className="mb-5 w-24">
            <img className="mx-auto" src={logoFooter} alt="" />
            <h2 className="font-bold text-center">Car Doctor</h2>
          </div>
          <p className="w-72 text-sm">
            Drive with confidence, knowing that your car is in good hands. We
            are committed to delivering top-notch service, ensuring your cars
            performance and your peace of mind. Your satisfaction is our
            priority.
          </p>
          <div className="flex justify-between">
              <Link><AiFillGoogleCircle></AiFillGoogleCircle></Link>
              <Link><AiFillGoogleCircle></AiFillGoogleCircle></Link>
              <Link><AiFillGoogleCircle></AiFillGoogleCircle></Link>
              <Link><AiFillGoogleCircle></AiFillGoogleCircle></Link>
          </div>
        </div>
        <nav className="grid grid-cols-1">
          <h2 className="font-semibold text-xl mb-10">About</h2>
          <a className="link link-hover mb-2">Home</a>
          <a className="link link-hover mb-2">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="grid grid-cols-1">
          <h2 className="font-semibold text-xl mb-10">Company</h2>
          <a className="link link-hover mb-2">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav className="grid grid-cols-1">
          <h2 className="font-semibold text-xl mb-10">Support</h2>
          <a className="link link-hover mb-2">Support Center</a>
          <a className="link link-hover mb-2">Feedback</a>
          <a className="link link-hover">Accessability</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
