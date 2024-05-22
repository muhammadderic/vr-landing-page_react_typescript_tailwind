import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-10 border-b border-neutral-800 lg:pb-12">
      <h2 className="my-8 text-3xl text-center tracking-wide lg:text-5xl">
        Pricing
      </h2>
      <div className="p-4 flex flex-wrap md:flex-nowrap lg:gap-4">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full p-2 sm:w-1/3">
            <div className="h-full p-8 flex flex-col justify-between border border-neutral-700 rounded-xl md:p-4 md:py-8">
              <p className="mb-6 text-2xl md:text-xl md:text-center">
                {option.title}
                {option.title === "Pro" && (
                  <span className="mb-4 ml-2 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl md:text-sm">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8 md:text-center">
                <span className="mt-6 mr-2 text-3xl">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul className="md:mb-8 lg:p-4">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-6 flex items-center md:mt-2">
                    <div>
                      <CheckCircle2 />
                    </div>
                    <span className="ml-2 text-md md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="w-full h-12 p-5
                  inline-flex justify-center items-center text-center tracking-tight 
                  text-xl hover:bg-orange-900 border border-orange-900 rounded-lg 
                  transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;