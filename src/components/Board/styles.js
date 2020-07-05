import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

  ${(props) =>
    props.isLoading &&
    css`
      padding: 0;
      height: 100vh;
      align-items: center;
      justify-content: center;
    `}
`;

export const BoardHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

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
    border-radius: 3px;
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

  width: 164px;
  padding: 0 10px;
  background: #e4e6eb;
  border: 0;
  border-radius: 3px;
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

export const LeftSection = styled.div`
  display: flex;
  margin-right: 20px;
  border-right: 1px solid #eee;
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  p {
    color: #566780;
    font-size: 13px;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: #eff5fb;
  margin-right: 8px;
  color: #2680eb;
  font-size: 13px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 70px;
    height: 24px;
    border-radius: 3px;
    background: #0000000a;
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #818181;
      font-size: 12px;
    }
  }
`;

export const BoardColumns = styled.div`
  display: flex;
`;
