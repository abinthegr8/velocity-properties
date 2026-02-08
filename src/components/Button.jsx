import { MdArrowOutward } from "react-icons/md";

export default function Button({ href, title }) {
  return (
    <a href={href} className="w-[90%] h-full bg-black flex items-center justify-center text-white rounded-full gap-[5px] py-2">
      <div className="text-[0.95rem]">{title}</div>
      <div className="text-[1.25rem]">
        <MdArrowOutward />
      </div>
    </a>
  );
}
