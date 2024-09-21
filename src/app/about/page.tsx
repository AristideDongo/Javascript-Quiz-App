import Image from "next/image";
import image1 from "@/Images/Ivoit Agance.jpg";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center">
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-6">
          <p className="mb-2 text-center text-xl font-semibold text-black">
            Développé par les membres de{" "}
            <span className="font-bold text-black"> <span className="text-orange-500" >IVOIT</span> Agence <span className="text-orange-500" >Academy</span></span>, pour
            aider les nouveaux arrivés dans le monde de JavaScript.
          </p>
          <p className="font-bold text-center text-3xl text-black">ARISTIDE DONGO</p>
          <p className="font-bold text-center text-3xl text-black">ADAMA TRAORE</p>
          <p className="font-bold text-center text-3xl text-black">AUGUSTIN SELETE</p>
          <p className="font-bold text-center text-3xl text-black">MARC KOUAKOU</p>
          <p className="mt-4 text-center text-black font-semibold ">Sous le mentorat de:</p>
          <h3 className="text-3xl text-center font-bold text-blue-600"> <span className="text-black font-bold" >{`Atta Jean Anselme N'guettia`}</span><br className="mt-10" /> (Senior Developer Mobile & Web Expert | Specializing in TypeScript, Flutter,PHP, React, NestJS,NextJs & Clean Architecture)</h3>
        </div>
        <div className="w-full max-w-md">
          <Image
            src={image1} // Remplacez par le chemin de votre image
            alt="Description de l'image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <h3 className="text-3xl text-center font-bold text-black mt-10" >Contactez-nous si vous voulez avoir une formation personalisée pour être parmi les meilleurs</h3>
      <a href="https://wa.me/+2250777596686" target="_blank" >
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4" >
        Contacter-Nous
      </button>
      </a>
    </div>
  );
}
