"use client"
export const Button = (props: {styles : string, text? : string, href?: string }) => {
  const {styles} = props

  const redirecionarParaSiteExterno = () => {
    window.location.href = props.href || "https://hapvida.com.br"; // Substitua com o URL do site externo
  };

  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded`} onClick={redirecionarParaSiteExterno}>
      {props.text ? props.text : "Get Started"}
      
    </button>
  )
}
