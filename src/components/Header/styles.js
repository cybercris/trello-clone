import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;

  h1 {
    color: #707070;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 14px;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;

  input {
    padding: 6px 12px;
    border: 1px solid #dadde2;
    border-radius: 4px;
    color: #707070;
    width: 40%;
    margin-right: 10px;

    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-style: italic;
      font-weight: 500;
      color: #9ca3ab;
    }
  }
`;

export const Dropdown = styled.div`
  height: 100%;
  width: 160px;
  background: #f4f5f7;
  border-radius: 4px;
  font-size: 13px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    color: #566780;
    margin-right: 8px;
  }
`;
