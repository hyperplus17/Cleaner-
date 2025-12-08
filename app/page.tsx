import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-screen bg-white font-sans flex-col">
      <div className="flex flex-col w-full p-5">
      <div className="bg-white w-full 3xl:mt-90 lg:mt-35 mt-5 justify-center flex">
        <p className="text-rosa 3xl:text-[75px] text-[50px] font-extrabold">Cleaner+</p>
      </div>
      <div className="mb-3 w-full justify-center flex">
      <p className="text-rosa lg:text-[25px] 3xl:text-[35px] text-[23px] font-medium">Junte-se a essa nova jornada</p>
      </div>
      <div className="w-full absolute left-0 3xl:top-[61%] lg:top-[50%] top-[25%] flex justify-center">
      <div className="aspect-[2/1] border-black border-8 3xl:w-[450px] 3xl:h-[800px]  w-[300px] h-[570px] rounded-3xl">
      <Image 
      width={400} 
      height={150} 
      alt="Imagem"
      className="rounded-3xl"
      style={{height: "100%", width: "100%"}}
      src={"/1000103266_89040010b4ea759440ebb2ac120ab68f-04_12_2025, 22_57_15.jpg"}></Image>
      </div>
      </div>
      </div>
        <div className="bg-rosa-sclaro 3xl:mt-125 lg:mt-79 mt-107 w-full lg:px-40 px-7 z-1000">
        <p className="lg:text-4xl 3xl:text-[65px] text-[25px] lg:font-extrabold font-bold text-white mt-10 text-center w-full mb-3">Encontrar diaristas nunca foi tão fácil</p>
        <p className="lg:text-2xl 3xl:text-[45px] text-[15px] font-medium text-center text-white lg:mb-5 mb-1 w-full">Com o cleaner+ você encontra profissionais de limpeza perto de você <br/> de forma prática e segura</p>
        <div className="flex flex-row lg:gap-20 gap-10 w-full justify-center">
          <div className="3xl:w-[238px] 3xl:h-[332px] w-[178px] h-[272px]">
        <Image 
      width={400} 
      height={150} 
      alt="Imagem"
      className="rounded-3xl"
      style={{height: "100%", width: "100%"}}
      src={"Group 49.svg"}/>
      </div>
      <div className="3xl:w-[238px] 3xl:h-[332px] w-[178px] h-[272px]">
        <Image 
      width={400} 
      height={150} 
      alt="Imagem"
      className="rounded-3xl"
      style={{height: "100%", width: "100%"}}
      src={"Group 48.svg"}/>
      </div>
        </div>
        <p className="lg:text-5xl 3xl:text-[65px] text-[30px] font-extrabold text-white mt-10 text-center w-full lg:mb-10 mb-5">Faça o pré-cadastro e ganhe um brinde! 🎁</p>
        <p className="lg:text-3xl 3xl:text-[55px] text-[23px] font-bold text-center text-white mb-3 w-full">O que é o pré-cadastro?</p>
        <p className="lg:text-2xl 3xl:text-[45px] text-[15px] font-medium text-center text-white mb-10 w-full">O pré-cadastro é um pequeno formulário que nos ajuda a responder várias questões para que possamos fazer o lançamento perfeito para você. Além disso, iremos disponibilizar um brinde para as 50 primeiras pessoas que responderem — uma forma de agradecermos pela ajuda!</p>
        <p className="lg:text-3xl 3xl:text-[55px] text-[23px] font-bold text-center text-white mb-3 w-full">Como fazer o pré-cadastro</p>
        <p className="lg:text-2xl 3xl:text-[45px] text-[15px] font-medium text-center text-white mb-7 w-full">É muito simples! Basta preencher o formulário no botão “Pré-cadastro”. Após o envio, iremos mandar um e-mail em até 3 dias explicando tudo sobre a Cleaner+.</p>
        <div className="w-full flex justify-center mb-10">
          <Link href={"https://docs.google.com/forms/d/1--jVMRCAATgyB-0sSMnQrHnGyU-1Fq-HknGahvMXXHc/edit"}>
      <button  className=" bg-white hover:bg-cinza-claro cursor-pointer text-rosa-sclaro 3xl:text-[35px] font-extrabold px-5 py-2 rounded-lg">Pré-cadastro</button>
      </Link>
      </div>
        </div>
    </div>
  );
}
