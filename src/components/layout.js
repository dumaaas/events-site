import Header from "./header";

import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulirajte vreme učitavanja
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <div
        className={" bg-black relative"}
      >
        <div className="circle-anim absolute z-[999999] flex items-center justify-center w-full h-screen text-white bg-black">
          <div className="flex gap-[20px] items-center overflow-hidden h-[20px]">
            <p className="letter-anim">0</p>
            <div className="relative w-[250px] overflow-hidden letter-anim-three delay-700 ">
              <div className="w-[250px] h-[1px] bg-gray-700 overflow-hidden"></div>
              <div className="loader-anim h-[2px] bg-white overflow-hidden absolute top-0 left-0"></div>
            </div>
            <p className="letter-anim-two">100</p>
          </div>
        </div>

        <div>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
