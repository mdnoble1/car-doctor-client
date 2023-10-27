/* eslint-disable react/prop-types */
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-6 pt-6">
        <img src={img} alt="" className="rounded-xl h-52" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-2xl text-[#444]">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl text-[#FF3811]">
            Price : $ {price}
          </p>
          <button className="btn text-2xl text-[#FF3811]"><BsArrowRight></BsArrowRight></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
