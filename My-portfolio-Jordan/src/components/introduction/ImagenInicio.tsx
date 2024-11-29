import React from "react";

function FloatingContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-auto">
      <div className="px-40 w-screen">
        <div className="rounded-xl">
          <div className="py-16">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default FloatingContainer;
