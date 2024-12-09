import React from "react";

function FloatingContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-auto">
      <div>
          <div className="py-16">{children}</div>
      </div>
    </div>
  );
}

export default FloatingContainer;
