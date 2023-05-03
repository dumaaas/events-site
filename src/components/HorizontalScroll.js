import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HorizontalScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Kreirajte animaciju pomicanja
    const timeline = gsap.timeline({ repeat: -1, paused: true });
    timeline.to(scrollRef.current, {
      duration: 10,
      x: "-=100%",
      ease: "none",
    });
    timeline.play();
  }, []);

  return (
    <div className="horizontal-scroll" ref={scrollRef}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return <div className="card"></div>;
}
