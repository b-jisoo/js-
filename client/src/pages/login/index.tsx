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

    const passwordElement = e.currentTarget.elements.namedItem(
      "pasword"
    ) as HTMLInputElement;
    const emailElement = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;

    const user_password = passwordElement.value;
    const user_email = emailElement.value;

    await axios
      .post(LOGIN_URL, {
        password: user_password,
        email: user_email,
      })
      .then((response) => console.log(response));
    const data = await axios.get(AUTH_URL);
    console.log(data);
  };

  return (
    <div>
      로그인페이지 입니다.
      <form onSubmit={onSubmitHandler}>
        <div>
          <input id="email" type="text" placeholder={"이메일"} />
        </div>
        <div>
          <input id="pasword" type="password" placeholder={"비밀번호"} />
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
