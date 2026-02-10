import { IoIosArrowRoundForward } from "react-icons/io";

export default function Button({ href, title }) {
  return (
    <a
      href={href}
      className="w-[95%] h-full bg-black flex items-center justify-center text-white rounded-full gap-[5px] py-2"
    >
      <div className="text-[0.85rem] font-extralight">{title}</div>
      <div className="text-[1.15rem]">
        <IoIosArrowRoundForward />
      </div>
    </a>
  );
}
