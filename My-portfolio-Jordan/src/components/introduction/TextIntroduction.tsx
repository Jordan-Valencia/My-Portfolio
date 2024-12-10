import { useState, useEffect } from "react";

function TextIntroduction() {
  const [escritura, setEscritura] = useState<string>(""); 
  const [mostrarCursor, setMostrarCursor] = useState<boolean>(true); 
  const FullText: string = "Joordan Valencia Patiño"; 

  useEffect(() => {
    let index: number = 0;

    const escribir = () => {
      if (index < FullText.length - 1) {
        setEscritura((prev) => prev + FullText[index]); 
        index++;
      } else {
        clearInterval(writeInterval); 
      }
    };

    const writeInterval = setInterval(escribir, 50); 

    return () => clearInterval(writeInterval); 
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setMostrarCursor((prev) => !prev); 
    }, 300); 

    return () => clearInterval(cursorInterval); 
  }, []);

  return (
    <div className="text-[#F8F8FF] flex h-auto justify-center items-center">
      <div className="flex text-3xl md:text-6xl">
        <p>
          {escritura}
          <span className={mostrarCursor ? "visible" : "invisible"}>|</span>
        </p>
      </div>
    </div>
  );
}

export default TextIntroduction;
