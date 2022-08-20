import { Link } from "react-router-dom";
import styled from "styled-components";

const GUb_ul = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Gnb = () => (
  <nav className="gnb">
    <GUb_ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/products">상품목록</Link>
      </li>
      <li>
        <Link to="/cart">장바구니</Link>
      </li>
    </GUb_ul>
  </nav>
);

export default Gnb;
