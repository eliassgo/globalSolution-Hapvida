'use client';
import Image from 'next/image';
// import { copy, linkIcon, loader, tick } from "../transmissible-disease";
import linkIcon from 'public/images/transmissible-disease/link.svg';
import { useState } from 'react';
const Summarizer = () => {
  const [article, setArticle] = useState({
    url: '',
    sumary: '',
  });

  const handleSubmit = async () => {
    alert('Submitted');
  };

  return (
    <section className='flex flex-col items-center justify-between sm:flex-row'>
      <section className='sm bg-black-gradient-2 mx-auto mt-10 flex h-[400px] w-[98%]  flex-col items-center justify-evenly rounded-[10px] bg-slate-300 sm:mt-0 sm:w-[600px]'>
        <div className=''>
          <h2 className='font-poppins text-xl font-bold text-white'>
            Resumir
            <span className='text-gradient ml-1.5'>Artigos</span>
          </h2>
        </div>
        {article.sumary != '' && article.sumary != null ? (
          <div
            className='scroll-container h-[85%] w-[95%] overflow-auto rounded-sm border border-gray-100/10 p-2'
            style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
          >
            Seu artigo vai estar aqui...
          </div>
        ) : null}
      </section>
      <section className='mt-8 w-full max-w-xl'>
        <h1 className='font-poppins xs:text-[48px] xs:leading-[76.8px] w-full text-[48px] font-semibold leading-[66.8px] text-white'>
          Não entendeu um artigo ? <br className='hidden sm:block' />
          <span className='text-gradient'>Nos facilitamos pra você</span>
        </h1>
        <h2 className='mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl'>
          Sabe aqueles artigos medicos que você não entendeu nada ?{' '}
          <br className='hidden sm:block' />
          <span className='text-white'>
            Nos vamos resumi-lo e deixar prontinho para você chegar e ler, é
            facil e rapido só digitar/colar o link e nos fazemos o resto por
            você. Teste e veja como é facil.
          </span>
        </h2>
        {/*  Search*/}
        <div className='mx-auto mt-6 flex w-full max-w-[760px] flex-col gap-2'>
          <form
            className='relative flex items-center justify-center'
            onSubmit={handleSubmit}
          >
            <Image
              src={linkIcon}
              alt='link icon'
              className='absolute left-0 my-2 ml-3 w-5'
            />
            <input
              type='url'
              placeholder='Coloque seu link aqui '
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className='url_input peer text-gray-700'
            />

            <button
              type='submit'
              className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
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
