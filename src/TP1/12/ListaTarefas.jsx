export default function ListaTarefas(){
    const tarefas = ["Comprar café", "Estudar React", "Fazer exercícios"];

    return(
        <div>
            <h2>Lista de Tarefas</h2>
            <ol>
                {tarefas.map((tarefa,index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ol>
        </div>
    )

}