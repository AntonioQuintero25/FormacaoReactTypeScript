import React from "react";
import style from './botao.module.scss'

interface Props{
    texto:string,
    type?:"button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Botao({onClick, type, texto}:Props){
        return(
            <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}
            >
                {texto}
            </button>
        )
}


export default Botao;