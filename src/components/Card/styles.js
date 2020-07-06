import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 3px #00000029;
  border-radius: 3px;
  min-width: 320px;
  min-height: 88px;
  cursor: grab;

  div {
    display: flex;
    align-items: center;

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      svg {
        visibility: hidden;
      }
    }

    input {
      border: 0;
      width: 100%;
      font: 14px 'Roboto', sans-serif;
    }
  }

  &:hover {
    svg {
      visibility: visible;
    }
  }

  ${(props) =>
    props.isDragging &&
    css`
      padding: 12px;
      border: 2px dashed rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      footer,
      img,
      svg {
        opacity: 0;
      }
    `}

  & + div {
    margin-top: 14px;
  }

  footer {
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 12px;

  div {
    display: flex;

    p {
      background: #0000000a;
      color: #818181;
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 3px;

      & + p {
        margin-left: 8px;
      }
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;

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

export const LastContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button[type='button'] {
    border: 0;
    background: transparent;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
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
  color: #2680eb;
  font-size: 13px;
`;
