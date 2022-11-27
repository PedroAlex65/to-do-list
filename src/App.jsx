import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

import { Container, ToDoList, Button, Input, ListItem, Trash, Check } from './styles'


function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')



  function cliqueiNoInput(event) {

    setTask(event.target.value)

  }

  function cliqueiNoBotao() {
    if(task) {
    setList([...list, { id: uuid(), task, finished: false }])
    }}


  function finalizarTarefa(id) {
    const newList = list.map(item => (

      item.id === id ? { ...item, finished: !item.finished } : item

    ))

    setList(newList)
  }

  function deletarTarefa(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)

  }


  return (
    <Container>
      <ToDoList>
        <Input onChange={cliqueiNoInput} placeholder="O que eu tenho que fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>

          { list.length > 0 ? (
            list.map(item => (
              <ListItem key={item.id} infinished={item.finished}>
                <Trash onClick={() => finalizarTarefa(item.id)} />
                <li >{item.task}</li>
                <Check onClick={() => deletarTarefa(item.id)} />
              </ListItem>
            ))
          ): (
            <h3>Não Há Tarefas</h3>
          )}
          
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
