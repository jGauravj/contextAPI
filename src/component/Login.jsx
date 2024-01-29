import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <div className="flex justify-center mt-3">
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 py-1 outline:none rounded-lg px-3 mr-3"
        />

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 py-1 outline:none rounded-lg px-3 "
        />
        <button
          className="ring-2 bg-blue-200 px-4 py-1 rounded-lg ml-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
