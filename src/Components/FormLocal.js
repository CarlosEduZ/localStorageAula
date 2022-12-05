import React, { useState, useEffect } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const guardarNome = () => {
    localStorage.setItem("usuario", nome);
    setNome("");
  };
  const acessarNome = () => {
    const user = localStorage.getItem("usuario");
    console.log(user);
  };
  const onChangeTarefa = (event) => {
    setTarefa(event.target.value);
  };

  const adicionartarefa = () => {
    const novaLista = [...listaTarefa, tarefa];
    setListaTarefa(novaLista);
    setTarefa("");
  };

  const guardarTarefa = () => {
    localStorage.setItem("tarefa", JSON.stringify(listaTarefa));
  };
  const acessarTarefa = () => {
    setListaTarefa(JSON.parse(localStorage.getItem("tarefa")));
  };
  useEffect(() => {
    setListaTarefa(JSON.parse(localStorage.getItem("tarefa")));
  }, []);

  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input name="nome" id="nome" onChange={onChangeNome} value={nome} />
      </label>
      <div>
        <button onClick={guardarNome}>Guardar Dados</button>
        <button onClick={acessarNome}>Acessar Dados</button>
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input
          name="tarefa"
          id="tarefa"
          onChange={onChangeTarefa}
          value={tarefa}
        />
      </label>
      <button type="button" onClick={adicionartarefa}>
        adicionar Tarefa
      </button>
      <ul>
        {listaTarefa.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={guardarTarefa}>Guardar tarefa</button>
        <button onClick={acessarTarefa}>Acessar tarefa</button>
      </div>
    </Form>
  );
}
