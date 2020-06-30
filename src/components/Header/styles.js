import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 80px;
  padding: 20px 30px;

  h1 {
    color: #707070;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 14px;
  }
`;

export const Search = styled.div`
  display: flex;

  input {
    padding: 6px 12px 8px;
    border: 1px solid #dadde2;
    border-radius: 4px;
    color: #707070;
    width: 40%;
    margin-right: 10px;
    font-size: 16px;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-style: italic;
      font-weight: 400;
      color: #9ca3ab;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 164px;
  padding: 0 10px;
  background: #e4e6eb;
  border: 0;
  border-radius: 4px;
  font-size: 13px;
  color: #566780;

  img {
    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #566780;
  }

  .rotate {
    transform: rotateZ(180deg);
  }
`;

export const Dropdown = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  p {
    color: #566780;
    font-size: 13px;
  }
`;

export const Circle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #eff5fb;
  margin-right: 8px;
`;
