import ITarefa from '../../../types/tarefa';
import style from './item.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa 
    }:ITarefa){

    return(
    <li 
     className={
         `${style.item}
          ${selecionado ? style.itemSelecionado:''} 
          ${completado ? style.itemCompletado: ''}`} 
     onClick={()=> !completado && selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
    })}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={style.concluido} arial-label="tarefa completada"></span>}
    </li>
    )
}

