import React from "react";

function FloatingContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-full w-1/2">
      <div>
          <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}

export default FloatingContainer;
