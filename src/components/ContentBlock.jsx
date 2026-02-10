export default function ContentBlock({ title, description }) {
  return (
    <div className="w-full h-full flex flex-col gap-[5px] text-left">
      <div className="title w-full text-[1.15rem] leading-[1.75rem] text-black">
        {title}
      </div>
      <div className="description w-full text-[0.9rem] leading-[1.45rem] text-yellow">
        {description}
      </div>
    </div>
  );
}
