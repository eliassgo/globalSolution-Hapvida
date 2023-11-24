'use client';
import Image from 'next/image';
import React from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Separator } from '@/components/ui/separator';

import Bem_estar from '~/images/bem-estar.png';
import diabetes from '~/images/diabetes.png';
import mental_health from '~/images/mental-health.png';
import obesidade from '~/images/obesidade.png';
const Card_diseases = () => {
  return (
    <div className='text-foreground mx-auto w-4/5'>
      <h3 className='text-white'>CONDIÇÕES</h3>
      <Separator className='mb-10 bg-cyan-500' />
      <div className='my-5 grid grid-cols-1 text-center font-bold text-sky-950 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4'>
        <div className='md mb-5 w-full bg-white text-center hover:bg-sky-950 hover:font-bold hover:text-red-700 hover:opacity-50'>
          <Image src={Bem_estar} alt='' className='h-48' />
          <AlertDialog>
            <AlertDialogTrigger>
              <h2 className='my-5'> Bem-Estar</h2>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Atividades físicas</AlertDialogTitle>
                <AlertDialogDescription>
                  Cuidar do corpo também exige a prática regular de atividades
                  físicas. A OMS recomenda que uma pessoa adulta realize pelo
                  menos 150 a 300 minutos de atividade aeróbica moderada a
                  vigorosa por semana, incluindo aquelas com doenças crônicas ou
                  incapacidade, e de 75 a 150 minutos por semana para atividades
                  físicas de nível intenso. A prática de exercícios físicos traz
                  inúmeros benefícios para a saúde, prevenindo diversas doenças,
                  como hipertensão, doenças cardiovasculares, respiratórias a
                  reumáticas, colesterol e obesidade. Além disso, a prática
                  contribui para a perda de gordura corporal, melhora a
                  circulação sanguínea, o sistema imunológico, a respiração e a
                  memória, aumenta a autoestima e fornece a sensação de
                  bem-estar e disposição.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Voltar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className='mb-5 w-full bg-white hover:bg-sky-950 hover:text-red-700 hover:opacity-50 '>
          <Image src={obesidade} alt='' className='h-48' />
          <AlertDialog>
            <AlertDialogTrigger>
              <h2 className='my-5 '>Obesidade</h2>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Vida saudável</AlertDialogTitle>
                <AlertDialogDescription>
                  <ul>
                    <li>
                      Tenha uma alimentação saudável, baseada em alimentos in
                      natura.
                    </li>
                    <li>Pratique atividades físicas.</li>
                    <li>Controle o consumo em excesso de sal e açúcar.</li>
                    <li>Beba pelo menos dois litros de água diariamente.</li>
                    <li>Tenha um sono adequado.</li>
                    <li>Monitore a pressão arterial regularmente.</li>
                    <li>Controle o colesterol.</li>
                    <li>Evite o consumo em excesso de bebidas alcóolicas.</li>
                    <li>
                      Faça exames preventivos de doenças cardiovasculares.
                    </li>
                    <li>Evite o tabagismo.</li>
                  </ul>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Voltar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className='mb-5 w-full bg-white hover:bg-sky-950 hover:text-red-700 hover:opacity-50 '>
          <Image src={mental_health} alt='' className='h-48' />
          <AlertDialog>
            <AlertDialogTrigger>
              <h2 className='my-5 '>Saúde Mental</h2>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Importância do cuidar de si mesmo
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Tudo isso mostra como manter a saúde mental em dia é
                  importante. Incluir na rotina algumas atividades de
                  autocuidado tem potencial para promover uma vida mais saudável
                  tanto na questão física quanto mental. Com isso, nós podemos
                  diminuir os níveis e efeitos do estresse no dia-a-dia,
                  diminuir o risco de doenças e ter mais disposição para lidar
                  com nossas tarefas e responsabilidades. Cuidar de si mesmo é o
                  primeiro passo para cuidar dos outros, por isso, quando se
                  pensa em cuidar da sua família, lembre-se que quanto mais
                  saudável estiver, mais poderá fazer por eles. O segredo é se
                  apoiar em atividades simples, mas que somadas estimulam o
                  corpo e a mente a se manterem elevados.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Voltar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className='mb-5 w-full bg-white hover:bg-sky-950 hover:text-red-700 hover:opacity-50 '>
          <Image src={diabetes} alt='' className='h-48' />
          <AlertDialog>
            <AlertDialogTrigger>
              <h2 className='my-5 '> Diabetes</h2>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tipos de diabetes:</AlertDialogTitle>
                <AlertDialogDescription>
                  Na maioria dos casos, a diabetes acontece no decorrer da vida,
                  conhecida como diabetes tipo 2, consequência principalmente
                  dos maus hábitos alimentares, mas também pode surgir desde o
                  nascimento.Esse é o caso do diabetes tipo 1. Além dos tipos 1
                  e 2, tem também a diabetes gestacional, que aparece durante a
                  gravidez e o pré-diabetes, que é quando o nível de açúcar no
                  sangue está alto, mas ainda não atingiu o nível para se
                  considerar uma pessoa diabética, propriamente dita. “No
                  início, geralmente, não tem sintomas. A alteração da glicemia
                  vai acontecendo e depois de anos é que os sinais vão
                  surgindo”, ressalta a endocrinologista Rebeca Pinheiro
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Voltar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Card_diseases;
