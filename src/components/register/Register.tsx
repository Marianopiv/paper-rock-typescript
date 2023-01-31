import React, { useState } from "react";
import { Users } from "../../interface/interfaces";
import Button from "../../UI/Button";
import { useAuth } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import useServices from "../../hook/useServices";

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string>("");

  const [user, setUser] = useState<Users>({
    email: "",
    password: "",
  });

  const { signup } = useServices();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors('')
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error:any) {
      setErrors(error.message);
    }
  };

  console.log(user)
  return (
    <div className="">
        
      <form
        onSubmit={handleSubmit}
        className="flex gap-10 pt-40 flex-col items-center justify-center"
      >
        <h3 className="uppercase  text-white w-1/4 text-xl font-bold">
          Register new user
        </h3>{" "}
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 rounded-md"
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="youremail@pivo.com"
          id=""
        />
        <label className="text-white" htmlFor="password">
          Password
        </label>{" "}
        <input
          className="p-2 rounded-md"
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="******"
        />{" "}
        {errors&&<p className="text-red-500">{errors}</p>}
        <Button text={"register"} />
      </form>{" "}
    </div>
  );
};

export default Register;
