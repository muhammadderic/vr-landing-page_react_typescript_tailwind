import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-12 tracking-wide">
      <h2 className="my-4 text-3xl text-center lg:text-5xl lg:my-12">
        What People are saying
      </h2>
      <div className="p-4 flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="h-full px-4 py-6 bg-neutral-900 font-thin text-sm border border-neutral-800 rounded-md">
              <p>{testimonial.text}</p>
              <div className="mt-8 flex items-start">
                <img
                  className="h-12 w-12 mr-6 border border-neutral-300 rounded-full"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="font-normal italic text-xs text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;