
import Item from "./item";
import style from './lista.module.scss';
import  Itarefa  from '../../types/tarefa';

interface Props{
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({tarefas, selecionaTarefa}:Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) =>(
                    <Item 
                    key={item.id}
                    tarefa={item.tarefa}
                    tempo={item.tempo}
                    selecionado={item.selecionado}
                    selecionaTarefa={selecionaTarefa}
                    completado={item.completado}
                    id={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;