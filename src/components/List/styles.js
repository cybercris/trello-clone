import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  flex: 0 0 344px;
  background: #f4f5f7;

  & + div {
    margin-left: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 52px;
    padding: 0 14px;
    background: #e4e6eb;

    h2 {
      color: #707070;
      font-weight: 400;
      font-size: 16px;
    }

    button {
      height: 16px;
      border: 0;
      cursor: pointer;
      background: #e4e6eb;

      img {
        height: 16px;
      }
    }
  }

  ul {
    padding: 10px 12px;
  }

  div ~ button {
    margin-top: 14px;
  }

  div ~ form {
    margin-top: 14px;
  }
`;

export const ButtonAdd = styled.button`
  width: 100%;
  border: 2px dashed #b8b8b8;
  padding: 14px 10px;
  background: transparent;
  color: #979797;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-right: 4px;
  }
`;

export const FormAdd = styled.form`
  div {
    padding: 14px 12px;
    background: #ffffff;
    box-shadow: 0px 1px 3px #00000029;
    border-radius: 3px;
    min-width: 320px;
    min-height: 88px;

    input {
      border: 0;
      width: 100%;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 10px;

  button {
    cursor: pointer;
  }

  button[type='submit'] {
    padding: 10px;
    background: #5aac44;
    border: 0;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    margin-right: 10px;

    &:hover {
      background: ${lighten(0.1, '#5aac44')};
    }

    &:active {
      background: ${darken(0.1, '#5aac44')};
    }
  }

  button[type='button'] {
    border: 0;
    background: transparent;
  }
`;
