"use client"
import Image from "next/image";
// import { copy, linkIcon, loader, tick } from "../transmissible-disease";
import linkIcon from "public/images/transmissible-disease/link.svg";
import { useState } from "react";
const Summarizer = () => {
  const [article, setArticle] = useState({
    url: "",
    sumary: "",
  });

  const handleSubmit = async () => {
    alert("Submitted");
  };

  return (
    <section className="flex justify-between sm:flex-row flex-col items-center">
      
      <section className="flex justify-evenly items-center flex-col w-[98%] mx-auto sm  bg-slate-300 h-[400px] sm:w-[600px] sm:mt-0 mt-10 rounded-[10px] bg-black-gradient-2">
        <div className="">
          <h2 className="font-poppins font-bold text-white text-xl">
          Resumir
            <span className="text-gradient ml-1.5">
              Artigos
            </span>

          </h2>
        </div>
        {article.sumary != "" && article.sumary != null ? (
                  <div className="w-[95%] h-[85%] rounded-sm overflow-auto scroll-container border border-gray-100/10 p-2" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  Seu artigo vai estar aqui...
          </div>
        ) : null
          }

      </section>
      <section className="mt-8 w-full max-w-xl">
        <h1 className="font-poppins font-semibold xs:text-[48px] text-[48px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Não entendeu um artigo ? <br className="sm:block hidden" />
          <span className="text-gradient">Nos facilitamos pra você</span>
        </h1>
        <h2 className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl">
          Sabe aqueles artigos medicos que você não entendeu nada ? <br className="sm:block hidden" />
          <span className="text-white">Nos vamos resumi-lo e deixar prontinho para você chegar e ler, é facil e rapido só digitar/colar o link e nos fazemos o resto por você. Teste e veja como é facil.</span>
        </h2>
        {/*  Search*/}
        <div className="flex flex-col w-full gap-2 mx-auto mt-6 max-w-[760px]">
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <Image
              src={linkIcon}
              alt="link icon"
              className="absolute left-0 my-2 ml-3 w-5"
            />
            <input
              type="url"
              placeholder="Coloque seu link aqui "
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="url_input peer text-gray-700"
            />

            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            >
              ↵
            </button>
          </form>
          {/*  Browser History*/}
        </div>

        {/*  Results*/}
      </section>
    </section>
  );
};

export default Summarizer;
