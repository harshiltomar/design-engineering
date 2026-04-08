import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-1/2 flex items-center justify-center">
      <Pattern/>
      <div className="relative z-10 h-80 w-40 bg-white shadow-2xl border border-neutral-200 rounded-xl"></div>
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed"></div>
  )
}