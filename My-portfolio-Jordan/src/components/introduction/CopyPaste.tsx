import React, { useEffect, useState } from "react";

interface CopyPasteAnimationProps {
  textToCopy: string;
  delay?: number;
}

const CopyPasteAnimation: React.FC<CopyPasteAnimationProps> = ({
  textToCopy,
  delay,
}) => {
  const [step, setStep] = useState<number>(0);
  const [pastedText, setPastedText] = useState<string>("");

  useEffect(() => {
    const startAnimation = () => {
      setStep(1);
      setTimeout(() => {
        setStep(2);
        setTimeout(() => {
          setPastedText(textToCopy);
          setStep(3);
        }, 800);
      }, 600);
    };

    const timer = setTimeout(startAnimation, delay);
    return () => clearTimeout(timer);
  }, [delay, textToCopy]);

  return (
    <div className="flex justify-start" style={{ height: "100px" }}>
      <div className="rounded shadow-lg text-center">
        {step === 1 && (
          <div className="text-6xl font-bold animate-pulse text-orange-300">
            Ctrl + C
          </div>
        )}
        {step === 2 && (
          <div className="text-6xl font-bold animate-pulse text-orange-300">
            Ctrl + V
          </div>
        )}
        {step === 3 && (
          <div className="relative flex items-center justify-center ">
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text animate-aurora text-6xl">
              {pastedText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CopyPasteAnimation;
