import "./WhatsappButton.css";

export default function WhatsappButton(){

const whatsapp=()=>{

const numero="5511984644381";

const mensagem="Olá! Gostaria de um orçamento.";

window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);

}

return(

<div className="whatsapp" onClick={whatsapp}>

<img
src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
alt="WhatsApp"
/>

</div>

)

}