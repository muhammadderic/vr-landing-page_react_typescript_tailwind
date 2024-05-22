import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import codeImg from "../assets/code.jpg";

const Workflow = () => {
  return (
    <div className="mt-12 p-8 border-b border-neutral-800">
      <h2 className="text-3xl text-center tracking-wide md:mb-4 lg:text-5xl">
        Accelerate your {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full mt-8 p-2 md:w-1/2">
          <img src={codeImg} alt="coding" />
        </div>
        <div className="w-full pt-8 md:flex md:flex-wrap">
          {checklistItems.map((item, index) => (
            <div key={index} className="w-full mb-8 flex md:w-1/2">
              <div className="w-10 mx-6 p-2 justify-center items-center text-green-400 bg-neutral-900 rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-lg">
                  {item.title}
                </h5>
                <p className="text-sm text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workflow;