import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  & p.email {
    font-size: 14px;
    color: #999;
  }
`;
