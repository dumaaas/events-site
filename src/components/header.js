import Link from "next/link";
import { Squash as Squash } from "hamburger-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setOpen(!isOpen);
    }
  }, [router.asPath]);

  return (
    <div className="fixed top-0 left-0 z-[100001] flex items-center justify-between w-full xl:px-[80px] lg:px-[50px] px-[30px] py-[20px]">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={`${isOpen ? "#000" : "#fff"}`}
          viewBox="0 0 32 32"
          width="96px"
          height="96px"
          className={`${isOpen ? 'delay-[0.2s]' : 'delay-[800ms]'} relative z-[100001] transition-all duration-200 ease-in-out`}
        >
          <path d="M 16 11 L 16 14.949219 L 15.919922 14.949219 C 15.439922 14.374219 14.845391 14.175781 14.150391 14.175781 C 12.730391 14.175781 11.660156 15.190438 11.285156 16.523438 C 10.385156 13.416438 6.4144531 13.510016 5.1894531 15.791016 L 5.1894531 14.525391 L 2.4492188 14.525391 L 2.4492188 13.154297 L 5.4492188 13.154297 L 5.4492188 11.005859 L 0 11.005859 L 0 20.648438 L 2.4492188 20.648438 L 2.4492188 16.595703 L 4.8945312 16.595703 C 4.8195313 16.893703 4.7792969 17.213828 4.7792969 17.548828 C 4.7792969 21.371828 9.9090625 22.327109 11.289062 18.787109 L 9.1894531 18.787109 C 8.4544531 19.880109 6.9003906 19.252438 6.9003906 18.023438 L 11.175781 18.023438 C 11.360781 19.618438 12.544688 21 14.179688 21 C 14.884688 21 15.530781 20.639344 15.925781 20.027344 L 15.949219 20.027344 L 15.949219 20.648438 L 26.560547 20.648438 L 27.664062 19.341797 L 28.779297 20.648438 L 32 20.648438 L 29.300781 17.484375 L 31.964844 14.351562 L 28.845703 14.351562 L 27.759766 15.650391 L 26.634766 14.353516 L 20.699219 14.353516 L 20.699219 13.515625 L 23.505859 13.515625 L 23.505859 11 L 16 11 z M 18.304688 11.466797 L 23.054688 11.466797 L 23.054688 13.044922 L 20.25 13.044922 L 20.25 14.818359 L 23.025391 14.818359 L 23.025391 16.287109 L 20.220703 16.287109 L 20.220703 18.626953 L 23.025391 18.626953 L 23.025391 20.173828 L 18.304688 20.173828 L 18.304688 11.466797 z M 23.535156 14.515625 L 26.070312 17.496094 L 23.535156 20.476562 L 23.535156 18.091797 L 20.730469 18.091797 L 20.730469 16.816406 L 23.535156 16.816406 L 23.535156 14.515625 z M 24.449219 14.818359 L 26.435547 14.818359 L 27.765625 16.349609 L 29.044922 14.818359 L 30.970703 14.818359 L 28.699219 17.484375 L 31 20.173828 L 28.974609 20.173828 L 27.660156 18.630859 L 26.355469 20.173828 L 24.449219 20.173828 L 26.730469 17.496094 L 24.449219 14.818359 z M 8.1523438 15.599609 C 8.6654688 15.604234 9.1690625 15.947688 9.2890625 16.617188 L 6.9648438 16.617188 C 7.1173437 15.929188 7.6392187 15.594984 8.1523438 15.599609 z M 14.634766 15.890625 C 16.264766 15.890625 16.359766 19.175781 14.634766 19.175781 C 12.904766 19.175781 12.934766 15.890625 14.634766 15.890625 z" />
        </svg>
      </Link>

      <div className="sm:flex hidden items-center gap-[40px] text-white">
        <Link href="/">Događaji</Link>
        <Link href="/gallery">Galerija</Link>
        <Link href="/contact">Kontakt</Link>
        <Link href="/about">O nama</Link>
      </div>
      <div className="block sm:hidden relative z-[100001]">
        <Squash
          color={`${isOpen ? "#000" : "#fff"}`}
          toggled={isOpen}
          toggle={setOpen}
          easing="ease-in-out"
        />
      </div>
      <div
        className={`${
          isOpen ? "top-0" : "top-[-100vh] delay-[.7s]"
        } flex justify-center flex-col px-[20px] transition-all ease-in-out duration-500 absolute w-screen h-screen bg-white z-[100000] left-0`}
      >
        <div className={`${isOpen ? 'opacity-1' : 'opacity-0 delay-[400ms]'} w-full transition-all ease-in-out duration-200 flex items-center justify-center flex-col`}>
          <Link
            className={`${
              isOpen
                ? "translate-x-0 delay-[290ms]"
                : "translate-x-[120%] delay-[350ms]"
            } transition-all ease-in-out duration-700 relative after:text-[30px] after:transform after:rotate-[-45deg] w-full after:content-['→'] after:absolute after:right-0 after:top-[12px] py-[20px] text-[22px] font-semibold border-b-[2px] border-black`}
            href="/"
          >
            Događaji
          </Link>
          <Link
            className={`${
              isOpen
                ? "translate-x-0 delay-[340ms]"
                : "translate-x-[120%] delay-[300ms]"
            } transition-all ease-in-out duration-700 relative after:text-[30px] after:transform after:rotate-[-45deg] w-full after:content-['→'] after:absolute after:right-0 after:top-[12px] py-[20px] text-[22px] font-semibold border-b-[2px] border-black`}
            href="/gallery"
          >
            Galerija
          </Link>
          <Link
            className={`${
              isOpen
                ? "translate-x-0 delay-[390ms]"
                : "translate-x-[120%] delay-[250ms]"
            } transition-all ease-in-out duration-700 relative after:text-[30px] after:transform after:rotate-[-45deg] w-full after:content-['→'] after:absolute after:right-0 after:top-[12px] py-[20px] text-[22px] font-semibold border-b-[2px] border-black`}
            href="/contact"
          >
            Kontakt
          </Link>
          <Link
            className={`${
              isOpen
                ? "translate-x-0 delay-[440ms]"
                : "translate-x-[120%] delay-[200ms]"
            } transition-all ease-in-out duration-700 relative after:text-[30px] after:transform after:rotate-[-45deg] w-full after:content-['→'] after:absolute after:right-0 after:top-[12px] py-[20px] text-[22px] font-semibold border-b-[2px] border-black`}
            href="/about"
          >
            O nama
          </Link>
        </div>
      </div>
    </div>
  );
}
