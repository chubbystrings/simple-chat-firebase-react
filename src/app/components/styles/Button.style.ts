import styled from "styled-components";
interface Props {
  link?: boolean;
  disabled?: boolean;
}
export const Button = styled.button`
  text-decoration: none;
  background: ${(props: Props) =>
    props.link ? "transparent" : props.disabled ? 'grey' : "#5ae4ca"};
  color: ${(props: Props) => (props.link ? "black" : "white")};
  font-weight: bold;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "pointer")};
`;
