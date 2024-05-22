import { features } from "../constants";

const Features = () => {
  return (
    <div className="mt-12 p-8 relative border-b border-neutral-800">
      <div className="text-center">
        <span className="px-1 py-1 bg-neutral-900 text-orange-500 text-sm font-medium uppercase rounded-full">
          Feature
        </span>
        <h2 className="mt-5 text-3xl tracking-wide lg:text-5xl">
          Easily build {" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="mt-10 md:flex md:flex-wrap md:mt-15 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-2/6">
            <div className="flex">
              <div className="h-10 mx-6 p-2 flex justify-center items-center bg-neutral-900 text-orange-700 rounded-full">
                <feature.icon />
              </div>
              <div>
                <h5 className="mt-1 mb-1 text-base">{feature.text}</h5>
                <p className="mb-5 text-xs text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;