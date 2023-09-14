import { Button } from "../components";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse">
      <div>
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold mb-2 font-palanqiun lg:max-w-lg">
          {" "}
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensure your satisfaction
        </p>
        <div className="mt-11 flex  flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}></Button>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor = "text-slate-gray" imgURL=''></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
