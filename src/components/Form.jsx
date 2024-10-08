import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== pass) {
      handleClick(email, pass);
    } else {
      alert("Email и Пароль не должны совпадать");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="email"
        required
        value={email}
        placeholder="Введите e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        value={pass}
        placeholder="Введите пароль"
        onChange={(e) => setPass(e.target.value)}
      />
      <button>{title}</button>
    </form>
  );
};

export default Form;
