import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-white font-sans flex-col">
      <div className="flex flex-col w-full p-5">
      <div className="bg-white w-full mt-35 justify-center flex">
        <p className="text-rosa text-[50px] font-extrabold">Cleaner+</p>
      </div>
      <div className="mb-3 w-full justify-center flex">
      <p className="text-rosa text-[25px] font-medium">Junte-se nessa nova jornada</p>
      </div>
      <div className="w-full absolute left-0 top-[50%] flex justify-center">
      <div className="aspect-[2/1] border-black border-8 w-[300px] h-[570px] rounded-3xl">
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
        <div className="bg-rosa-sclaro mt-79 w-full px-40 z-1000">
        <p className="text-4xl font-extrabold text-white mt-10 text-center w-full mb-3">Encontrar diaristas nunca foi tão fácil</p>
        <p className="text-2xl font-medium text-center text-white mb-5 w-full">Com o cleaner+ você encontra profissionais de limpeza perto de você <br/> de forma prática e segura</p>
        <div className="flex flex-row gap-20 w-full justify-center">
          <div className="w-[178px] h-[272px]">
        <Image 
      width={400} 
      height={150} 
      alt="Imagem"
      className="rounded-3xl"
      style={{height: "100%", width: "100%"}}
      src={"Group 49.svg"}/>
      </div>
      <div className="w-[178px] h-[272px]">
        <Image 
      width={400} 
      height={150} 
      alt="Imagem"
      className="rounded-3xl"
      style={{height: "100%", width: "100%"}}
      src={"Group 48.svg"}/>
      </div>
        </div>
        <p className="text-5xl font-extrabold text-white mt-10 text-center w-full mb-10">Faça o pré-cadastro e ganhe um brinde🎁</p>
        <p className="text-3xl font-bold text-center text-white mb-3 w-full">O que é o pré-cadastro?</p>
        <p className="text-2xl font-medium text-center text-white mb-10 w-full">O pré-cadastro é um pequeno formulário que nos ajuda a responder varias questões para a gente vazer o lançamento perfeito para você e ainda nos vamos desponibilizar para as 50 primeiras pessoas que responderem um brinde para agradecer pela ajuda</p>
        <p className="text-3xl font-bold text-center text-white mb-3 w-full">Como fazer o pré-cadastro</p>
        <p className="text-2xl font-medium text-center text-white mb-5 w-full">Para fazer ele é muito simples apenas preencher o formulario no botão pré-cadastro feito ele vamos mandar um email em até 3 dias para você para explicar mais sobre a cleaner+</p>
        <div className="w-full flex justify-center mb-10">
      <button className=" bg-white hover:bg-cinza-claro cursor-pointer text-rosa-sclaro font-extrabold px-5 py-2 rounded-lg">Pré-cadastro</button>
      </div>
        </div>
    </div>
  );
}
