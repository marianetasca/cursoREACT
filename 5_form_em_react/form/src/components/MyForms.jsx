import { useState } from "react";
import "./MyForms.css";

const MyForms = ({ user }) => {
  // 3 - GERENCIAMENTO DE DADOS
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "")

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando form");
    console.log(name, email, bio, role);

    // limpar formulario
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* criacao form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="descricao do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
            <span>funcao no sistema</span>
            <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">usuario</option>
                <option value="editor">editor</option>
                <option value="admin">admin</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
