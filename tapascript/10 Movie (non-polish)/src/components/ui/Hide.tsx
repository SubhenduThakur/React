import type { ReactNode } from "react";

interface HideProps {
  isTrue: boolean;
  children: ReactNode;
}

export default function Hide({ isTrue, children }: HideProps) {
  return (
    <div
      className={`grid w-full transition-all delay-100 duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isTrue
          ? "scale-100 grid-rows-[1fr] opacity-100"
          : "scale-0 grid-rows-[0fr] opacity-0"
      }`}
      aria-expanded={isTrue}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
