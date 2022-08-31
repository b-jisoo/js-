import axios from "axios";
import { useEffect } from "react";

const SIGNUP_URL = "http://localhost:4000/register";
axios.defaults.withCredentials = true;

export const Signup = () => {
  console.log("회원가입페이지입니다.");
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user_id = (
      e.currentTarget.elements.namedItem("name") as HTMLInputElement
    ).value;
    const user_password = (
      e.currentTarget.elements.namedItem("pasword") as HTMLInputElement
    ).value;
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    await axios.post(SIGNUP_URL, {
      name: user_id,
      password: user_password,
      email,
    });
  };

  useEffect(() => {}, []);

  return (
    <div>
      회원가입 페이지 입니다.
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <input placeholder="아이디" id="name" type="text" />
          </div>
          <div>
            <input placeholder="비밀번호" id="pasword" type="password" />
          </div>
          <div>
            <input placeholder="이메일" id="email" type="text" />
          </div>
          <button>회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
