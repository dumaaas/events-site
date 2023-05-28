import aboutBg from "../../public/images/about.jpg";

export default function about() {
  return (
    <div className="flex w-full h-screen overflow-auto">
      <div className="sm:w-[50%] xl:w-[40%] about-text relative z-[30] sm:after:w-[50%] xl:after:w-[40%] sm:before:w-[50%] xl:before:w-[40%]">
        <div className="text-white max-w-[900px] xl:px-[80px] lg:px-[50px] px-[30px] pt-[140px] pb-[50px] flex flex-col">
          <h2 className="text-2xl font-light uppercase ">About us</h2>
          <div className="py-[50px]">
            <p className="text-xl font-bold uppercase">Name of the persona</p>
            <p className="text-lg uppercase">Position of the persona</p>
          </div>
          <p className="text-sm pb-[20px]">
            Carole de Bona establishes herself in the Parisian market in the
            mid-nineties with an event–Espace Carole de Bona–held in an
            extraordinary industrial space in the very heart of the capital, in
            Place des Petits-Pères. Here, for the first time, she reveals her
            take on creativity, gathering under one roof all of the most
            interesting emerging designers of the moment: Isabel Marant and
            Christophe Lemaire to name but a few.
          </p>

          <p className="text-sm pb-[20px]">
            Carole de Bona establishes herself in the Parisian market in the
            mid-nineties with an event–Espace Carole de Bona–held in an
            extraordinary industrial space in the very heart of the capital, in
            Place des Petits-Pères. Here, for the first time, she reveals her
            take on creativity, gathering under one roof all of the most
            interesting emerging designers of the moment: Isabel Marant and
            Christophe Lemaire to name but a few.
          </p>
          <p className="text-sm pb-[20px]">
            Carole de Bona establishes herself in the Parisian market in the
            mid-nineties with an event–Espace Carole de Bona–held in an
            extraordinary industrial space in the very heart of the capital, in
            Place des Petits-Pères. Here, for the first time, she reveals her
            take on creativity, gathering under one roof all of the most
            interesting emerging designers of the moment: Isabel Marant and
            Christophe Lemaire to name but a few.
          </p>
          <p className="text-sm pb-[20px]">
            Carole de Bona establishes herself in the Parisian market in the
            mid-nineties with an event–Espace Carole de Bona–held in an
            extraordinary industrial space in the very heart of the capital, in
            Place des Petits-Pères. Here, for the first time, she reveals her
            take on creativity, gathering under one roof all of the most
            interesting emerging designers of the moment: Isabel Marant and
            Christophe Lemaire to name but a few.
          </p>
          <p className="text-sm pb-[20px]">
            Carole de Bona establishes herself in the Parisian market in the
            mid-nineties with an event–Espace Carole de Bona–held in an
            extraordinary industrial space in the very heart of the capital, in
            Place des Petits-Pères. Here, for the first time, she reveals her
            take on creativity, gathering under one roof all of the most
            interesting emerging designers of the moment: Isabel Marant and
            Christophe Lemaire to name but a few.
          </p>
          <p className="text-sm pb-[20px]">
            Carole de Bona establishes herself in the Parisian market in the
            mid-nineties with an event–Espace Carole de Bona–held in an
            extraordinary industrial space in the very heart of the capital, in
            Place des Petits-Pères. Here, for the first time, she reveals her
            take on creativity, gathering under one roof all of the most
            interesting emerging designers of the moment: Isabel Marant and
            Christophe Lemaire to name but a few.
          </p>
        </div>
      </div>
      <div className="fixed top-0 right-0 overflow-hidden about-cover xl:w-[60%] sm:w-[50%] w-full sm:opacity-100 opacity-20 sm:before:opacity-100 before:opacity-0"
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          height: "100%",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        
      </div>
    </div>
  );
}
