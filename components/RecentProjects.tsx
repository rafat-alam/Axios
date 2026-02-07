"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { useRef } from "react";
import { gsap } from "gsap";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading" id="events">
        Collection of our <span className="text-blue-600">recent Events</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-7 mt-10">
        {projects.map((item) => (
          <FlipCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const FlipCard = ({ item }: { item: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      rotationY: -180,
      duration: 0.8,
      ease: "power2.inOut",
    });

    // Blur and fade the front image
    gsap.to(frontRef.current, {
      filter: "blur(10px)",
      opacity: 0.3,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });

    // Remove blur and restore opacity
    gsap.to(frontRef.current, {
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[85vw]"
      style={{ perspective: "1500px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front of Card */}
        <div
          ref={frontRef}
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full flex flex-col">
            <div className="relative flex items-center justify-center w-full overflow-hidden sm:h-[40vh] h-[30vh] mb-10 rounded-3xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 px-2">
              {item.title}
            </h1>
            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 px-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.des}
            </p>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-slate-900/95 backdrop-blur-md rounded-3xl border border-purple-500/30 shadow-2xl overflow-y-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Event Details
              </h2>

              <div className="space-y-3 sm:space-y-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">
                      Date
                    </p>
                    <p className="text-white text-base sm:text-lg font-semibold">
                      {item.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-white text-base sm:text-lg font-semibold">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">
                      Attendees
                    </p>
                    <p className="text-white text-base sm:text-lg font-semibold">
                      {item.attendees}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700 w-full">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>

            <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 w-fit group">
              Learn More
              <FaLocationArrow className="text-xs group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
