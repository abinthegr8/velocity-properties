export default function ContentText({ description }) {
  return (
    <div className="w-full h-full">
      <div className="description w-full text-[0.9rem] leading-[1.45rem] text-yellow">
        {description}
      </div>
    </div>
  );
}
