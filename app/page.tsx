'use client';
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [matricula, setMatricula] = useState("");
  const [lista, setLista] = useState([]);

  const adicionar = () => {
    if (nome !== "" && cpf !== "" && matricula !== "") {
      setLista([...lista, {
        nome: nome,
        cpf: cpf,
        matricula: matricula,
        id: Math.random()
      }])
      setNome("")
      setCpf("")
      setMatricula("")
    } else {
      alert("Preencha tudo");
    }
  }

  const excluir = (id) => {
    if (confirm("Deseja excluir?")) {
      setLista(lista.filter(item => item.id !== id))
    }
  }

  const editar = (item) => {
    alert("Não sei fazer isso ainda");
  }

  return (
    <div style={{ padding: 10 }}>
      <h2>Cadastro Operador</h2>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} /><br/>
      <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} /><br/>
      <input placeholder="Matrícula" value={matricula} onChange={e => setMatricula(e.target.value)} /><br/>
      <button onClick={adicionar}>Adicionar</button>

      <h3>Lista</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matrícula</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(item => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>
                <button onClick={() => editar(item)}>Editar</button>
                <button onClick={() => excluir(item.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
