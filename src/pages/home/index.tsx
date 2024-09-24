import React, { useState } from 'react'

const Home = () => {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <div>
                    <h1>O que é to do list?</h1>
                    <p>Para garantir que todos/as estão na mesma página, uma breve explicação do que afinal é to do list será bem útil.</p>
                    <p>Esse recurso foi uma das primeiras funcionalidades de gestão de tarefas a serem criadas. Remontando ao século XX, quando o Taylorismo (modelo que racionaliza o tempo e a produção de trabalho) ainda era o principal framework operacional – depois dele passamos para o Fordismo e agora estamos na expansão do Toyotismo.</p>
                    <p>Bem, nessa fase em que a produtividade operacional era o foco, engenheiros propuseram um método em que os funcionários listariam suas tarefas para o respectivo dia de trabalho, ordenando-as pelo nível de prioridade. Como resultado, os funcionários passaram a registrar maior nível de produtividade, pois conseguiram ser objetivos em suas pautas de trabalho e de fato se dedicar naquilo que é importante.</p>
                </div>
                <div>
                    <h1>Como Funciona?</h1>
                    <p>Nos botões do topo da tela, clique no botão "To-Do"</p>
                    <p>Para criar uma nova tarefa, digite o nome dela no campo para texto e clique no botão "Criar Tarefa"</p>
                    <p>Para Finalizar uma tarefa, clique na "Check box" da tarefa que deseja finalizar</p>
                </div>
            </div>
        </>
    )
}

export default Home;