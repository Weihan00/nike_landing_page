const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex bg-coral-red justify-center items-center rounded-full w-11 h-11">
      <img src={imgURL} alt={label} width={24} height={24}/>  
      </div>
      <h3 className="mt-3 font-bold font-palanquin text-3xl leading-normal">{label}</h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-lg text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
