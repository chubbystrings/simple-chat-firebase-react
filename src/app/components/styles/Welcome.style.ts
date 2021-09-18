import styled from "styled-components";

export const Welcome = styled.div`
  text-align: center;
  padding: 20px 0;
  width: 90%;
  max-width: 960px;
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
  & form {
    width: 300px;
    margin: 20px auto;
  }
  & label {
    display: block;
    margin: 20px 0 10px;
  }
  & input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  & span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
 
`;

export const Error = styled.p`
  color: #ff3f80;
  font-size: 14px;
`
