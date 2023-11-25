'use client';
export const Button = (props: {
  styles: string;
  text?: string;
  href?: string;
}) => {
  const { styles } = props;

  const redirecionarParaSiteExterno = () => {
    window.location.href = props.href || 'https://hapvida.com.br'; // Substitua com o URL do site externo
  };

  return (
    <button
      type='button'
      className={`bg-blue-gradient font-poppins text-primary px-6 py-4 text-[18px] font-medium outline-none ${styles} rounded`}
      onClick={redirecionarParaSiteExterno}
    >
      {props.text ? props.text : 'Get Started'}
    </button>
  );
};
