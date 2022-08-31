import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getLogin } from "../../type";

const Login = () => {
  console.log("로그인페이지입니다.");
  const LOGIN_URL = "http://localhost:4000/login";
  const AUTH_URL = "http://localhost:4000/auth";

  const emailRef = useRef<HTMLInputElement>(null); // 제너릭으로 antd의 Input 컴포넌트를 넣음
  const passwordRef = useRef<HTMLInputElement>(null); // useRef로 DOM 직접 선택

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user_email = emailRef.current!.value; // emailRef.current 까지 하면 null 혹은 Input이 나옴 Non-null assertion을 사용해서 null일 가능성을 없애줌. 타입이 Input으로 고정됨
    const user_password = passwordRef.current!.value;

    await axios
      .post(LOGIN_URL, {
        email: user_email,
        password: user_password,
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
          <input id="email" type="text" placeholder={"이메일"} ref={emailRef} />
        </div>
        <div>
          <input
            id="pasword"
            type="password"
            placeholder={"비밀번호"}
            ref={passwordRef}
          />
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
