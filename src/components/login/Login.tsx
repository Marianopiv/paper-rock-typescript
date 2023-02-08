import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Provider";
import { Users } from "../../interface/interfaces";
import Button from "../../UI/Button";
import logo from "../../assets/logo.png";
import HighScore from "../highScore/HighScore";
import useServices from "../../hook/useServices";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const [user, setUser] = useState<Users>({
    email: "",
    password: "",
  });

  const { fullUsers } = useAuth();
  const { login } = useServices();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error: any) {
      setErrors(error.message);
    }
  };

  return (
    <>
      {modal && <HighScore fullUsers={fullUsers} setModal={setModal} />}
      <div className="text-white w-screen h-screen flex flex-col gap-7 items-center">
        <img
          className="w-70 h-44 relative animate__animated animate__heartBeat"
          src={logo}
          alt=""
        />

        <form
          onSubmit={handleSubmit}
          className="border-2 flex flex-col gap-4 justify-center rounded-md p-8 min-w-20 min-h-10"
        >
          <h3 className="font-bold uppercase tracking-widest">Login</h3>
          <span>User</span>
          <input
            name="email"
            onChange={handleChange}
            className="text-black rounded-md py-1 z-40 dark:bg-white"
            type="text"
          />
          <span>Password</span>{" "}
          <input
            name="password"
            onChange={handleChange}
            className="text-black rounded-md py-1 dark:bg-white"
            type="password"
          />
          {errors ? (
            <p className="text-red-500 text-sm">{errors}</p>
          ) : (
            <p className="h-8 w-56"></p>
          )}
          <Button text={"login"} />
        </form>
        <div className="flex  sm:gap-4">
          <Button action={() => setModal(!modal)} text={"high scores"} />
          <Button action={() => navigate("/register")} text={"register"} />
        </div>
      </div>
    </>
  );
};

export default Login;
