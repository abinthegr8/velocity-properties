import { useState, useRef, useEffect } from "react";

// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar";

export default function App() {
  const homeRef = useRef(null);
  const privateLendingRef = useRef(null);
  const coLivingRef = useRef(null);
  const aboutRef = useRef(null);

  const [active, setActive] = useState("home");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = [
      { ref: homeRef, name: "home" },
      { ref: privateLendingRef, name: "privateLending" },
      { ref: coLivingRef, name: "coLiving" },
      { ref: aboutRef, name: "about" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatioEntry = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !maxRatioEntry ||
              entry.intersectionRatio > maxRatioEntry.intersectionRatio
            ) {
              maxRatioEntry = entry;
            }
          }
        });

        if (maxRatioEntry) {
          const section = sections.find(
            (s) => s.ref.current === maxRatioEntry.target,
          );
          if (section) {
            setActive(section.name);
          }
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []); // runs once on mount

  // Pass sections array again for Navbar to render buttons dynamically
  const sections = [
    { ref: homeRef, name: "home" },
    { ref: privateLendingRef, name: "privateLending" },
    { ref: coLivingRef, name: "coLiving" },
    { ref: aboutRef, name: "about" },
  ];

  return (
    <div className="w-full bg-white font-zalando flex">
      {/* Left Side */}
      <div className="w-[25%] h-screen sticky top-0 z-[1000]">
        <Navbar
          scrollToSection={(ref, name) => {
            scrollToSection(ref);
            setActive(name);
          }}
          sections={sections}
          active={active}
        />
      </div>

      {/* Right Side */}
      <div className="w-[75%]">
        <section ref={homeRef} className="w-full h-[300vh]">
          <Home />
        </section>
        <section ref={privateLendingRef} className="w-full h-[300vh]"></section>
        <section ref={coLivingRef} className="w-full h-[300vh]"></section>
        <section ref={aboutRef} className="w-full h-[300vh]"></section>
      </div>
    </div>
  );
}
