import aboutBg from "../../public/images/contact.jpg";
import { useState } from "react";

export default function contact() {
  const [labelNamePosition, setLabelNamePosition] = useState("down");
  const [labelEmailPosition, setLabelEmailPosition] = useState("down");
  const [labelMessagePosition, setLabelMessagePosition] = useState("down");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLabelFocus = (type) => {
    switch (type) {
      case "name":
        setLabelNamePosition("up");
        break;
      case "email":
        setLabelEmailPosition("up");
        break;
      case "message":
        setLabelMessagePosition("up");
        break;
      default:
        break;
    }
  };
  const handleLabelBlur = (type) => {
    switch (type) {
      case "name":
        if (name.length < 1) setLabelNamePosition("down");
        break;
      case "email":
        if (email.length < 1) setLabelEmailPosition("down");
        break;
      case "message":
        if (message.length < 1) setLabelMessagePosition("down");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex w-full h-screen overflow-auto">
      <div className="w-[40%] about-text relative z-[30]">
        <div className="text-white max-w-[900px] px-[80px] pt-[140px] pb-[50px] flex flex-col">
          <h2 className="text-2xl font-light uppercase ">Keep in touch</h2>
          <div className="py-[50px]">
            <p className="text-xl font-bold uppercase">
              It is always good time to talk
            </p>
          </div>
          <div className="relative flex flex-col gap-[25px]">
            <div className="relative">
              <input
                onClick={() => handleLabelFocus("name")}
                onBlur={() => handleLabelBlur("name")}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className=" placeholder:text-white py-[8px] w-full bg-transparent border-0 border-b focus:outline-none border-b-white"
              />
              <label
                className={`${
                  labelNamePosition === "down"
                    ? "top-[8px]"
                    : "top-[-12px] text-[12px]"
                } absolute transition-all ease-in-out duration-300 left-0`}
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                onClick={() => handleLabelFocus("email")}
                onBlur={() => handleLabelBlur("email")}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className=" placeholder:text-white py-[8px] w-full bg-transparent border-0 border-b focus:outline-none border-b-white"
              />
              <label
                className={`${
                  labelEmailPosition === "down"
                    ? "top-[8px]"
                    : "top-[-12px] text-[12px]"
                } absolute transition-all ease-in-out duration-300 left-0`}
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                onClick={() => handleLabelFocus("message")}
                onBlur={() => handleLabelBlur("message")}
                onChange={(e) => setMessage(e.target.value)}
                rows={1}
                className=" placeholder:text-white py-[8px] w-full bg-transparent border-0 border-b focus:outline-none border-b-white"
              />
              <label
                className={`${
                  labelMessagePosition === "down"
                    ? "top-[8px]"
                    : "top-[-12px] text-[12px]"
                } absolute transition-all ease-in-out duration-300 left-0`}
              >
                Message
              </label>
            </div>
            <button className="relative inline-flex contact-btn">
              <span className="">Submit</span>
            </button>
            <div className="flex items-center justify-between mt-[30px] gap-[20px] flex-wrap">
              <div className="flex flex-col gap-[8px]">
                <p>(068) 836-393</p>
                <p>Serdara Šćepana 5</p>
                <p>Nikšić, Montenegro</p>
              </div>
              <div className="flex gap-[12px]">
                <div className="text-[14px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:border-black hover:text-black w-[116px] h-[116px] border border-white rounded-full flex items-center justify-center">
                    LinkedIn
                </div>
                <div className="text-[14px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:border-black hover:text-black w-[116px] h-[116px] border border-white rounded-full flex items-center justify-center">
                    Facebook
                </div>
                <div className="text-[14px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:border-black hover:text-black w-[116px] h-[116px] border border-white rounded-full flex items-center justify-center">
                    Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed top-0 right-0 overflow-hidden about-cover"
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          width: "60%",
          height: "100%",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
