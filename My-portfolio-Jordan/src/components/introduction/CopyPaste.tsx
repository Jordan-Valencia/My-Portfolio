import { memo, useCallback, useEffect, useState } from "react";

interface CopyPasteAnimationProps {
  textToCopy: string;
  delay?: number;
}

const CopyPasteAnimation = memo<CopyPasteAnimationProps>(({ 
  textToCopy, 
  delay = 0 
}) => {
  const [animationState, setAnimationState] = useState({
    step: 0,
    pastedText: ""
  });

  useEffect(() => {
    let timeoutCtrlC: ReturnType<typeof setTimeout>;
    let timeoutCtrlV: ReturnType<typeof setTimeout>;
    let timeoutPaste: ReturnType<typeof setTimeout>;

    const startAnimation = () => {
      timeoutCtrlC = setTimeout(() => {
        setAnimationState(prev => ({ ...prev, step: 1 }));
        
        timeoutCtrlV = setTimeout(() => {
          setAnimationState(prev => ({ ...prev, step: 2 }));
          
          timeoutPaste = setTimeout(() => {
            setAnimationState({
              step: 3,
              pastedText: textToCopy
            });
          }, 800);
        }, 600);
      }, delay);
    };

    startAnimation();

    return () => {
      clearTimeout(timeoutCtrlC);
      clearTimeout(timeoutCtrlV);
      clearTimeout(timeoutPaste);
    };
  }, [delay, textToCopy]);

  const renderContent = useCallback(() => {
    switch (animationState.step) {
      case 1:
        return (
          <div className="text-3xl md:text-6xl font-bold animate-pulse text-orange-300">
            Ctrl + C
          </div>
        );
      case 2:
        return (
          <div className="text-3xl md:text-6xl font-bold animate-pulse text-orange-300">
            Ctrl + V
          </div>
        );
      case 3:
        return (
          <div className="relative flex items-center justify-center">
            <span className="text-3xl md:text-6xl text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text animate-aurora">
              {animationState.pastedText}
            </span>
          </div>
        );
      default:
        return null;
    }
  }, [animationState.step, animationState.pastedText]);

  return (
    <div className="flex justify-start h-[100px]">
      <div className="rounded shadow-lg text-center">
        {renderContent()}
      </div>
    </div>
  );
});

CopyPasteAnimation.displayName = 'CopyPasteAnimation';

export default CopyPasteAnimation;