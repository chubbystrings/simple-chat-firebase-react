import styled from "styled-components";

export const ChatWindowWrapper = styled.div`
  background: #fafafa;
  padding: 30px 20px;

  & .single {
    margin: 18px 0;
  }

  & .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }

  & .name {
    font-weight: bold;
    margin-right: 6px;
  }
  & .messages {
    max-height: 400px;
    overflow: auto;
  }
`;
