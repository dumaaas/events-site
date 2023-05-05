import aboutBg from "../../public/images/about.jpg";

export default function about() {
  return (
    <div className="flex w-full h-screen overflow-auto">
      <div className="w-[40%] about-text relative z-[30]">
        <div className="text-white max-w-[900px] px-[80px] pt-[140px] pb-[50px] flex flex-col">
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
      <div className="fixed top-0 right-0 overflow-hidden about-cover"
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          width: "60%",
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
