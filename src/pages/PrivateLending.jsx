import { useRef, useState } from "react";
import { gsap } from "gsap";

// Components
import ContentBlock from "../components/ContentBlock";

// Icons
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdLabelImportant,
} from "react-icons/md";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

export default function PrivateLending() {
  const whatIsPrivateLendingRef = useRef(null);
  const privateLendingVideoRef = useRef(null);
  const becomingAPrivateLenderRef = useRef(null);
  const considerAlternativesRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    whatIsPrivateLendingRef,
    privateLendingVideoRef,
    becomingAPrivateLenderRef,
    considerAlternativesRef,
  ];

  const handleChange = (direction) => {
    const current = sections[activeIndex].current;
    let newIndex = activeIndex + direction;

    if (newIndex < 0) newIndex = sections.length - 1;
    if (newIndex >= sections.length) newIndex = 0;

    const next = sections[newIndex].current;

    gsap.to(current, {
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        current.style.display = "none";
        ((next.style.display = "flex"),
          gsap.fromTo(
            next,
            {
              autoAlpha: 0,
            },
            { autoAlpha: 1, duration: 0.3 },
          ));
      },
    });
    setActiveIndex(newIndex);
  };

  return (
    <div className="w-full h-full px-[50px]">
      <div className="w-full h-full px-[50px] border-b border-opacity-30 border-yellow">
        <div className="w-[80%]">
          <ContentBlock title="Everything you need to know about Private Lending"></ContentBlock>
        </div>
        <div
          ref={whatIsPrivateLendingRef}
          className="w-full h-[75%] flex items-center gap-[50px]"
        >
          <div className="group w-[33.33%] h-[65%] p-[15px] rounded-md transition-all ease-in-out duration-300 hover:bg-yellow">
            <div className="w-full h-[50%]">
              <ContentBlock title="Private Lending Explained: How It Works and Why It Matters"></ContentBlock>
            </div>
            <div
              className={`w-full h-[50%] group-hover:[&_.description]:text-white`}
            >
              <ContentBlock description="Private lending is when you lend money to an experienced real estate investor to buy and fix a property, and in return, you earn a fixed return backed by the property itself."></ContentBlock>
            </div>
          </div>

          <div className="group w-[33.33%] h-[65%] p-[15px] rounded-md transition-all ease-in-out duration-300 hover:bg-yellow">
            <div className="w-[80%] h-[50%]">
              <ContentBlock title="Why Private Lending Is Important for Your Wealth and Investment"></ContentBlock>
            </div>
            <div
              className={`w-full h-[50%] group-hover:[&_.description]:text-white`}
            >
              <ContentBlock description="Private lending is important because it helps investors buy and improve properties quickly, while giving lenders a secure way to earn steady returns backed by real estate."></ContentBlock>
            </div>
          </div>

          <div className="group w-[33.33%] h-[65%] p-[15px] rounded-md transition-all ease-in-out duration-300 hover:bg-yellow">
            <div className="w-[80%] h-[50%]">
              <ContentBlock title="Why You Should Consider Private Lending for Steady, Secure Returns"></ContentBlock>
            </div>
            <div
              className={`w-full h-[50%] group-hover:[&_.description]:text-white`}
            >
              <ContentBlock description="Private lending lets you earn steady returns by funding real estate projects, without the hassle of managing property, while your investment is secured by the property itself."></ContentBlock>
            </div>
          </div>
        </div>
        <div
          ref={privateLendingVideoRef}
          className="w-full h-[75%] items-center gap-[50px] hidden"
        >
          VIDEO
        </div>
        <div
          ref={becomingAPrivateLenderRef}
          className="w-full h-[75%] justify-center items-center gap-[50px] hidden flex-col"
        >
          <div className="w-full flex gap-[25px]">
            <div className="w-1/2 flex items-start gap-3">
              <div className="mt-0.5 text-yellow/50">
                <TbCircleNumber1Filled size={24} />
              </div>

              <div>
                <ContentBlock
                  title="Find the Deal"
                  description="We carefully identify and evaluate properties to acquire, ensuring each one aligns with our specific buying standards and profit objectives."
                />
              </div>
            </div>
            <div className="w-1/2 flex items-start gap-3">
              <div className="mt-0.5 text-yellow/50">
                <TbCircleNumber2Filled size={24} />
              </div>

              <div>
                <ContentBlock
                  title="Decide to Lend"
                  description="You review a straightforward and easy-to-understand financial analysis of the deal to fully grasp its potential and profitability."
                />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-[25px]">
            <div className="w-1/2 flex items-start gap-3">
              <div className="mt-0.5 text-yellow/50">
                <TbCircleNumber3Filled size={24} />
              </div>

              <div>
                <ContentBlock
                  title="Renovate It"
                  description="We carry out the renovation process and then refinance the property to maximize its value and optimize returns."
                />
              </div>
            </div>
            <div className="w-1/2 flex items-start gap-3">
              <div className="mt-0.5 text-yellow/50">
                <TbCircleNumber4Filled size={24} />
              </div>

              <div>
                <ContentBlock
                  title="Get Paid"
                  description="Once the project is successfully completed, you will receive your original investment back along with the agreed-upon interest."
                />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={considerAlternativesRef}
          className="w-full h-[75%] justify-center items-center px-[50px] py-[30px] gap-[25px] hidden"
        >
          <div className="w-[65%] h-full bg-black"></div>
          <div className="w-[35%] h-full">
            <ContentBlock
              title="Less Dependence on the Stock Market is Freeing"
              description={
                <>
                  This works because investing is not just about returns — it’s
                  about security and control.
                  <br />
                  <br />
                  Stock market volatility is real:
                  <br />
                  <br />
                  • Prices swing daily.
                  <br /> • Investors have little influence over company
                  decisions. <br /> • Media and economic events can drastically
                  affect portfolios.
                  <br />
                  <br />
                  You’re positioning Velocity as the alternative to uncertainty
                  — something tangible, asset-backed, and structured.
                </>
              }
            ></ContentBlock>
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-center">
          <div className="w-96 grid place-items-center relative">
            <div className="w-16 py-1 flex justify-around items-center rounded-full">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full bg-black/50 cursor-pointer transition-all ease-in-out duration-300 ${
                    i === activeIndex
                      ? "w-1.5 h-1.5 bg-transparent border-2 border-yellow rounded-full"
                      : "w-1"
                  }`}
                />
              ))}
              <div
                onClick={() => handleChange(-1)}
                className="absolute right-full text-[1.5em] text-yellow cursor-pointer opacity-80"
              >
                <MdKeyboardArrowLeft />
              </div>
              <div
                onClick={() => handleChange(1)}
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
