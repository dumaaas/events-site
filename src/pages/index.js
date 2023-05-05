import VerticalScroll from "../components/VerticalScroll";
import HorizontalScroll from "../components/HorizontalScroll";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Home() {
  const numbers = new Array(30).fill(1).map((_, index) => index + 1);
  const [contentPos, setContentPos] = useState(0);
  const [lastMousePos, setLastMousePos] = useState(0);
  const dragScrollRef = useRef();

  const handleStopScroll = () => {
    const mouseSpeed = contentPos - lastMousePos;
    const newSpeed = Math.min(Math.abs(mouseSpeed), 100) / 100;
    const newDuration = 1000 / newSpeed;
    setLastMousePos(contentPos);

    // Postavite novu trajanje animacije preko svojstva duration
    if (dragScrollRef.current) {
      dragScrollRef.current.duration = newDuration + 1000;
    }
  };

  const handleScroll = (pos) => {
    setContentPos(pos);
  };

  const addClass = () => {
    handleScroll();
    var cards = document.querySelectorAll("card");
    // var container = document.getElementById("test");
    // container.classList.add("blur-[2px]");
    cards.forEach((card) => {
      card.classList.add("pointer-events-none");
    });
  };

  const removeClass = () => {
    handleStopScroll();
    var cards = document.querySelectorAll("card");
    // var container = document.getElementById("test");
    // container.classList.remove("blur-[2px]");
    cards.forEach((card) => {
      card.classList.remove("pointer-events-none");
    });
  };

  return (
    <div>
      <ScrollContainer
        ref={dragScrollRef}
        onStartScroll={() => addClass()}
        onEndScroll={() => removeClass()}
        mouseScroll={{ activationDistance: 20, rubberBand: false }}
        className={
          
          ` w-screen h-screen filter overflow-hidden transition-all ease-out duration-200`
        }
        id="test"
      >
        <ResponsiveMasonry
          className="min-w-[200vw] "
          columnsCountBreakPoints={{ 350: 4, 750: 5, 900: 7 }}
        >
          <Masonry gutter="40px">
            {numbers.map((el) => (
              <div className="relative inline-block w-full h-full group z-[40]">
               <div className="absolute w-full h-full overflow-hidden flex items-end justify-start p-[20px] text-white">
               <div className="transition-all ease-in-out duration-200 right-0 z-[30] flex flex-col gap-[10px] w-full h-full top-0 absolute bg-[#1f3d4738] group-hover:backdrop-blur-[4px] group-hover:backdrop-blur-0 p-[30px] items-center justify-center ">
                  <p className="transition-all ease-in-out duration-200 transform translate-y-0 group-hover:translate-y-[10px] group-hover:opacity-0 opacity-100">22.10.1995</p>
                  <p className="transition-all ease-in-out duration-200 transform translate-y-0 group-hover:translate-y-[10px] group-hover:opacity-0 opacity-100">Koncert JLO</p>
                </div>
                <p className="ml-auto z-[99999] opacity-0 group-hover:opacity-100 transform translate-y-[10px] group-hover:translate-y-0 transition-all ease-in-out duration-500">
                  Detaljnije
                </p>
               </div>
                <img
                  key={el}
                  className=" object-cover w-full h-full transition-all duration-700 ease-in-out brightness-[0.8] relative z-[10]"
                  src={`/images/image${el}.jpg`}
                  style={{ width: "100%", display: "block" }}
                  alt="image"
                />
              </div>
            ))}

            {/* {numbers.map((el) => (
              <div key={el} className="relative overflow-hidden group row card">
                <div className="group-hover:right-0 flex flex-col gap-[10px] z-[30] w-full h-full top-0 absolute right-[-100%] bg-[#1f3d4738] backdrop-blur-[12px] p-[30px] items-center justify-center transition-all ease-in-out duration-1000">
                  <p>22.10.1995</p>
                  <p>Koncert JLO</p>
                </div>
                <p className="z-20 opacity-1 group-hover:opacity-0 transform translate-y-0 group-hover:translate-y-[10px] transition-all ease-in-out duration-500">
                  Koncert Jelena Rozga
                </p>
                <img
                  className="absolute top-0 z-[10] left-0 object-cover w-full h-full transition-all duration-700 ease-in-out brightness-[0.8]  group-hover:scale-125 "
                  src={`/images/image${el}.jpg`}
                  alt="image"
                />
              </div>
            ))} */}
          </Masonry>
        </ResponsiveMasonry>
      </ScrollContainer>
    </div>
  );
}
