import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// Components
import ContentBlock from "../components/ContentBlock";

// Icons
import { BsArrowReturnRight } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  const testimonials = [
    {
      name: "Chad",
      title: "Confident investing backed by experience",
      description:
        "After years of knowing Eric and Valerie, Chad felt confident becoming a private investor in their real estate venture. Their extensive project experience and strong grasp of real estate and financial best practices made the investment process clear, efficient, and rewarding—setting the stage for future opportunities together.",
      category: "Private Lending",
      src: "/chad-morrison.jpg",
    },
    {
      name: "Maribel",
      title: "Transparent planning with strong returns",
      description:
        "By clearly explaining project plans, financials, estimated profits, and timelines, Eric and Valerie gave Maribel confidence throughout the investment. Their professionalism, consistent updates, and on-time execution resulted in double-digit returns and a strong desire to invest again.",
      category: "Private Lending",
      src: "/maribel-cisneros.jpg",
    },
    {
      name: "Jennifer",
      title: "Success to Strategic Investing",
      description:
        "After following Eric and Valerie’s transition from corporate careers into real estate investing, Jennifer chose to become a private lender on a fix-and-flip project. Their knowledge, professionalism, and disciplined approach delivered strong returns on a protected, secured, and insured investment.",
      category: "Co Living",
      src: "/jennifer-mahrt.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef(null);
  const titleRefs = useRef([]);
  const categoryRefs = useRef([]);
  const circleRefs = useRef([]);

  const addTitleRefs = (node) => {
    if (node && !titleRefs.current.includes(node)) {
      titleRefs.current.push(node);
    }
  };

  const addCategoryRefs = (element) => {
    if (element && !titleRefs.current.includes(element)) {
      categoryRefs.current.push(element);
    }
  };

  const addCircleRef = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  // ------------------------------
  // Initial animation setup on mount
  // Sets all circles, titles, and categories to their default states
  // Highlights the first active card (activeIndex = 0)
  // ------------------------------
  useEffect(() => {
    circleRefs.current.forEach((circle, i) => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = circumference;

      if (i === activeIndex) {
        gsap.fromTo(
          circle,
          { strokeDashoffset: circumference },
          { strokeDashoffset: 0, duration: 0.3, ease: "power2.out" },
        );
      } else {
        circle.style.strokeDashoffset = circumference;
      }
    });

    titleRefs.current.forEach((title, pos) => {
      if (pos === activeIndex) {
        gsap.fromTo(
          title,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.3, ease: "none" },
        );
      } else {
        gsap.set(title, { opacity: 0.5 });
      }
    });

    categoryRefs.current.forEach((category, position) => {
      if (position === activeIndex) {
        gsap.fromTo(
          category,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.3, ease: "none" },
        );
      } else {
        gsap.set(category, { opacity: 0.5 });
      }
    });
  }, []);

  // ------------------------------
  // Handles animations when a user clicks a testimonial card
  // Fades out the current testimonial, updates activeIndex,
  // then animates circles, titles, and categories accordingly
  // ------------------------------
  const handleCardClick = (index) => {
    if (index === activeIndex) return;

    gsap.to(testimonialRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex(index);

        gsap.fromTo(
          testimonialRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 },
        );

        circleRefs.current.forEach((circle, i) => {
          const radius = circle.r.baseVal.value;
          const circumference = 2 * Math.PI * radius;
          circle.style.strokeDasharray = circumference;

          if (i === index) {
            gsap.fromTo(
              circle,
              { strokeDashoffset: circumference },
              { strokeDashoffset: 0, duration: 0.3, ease: "none" },
            );
          } else if (i === activeIndex) {
            gsap.fromTo(
              circle,
              { strokeDashoffset: 0 },
              {
                strokeDashoffset: circumference,
                duration: 0.3,
                ease: "none",
              },
            );
          } else {
            circle.style.strokeDashoffset = circumference;
          }
        });

        titleRefs.current.forEach((title, pos) => {
          if (pos === index) {
            gsap.fromTo(title, { opacity: 0.5 }, { opacity: 1, duration: 0.3 });
          } else if (pos === activeIndex) {
            gsap.fromTo(title, { opacity: 1 }, { opacity: 0.5, duration: 0.3 });
          } else {
            gsap.set(title, { opacity: 0.5 });
          }
        });

        categoryRefs.current.forEach((category, position) => {
          if (position === index) {
            gsap.fromTo(
              category,
              { opacity: 0.5 },
              { opacity: 1, duration: 0.3 },
            );
          } else if (position === activeIndex) {
            gsap.fromTo(
              category,
              { opacity: 1 },
              { opacity: 0.5, duration: 0.3 },
            );
          } else {
            gsap.set(category, { opacity: 0.5 });
          }
        });
      },
    });
  };

  return (
    <div className="w-full h-full py-[45px] px-[50px]">
      {/* Overview */}
      <div className="w-full h-[33.33%] flex border-b border-opacity-30 border-yellow px-[50px]">
        <div className="w-[70%] h-full"></div>
        <div className="w-[30%] h-full">
          <ContentBlock
            title="Overview"
            description={
              <>
                Velocity Properties is a real estate investment company
                dedicated to helping individuals grow their wealth through
                secure, real-estate-backed opportunities.
                <br />
                <br />
                Combining data-driven strategies with hands-on expertise,
                Velocity simplifies the investment process, making it
                transparent and accessible.
                <br />
                <br />
                Beyond investing, the company renovates and transforms
                properties into high-quality homes designed for modern living,
                delivering lasting value for investors and communities alike.
              </>
            }
          ></ContentBlock>
        </div>
      </div>
      {/* What Sets Us Apart */}
      <div className="w-full h-[33.33%] flex justify-end border-b border-opacity-30 border-yellow gap-[50px] py-[45px] px-[50px]">
        <div className="w-[35%] h-full flex flex-col gap-[50px]">
          <div className="w-full">
            <ContentBlock
              title="Secure Investment Opportunities"
              description="We prioritize safety by backing investments with tangible real estate assets. This approach provides our investors with peace of mind, knowing their capital is supported by valuable properties."
            ></ContentBlock>
          </div>
          <div className="w-full">
            <ContentBlock
              title="Data-Driven Decision Making"
              description="Our strategies leverage comprehensive market analysis and technology to optimize returns. By continuously monitoring market trends, we ensure timely and informed investment decisions."
            ></ContentBlock>
          </div>
          <div className="w-full">
            <ContentBlock
              title="Transparent Process"
              description="We maintain clear communication and accountability, fostering trust with every investor. Regular updates and accessible reporting keep investors fully informed throughout the investment lifecycle."
            ></ContentBlock>
          </div>
        </div>
        <div className="w-[35%] h-full flex flex-col gap-[50px]">
          <div className="w-full">
            <ContentBlock
              title="Property Transformation Expertise"
              description="Our renovation approach enhances property value while improving living standards. We focus on quality craftsmanship and modern design to create desirable homes that stand the test of time."
            ></ContentBlock>
          </div>

          <div className="w-full">
            <ContentBlock
              title="Long-Term Vision"
              description="We focus on sustainable growth that benefits both investors and the communities we serve. Our commitment to responsible development ensures that our projects contribute positively to neighborhood revitalization and economic stability."
            ></ContentBlock>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full h-[33.33%] border-b border-opacity-30 border-yellow py-[45px] px-[50px]">
        <div ref={testimonialRef} className="w-[60%]">
          <ContentBlock
            title={testimonials[activeIndex].title}
            description={testimonials[activeIndex].description}
          ></ContentBlock>
        </div>
        <div className="w-full py-[50px] flex items-center gap-[10px]">
          <a href="#" className="text-[0.85rem] font-light">
            SEE OUR SERVICES
          </a>
          <div className="text-[0.7rem]">
            <BsArrowReturnRight />
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="w-full flex">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={`w-[33.33%] flex flex-col gap-[25px] px-[45px] py-[50px] cursor-pointer`}
                onClick={() => handleCardClick(index)}
              >
                <div className="w-full flex items-center justify-center">
                  <div className="w-[75%] h-[75%]">
                    <div className="w-full font-semibold text-[1.15rem] leading-[1.75rem] text-black opacity-100">
                      {testimonial.name}
                    </div>
                    <div ref={addTitleRefs}>
                      <ContentBlock description={testimonial.title} />
                    </div>
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 80 80"
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        ref={addCircleRef}
                        className="progress-circle"
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="#a39a81"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        transform="rotate(-90 40 40)"
                      />
                      <clipPath id={`circleClip-${testimonial.name}`}>
                        <circle cx="40" cy="40" r="36" />
                      </clipPath>
                      <image
                        href={testimonial.src}
                        x="4"
                        y="4"
                        width="72"
                        height="72"
                        clipPath={`url(#circleClip-${testimonial.name})`}
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>
                </div>

                <div ref={addCategoryRefs} className="w-full">
                  <ContentBlock title={testimonial.category} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[5%] flex justify-center">
          <div className="w-96 grid place-items-center relative">
            <div className="w-16 py-1 flex justify-around items-center rounded-full">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full bg-black/50 cursor-pointer transition-all ease-in-out duration-300 ${
                    activeIndex === i
                      ? "w-1.5 h-1.5 bg-transparent border-2 border-yellow rounded-full"
                      : "w-1"
                  }`}
                  onClick={() => handleCardClick(i)}
                />
              ))}
              <div
                onClick={() => {
                  const prevIndex =
                    activeIndex === 0
                      ? testimonials.length - 1
                      : activeIndex - 1;
                  handleCardClick(prevIndex);
                }}
                className="absolute right-full text-[1.5em] text-yellow cursor-pointer opacity-80"
              >
                <MdKeyboardArrowLeft />
              </div>
              <div
                onClick={() => {
                  const nextIndex =
                    activeIndex === testimonials.length - 1
                      ? 0
                      : activeIndex + 1;
                  handleCardClick(nextIndex);
                }}
                className="absolute left-full text-[1.5rem] text-yellow cursor-pointer opacity-80"
              >
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
