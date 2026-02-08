export default function ContentBlock({ title, description }) {
  return (
    <div className="w-full h-full flex flex-col gap-[5px] text-left">
      <div className="w-full text-[0.95rem] text-black">{title}</div>
      <div className="description w-full text-[0.8rem] leading-[1.35rem] text-yellow">
        {description}
      </div>
    </div>
  );
}
