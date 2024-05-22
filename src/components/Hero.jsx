import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="mt-12 p-4 flex flex-col items-center">
      <h1 className="text-4xl text-center tracking-wide">
        VirtualR build tools {" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500 md:px-8">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="mx-3 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-xs rounded-md">
          Start for free
        </a>
        <a
          href="#"
          className="mx-3 py-3 px-4 text-xs rounded-md border">
          Documentation
        </a>
      </div>
      <div className="md:flex gap-5 p-4">
        <div className="m-auto md:w-1/2">
          <video
            src={video1}
            autoPlay
            loop
            muted
            className="mx-auto my-4 border-0">
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="m-auto md:w-1/2">
          <video
            src={video2}
            autoPlay
            loop
            muted
            className="mx-auto my-4 border-0">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Hero;