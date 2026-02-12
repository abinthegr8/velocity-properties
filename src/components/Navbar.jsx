// Components
import ContentBlock from "./ContentBlock";
import Button from "./Button";

export default function Navbar({ scrollToSection, sections, active }) {
  const descriptions = {
    home: "Overview · What Sets Us Apart · Testimonials",
    privateLending:
      "What Is Private Lending · Becoming A Private Money Lender · Why Consider Alternatives to the Stock Market?",
    coLiving: "What Is Co-Living · The 4Fs · Our Co-Living Approach",
    about: "Who We Are · Our Works",
  };

  return (
    <div className="w-full h-full flex flex-col justify-between py-[45px] px-[50px]">
      <div className="w-full flex flex-col gap-[25px]">
        {sections.map(({ ref, name }) => (
          <button key={name} onClick={() => scrollToSection(ref, name)}>
            <div
              className={`[&_.description]:transition-all [&_.description]:ease-in-out [&_.description]:duration-500 ${
                active === name
                  ? "[&_.description]:opacity-100"
                  : "[&_.description]:opacity-25"
              }`}
            >
              <ContentBlock
                title={capitalizeName(name)}
                description={descriptions[name]}
              />
            </div>
          </button>
        ))}
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <ContentBlock description="Interested in working with us or booking a consultation? Let’s connect." />
        <Button href="#" title="TALK WITH AN ADVISOR" />
      </div>
    </div>
  );
}

function capitalizeName(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, " $1");
}
