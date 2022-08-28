import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLogin } from "../../type";

const Login = () => {
  const LOGIN_URL = "http://localhost:4000/login";
  const AUTH_URL = "http://localhost:4000/auth";

  // const fetchDate = async () => {
  //   const response = await axios.get(DATABASE_URL);
  //   setLogin(response.data);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   fetchDate();
  // }, []);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user_id = (
      e.currentTarget.elements.namedItem("id") as HTMLInputElement
    ).value;
    const user_password = (
      e.currentTarget.elements.namedItem("pasword") as HTMLInputElement
    ).value;
    const user_email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    await axios.post(LOGIN_URL, {
      name: user_id,
      password: user_password,
      email: user_email,
    });
    const data = await axios.get(AUTH_URL);
    console.log(data);
  };

  return (
    <div>
      로그인페이지 입니다.
      <form onSubmit={onSubmitHandler}>
        <div>
          <input id="id" type="text" required placeholder={"아이디"} />
        </div>
        <div>
          <input id="pasword" type="password" placeholder={"비밀번호"} />
        </div>
        <div>
          <input id="email" type="text" placeholder={"이메일"} />
        </div>
        <button>로그인</button>
      </form>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </div>
  );
};

export default Login;
