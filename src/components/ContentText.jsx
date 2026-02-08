export default function ContentText({ description }) {
  return (
    <div className="w-full h-full">
      <div className="w-full text-[0.8rem] leading-[1.35rem] text-yellow">
        {description}
      </div>
    </div>
  );
}
