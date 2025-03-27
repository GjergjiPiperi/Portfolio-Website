import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "Loading my journey into React...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-myCustomColor text-zinc-200">
      <div className="mb-4 font-mono text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        {text} <span className="ml-1 animate-blink"> | </span>
      </div>
      <div className="w-[200px] h-[2px] bg-zinc-700 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
